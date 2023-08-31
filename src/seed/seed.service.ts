import { Injectable } from '@nestjs/common';

import { initialData } from '../seed/data';
import { SeedRol, SeedUser } from '../seed/interfaces';

import { UsersService } from '../users/users.service';
import { RolesService } from '../roles/roles.service';

import { Rol } from '../roles/entities'

@Injectable()
export class SeedService {

  constructor(
    private readonly usersService: UsersService,
    private readonly rolesService: RolesService,
  ) { }

  async executeSeed() {
    // borrar e insertar roles
    const { adminRol, userRol } = await this.insertRoles(initialData.roles);

    // borrar e insertar usuarios
    await this.insertUsers(adminRol, userRol);

    return 'Seed executed';
  }

  private async insertUsers(adminRol: Rol, userRol: Rol) {

    await this.usersService.deleteAllUsers();
    await this.usersService.insertUsers(initialData.admin,initialData.users,adminRol,userRol);
  }

  private async insertRoles(roles: SeedRol[]) {
    await this.rolesService.deleteAllRoles();
    const [adminRol, userRol] = await this.rolesService.inserRoles(roles);
    return {
      adminRol,
      userRol,
    };
  }

}
