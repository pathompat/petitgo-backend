import { Controller, Query, Get } from '@nestjs/common'
import { BigsellerService } from './bigseller.service'

@Controller('bigseller')
export class BigsellerController {
  constructor(private bigsellerService: BigsellerService) {}

  @Get('/cookie')
  async update(@Query('cookie') cookie: string): Promise<string> {
    const res = await this.bigsellerService.updateOrGetCookie(cookie)
    return res
  }
}
