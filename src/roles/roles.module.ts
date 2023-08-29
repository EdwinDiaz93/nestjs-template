import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'

import { AuthModule } from '../auth/auth.module';
import { CommonModule } from '../common/common.module';


import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';

import { Rol } from './entities'

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([Rol]),
    CommonModule,
  ],
  exports: [RolesService]
})
export class RolesModule { }
