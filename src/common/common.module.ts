import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HelpersService } from './helpers/helpers.service';

@Module({
  providers: [HelpersService],
  imports: [
    ConfigModule,
  ],
  exports: [HelpersService]
})
export class CommonModule { }
