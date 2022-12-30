import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { ConfigModule } from '@nestjs/config'
import { BigsellerService } from './bigseller.service'

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [BigsellerService],
  exports: [BigsellerService],
})
export class BigsellerModule {}
