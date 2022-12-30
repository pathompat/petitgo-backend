import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { ProductsModule } from './products/products.module'
import { BigsellerModule } from './bigseller/bigseller.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    ProductsModule,
    BigsellerModule,
  ],
})
export class AppModule {}
