import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm';

import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

import { JwtPayload } from './interfaces';

import { ValidRoles } from '../common/models'

import { LoginDto } from './dto';
import { CreateUserDto } from '../users/dto';

import { User } from '../users/entities';
import { Rol } from '../roles/entities';


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,

    private readonly jwtService: JwtService,
  ) { }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto
    const user = await this.userRepository.findOneBy({ email });

    if (!user) throw new UnauthorizedException(`Credential are not valid`);

    if (!bcrypt.compareSync(password, user.password)) throw new UnauthorizedException(`Credential are not valid`);

    const roles = await user.roles;

    const flatRoles = roles.map(rol => rol.name);

    delete user.password;
    delete user['__roles__'];
    delete user['__has_roles__'];

    return {
      ...user,
      token: this.generateJwt({ id: user.id, roles: flatRoles })
    };
  }

  async register(createUserDto: CreateUserDto) {

    try {
      const userRol = await this.rolRepository.findOneBy({ name: ValidRoles.user });
      const user = this.userRepository.create({
        ...createUserDto,
        password: bcrypt.hashSync(createUserDto.password, bcrypt.genSaltSync(10)),
        roles: Promise.resolve([]),
      });

      user.roles = Promise.resolve([userRol]);

      await this.userRepository.save(user);

      const roles = await user.roles;
      const flatRoles = roles.map(rol => rol.name);

      delete user.password;
      delete user['__roles__'];
      delete user['__has_roles__'];      
      
      return {
        ...user,
        token: this.generateJwt({ id: user.id, roles: flatRoles }),
      };
    } catch (error) {
      console.log(error);
      if (error.code === '23505') throw new BadRequestException(`error: ${error.detail}`);

      throw new InternalServerErrorException('Something went wrong');
    }

  }

  private generateJwt(jwtPayload: JwtPayload) {
    const token = this.jwtService.sign(jwtPayload);
    return token;
  }

}
