import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

import { JwtPayload } from './interfaces';
import { LoginDto } from './dto';
import { CreateUserDto } from '../users/dto';

import { User } from '../users/entities/user.entity';


@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly jwtService: JwtService,
  ) { }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto
    const user = await this.userRepository.findOneBy({ email });

    if (!user) throw new UnauthorizedException(`Credential are not valid`);

    if (!bcrypt.compareSync(password, user.password)) throw new UnauthorizedException(`Credential are not valid`);

    delete user.password;

    return {
      ...user,
      token: this.generateJwt({ id: user.id })
    };
  }

  async register(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create({
      ...createUserDto,
      password: bcrypt.hashSync(createUserDto.password, bcrypt.genSaltSync(10)),
    });

    await this.userRepository.save(user);

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
