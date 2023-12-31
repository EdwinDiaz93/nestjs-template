import * as bcrypt from 'bcrypt'
import { In, Repository } from 'typeorm'

import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'

import { HelpersService } from '../common/helpers/helpers.service';

import { Resource, ValidRoles } from '../common/models';

import { CreateUserDto, UpdateUserDto } from './dto';
import { PaginationDto } from '../common/dtos/pagination.dto';

import { User } from './entities';
import { Rol } from '../roles/entities';

import { SeedUser } from '../seed/interfaces';



@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,

    private readonly helperService: HelpersService,
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {
      let roles;

      if (createUserDto.roles)
        roles = await this.rolRepository.findBy({ id: In(createUserDto.roles) });
      else
        roles = await this.rolRepository.findBy({ name: ValidRoles.user });

      const user = this.userRepository.create({
        ...createUserDto,
        password: bcrypt.hashSync(createUserDto.password, bcrypt.genSaltSync(10)),
        roles,
      });

      await this.userRepository.save(user);

      delete user.password;
      delete user.roles;

      return user
    } catch (error) {
      this.handleDbExceptions(error);
    }
  }

  async findAll({ page = 1, limit = 10 }: PaginationDto) {

    const offset = await this.helperService.getOffset(page, limit);

    const [users, totalRows] = await this.userRepository.findAndCount({
      take: limit,
      skip: offset,
      select: { id: true, email: true, fullName: true },
      loadEagerRelations: false,
    });

    const paginationObject = await this.helperService.generatePaginationObject(page, limit, totalRows, Resource.users, users);

    return paginationObject;
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) throw new NotFoundException(`user with id ${id} not found`);

    delete user.password;
    delete user.roles;

    return user;
  }



  async update(id: string, updateUserDto: UpdateUserDto) {

    const roles = await this.rolRepository.findBy({ id: In(updateUserDto.roles) });

    if (!roles || roles.length === 0) throw new BadRequestException('roles not found');

    const user = await this.userRepository.preload({ id, ...updateUserDto, roles })

    if (!user) throw new NotFoundException(`user with id ${id} not found`);

    const userDb = {
      ...user,
      password: updateUserDto.password && bcrypt.hashSync(updateUserDto.password, bcrypt.genSaltSync(10)),
    }

    try {
      await this.userRepository.save(userDb);

      delete userDb.password;
      delete userDb.roles;

      return userDb;
    } catch (error) {
      this.handleDbExceptions(error);
    }

  }

  async remove(id: string) {
    await this.userRepository.delete(id);
  }

  async insertUsers(users: SeedUser[]) {
    const usersToSave = users.map(user => this.userRepository.create(user));
    await this.userRepository.save(usersToSave);
  }

  async deleteAllUsers() {
    const queryBuilder = this.userRepository.createQueryBuilder();
    await queryBuilder
      .delete()
      .where({})
      .execute();
  }

  private handleDbExceptions(error: any) {

    if (error.code === '23505')
      throw new BadRequestException(`error: ${error.detail}`);

    console.log(error);
    throw new InternalServerErrorException(`something went wrong`);
  }

}
