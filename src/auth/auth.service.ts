import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthService {
  private apiKeys: string[]

  constructor(private config: ConfigService) {
    this.apiKeys = [this.config.get<string>('API_KEY')]
  }

  validateApiKey(apiKey: string) {
    return this.apiKeys.find((apiK) => apiKey === apiK)
  }
}
