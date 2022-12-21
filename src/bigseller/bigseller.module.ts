import { Module } from '@nestjs/common';
import { BigsellerService } from './bigseller.service';
import { BigsellerController } from './bigseller.controller';

@Module({
  controllers: [BigsellerController],
  providers: [BigsellerService]
})
export class BigsellerModule {}
