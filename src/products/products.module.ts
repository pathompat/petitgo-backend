import { Module } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductsController } from './products.controller'
import { BigsellerModule } from 'src/bigseller/bigseller.module'

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [BigsellerModule],
})
export class ProductsModule {}
