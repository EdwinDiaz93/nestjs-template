import { Repository } from 'typeorm';

import { Injectable, BadRequestException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { HelpersService } from '../common/helpers/helpers.service'

import { PaginationDto } from '../common/dtos'
import { CreateRoleDto, UpdateRoleDto } from './dto';

import { Resource } from '../common/models'

import { Rol } from './entities'

import { SeedRol } from '../seed/interfaces'

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
    private readonly helpersService: HelpersService,
  ) { }

  async create(createRoleDto: CreateRoleDto) {
    try {
      const rol = this.rolRepository.create(createRoleDto);
      await this.rolRepository.save(rol);
      return rol;
    } catch (error) {
      this.handleDbExceptions(error);
    }
  }

  async findAll({ limit = 10, page = 1 }: PaginationDto) {
    const offset = await this.helpersService.getOffset(page, limit);

    const [roles, totalRows] = await this.rolRepository.findAndCount({
      take: limit,
      skip: offset,
      select: { id: true, name: true }
    });

    const paginationObject = await this.helpersService.generatePaginationObject(page, limit, totalRows, Resource.roles, roles);

    return paginationObject;
  }

  async findOne(id: string) {
    const rol = await this.rolRepository.findOneBy({ id });

    if (!rol) throw new NotFoundException(`rol with id ${id} not found`);

    return rol;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {

    const rol = await this.rolRepository.preload({ id, ...updateRoleDto })

    if (!rol) throw new NotFoundException(`Rol with id ${id} not found`);

    try {
      await this.rolRepository.save(rol);
      return rol;
    } catch (error) {
      this.handleDbExceptions(error);
    }
  }

  async remove(id: string) {
    await this.rolRepository.delete({ id });
  }

  async deleteAllRoles() {
    const queryBuilder = this.rolRepository.createQueryBuilder();
    await queryBuilder
      .delete()
      .where({})
      .execute();
  }

  async inserRoles(roles: SeedRol[]) {
    const rolesDb = this.rolRepository.create(roles)
    await this.rolRepository.insert(rolesDb);
    return rolesDb;
  }

  private handleDbExceptions(error: any) {

    if (error.code === '23505')
      throw new BadRequestException(`error: ${error.detail}`);

    console.log(error);
    throw new InternalServerErrorException(`something went wrong`);
  }

}
