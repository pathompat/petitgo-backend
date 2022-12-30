import { Module } from '@nestjs/common'
import { ProductsModule } from './products/products.module'
import { AuthModule } from './auth/auth.module'
import { BigsellerModule } from './bigseller/bigseller.module'

@Module({
  imports: [ProductsModule, AuthModule, BigsellerModule],
})
export class AppModule {}
