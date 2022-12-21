import { Module } from '@nestjs/common'
import { ProductsModule } from './products/products.module'
import { AuthModule } from './auth/auth.module'
import { BigsellerController } from './bigseller/bigseller.controller';
import { BigsellerModule } from './bigseller/bigseller.module';

@Module({
  imports: [ProductsModule, AuthModule, BigsellerModule],
  controllers: [BigsellerController],
})
export class AppModule {}
