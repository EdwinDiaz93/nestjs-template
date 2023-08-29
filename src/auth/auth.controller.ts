import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger'

import { AuthService } from './auth.service';

import { LoginDto } from './dto';
import { CreateUserDto } from '../users/dto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }


}
