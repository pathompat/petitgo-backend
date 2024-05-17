import { Global, Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'
import { ApiKeyStrategy } from './api-key.strategy'
import { AuthService } from './auth.service'
import { ConfigService } from '@nestjs/config'

@Global()
@Module({
  imports: [PassportModule],
  providers: [ApiKeyStrategy, AuthService, ConfigService],
  exports: [PassportModule],
})
export class AuthModule {}
