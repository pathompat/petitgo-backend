import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { ConfigModule } from '@nestjs/config'
import { BigsellerService } from './bigseller.service'
import { BigsellerController } from './bigseller.controller'

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [BigsellerController],
  providers: [BigsellerService],
  exports: [BigsellerService],
})
export class BigsellerModule {}
