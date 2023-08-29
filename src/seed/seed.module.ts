import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { RolesModule } from '../roles/roles.module';

import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    UsersModule,
    RolesModule,
  ],
})
export class SeedModule { }
