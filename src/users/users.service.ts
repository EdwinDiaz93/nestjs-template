import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm'

import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'

import { HelpersService } from '../common/helpers/helpers.service';

import { Resource } from '../common/models';
import { CreateUserDto, UpdateUserDto } from './dto';
import { PaginationDto } from '../common/dtos/pagination.dto';

import { User } from './entities';
import { SeedUser } from '../seed/interfaces';



@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly helperService: HelpersService,
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {

      const user = await this.userRepository.create({
        ...createUserDto,
        password: bcrypt.hashSync(createUserDto.password, bcrypt.genSaltSync(10)),
      });

      await this.userRepository.save(user);

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
      select: { id: true, email: true, fullName: true }
    });

    const paginationObject = await this.helperService.generatePaginationObject(page, limit, totalRows, Resource.users, users);

    return paginationObject;
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) throw new NotFoundException(`user with id ${id} not found`);

    delete user.password;

    return user;
  }



  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.userRepository.preload({ id, ...updateUserDto })

      const userDb = {
        ...user,
        password: updateUserDto.password && bcrypt.hashSync(updateUserDto.password, bcrypt.genSaltSync(10)),
      }
      await this.userRepository.save(userDb);
      return userDb;
    } catch (error) {
      this.handleDbExceptions(error);
    }


  }

  async remove(id: string) {
    await this.userRepository.delete(id);
  }

  async insertUsers(users: SeedUser[]) {
    const usersToStore = users.map(user => this.userRepository.create(user));
    await this.userRepository.save(usersToStore);
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
