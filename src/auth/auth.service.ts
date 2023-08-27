import * as bcrypt from 'bcrypt'
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


import { UsersService } from '../users/users.service';

import { JwtPayload } from './interfaces';
import { LoginDto } from './dto';
import { CreateUserDto } from '../users/dto';


@Injectable()
export class AuthService {

  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto
    const user = await this.userService.findOneByEmail(email);

    if (!user) throw new UnauthorizedException(`Credential are not valid`);

    if (!bcrypt.compareSync(password, user.password)) throw new UnauthorizedException(`Credential are not valid`);

    delete user.password;

    return {
      ...user,
      token: this.generateJwt({ id: user.id })
    };
  }

  async register(createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    delete user.password;

    return {
      ...user,
      token: this.generateJwt({ id: user.id }),
    };
  }

  private generateJwt(jwtPayload: JwtPayload) {
    const token = this.jwtService.sign(jwtPayload);
    return token;
  }

}
