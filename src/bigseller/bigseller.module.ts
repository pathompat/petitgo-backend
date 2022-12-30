import { Module } from '@nestjs/common'
import { BigsellerService } from './bigseller.service'

@Module({
  providers: [BigsellerService],
})
export class BigsellerModule {}
