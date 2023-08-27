import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config';

import { CommonModule } from '../common/common.module';


import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { User } from './entities/user.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([User]),
    CommonModule,
  ],
  exports: [UsersService]
})
export class UsersModule { }
