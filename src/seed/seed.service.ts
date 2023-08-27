import { Injectable } from '@nestjs/common';

import { initialData } from '../seed/data';
import { SeedUser } from '../seed/interfaces';

import { UsersService } from '../users/users.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly userService: UsersService,
  ) { }

  async executeSeed() {
    await this.insertUsers(initialData.users);
    return 'Seed executed';
  }

  private async insertUsers(users: SeedUser[]) {
    await this.userService.deleteAllUsers();
    await this.userService.insertUsers(users);
  }

}
