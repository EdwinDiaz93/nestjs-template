import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '../common/common.module';


import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { User, Rol, UserRol } from './entities';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature(
      [
        User,
        Rol,
        UserRol,
      ]
    ),
    CommonModule,
    AuthModule,
  ],
  exports: [
    TypeOrmModule,
    UsersService
  ]
})
export class UsersModule { }
