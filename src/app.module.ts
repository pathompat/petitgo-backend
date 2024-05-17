import { Module, MiddlewareConsumer } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'
import { AuthMiddleware } from './middleware/auth.middleware'
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
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('')
  }
}
