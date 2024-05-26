import { Controller, Query, Get } from '@nestjs/common'
import { BigsellerService } from './bigseller.service'

@Controller('bigseller')
export class BigsellerController {
  constructor(private bigsellerService: BigsellerService) {}

  @Get('/cookie')
  async updateCookie(
    @Query('cookie') cookie: string,
    @Query('session') session: string,
  ): Promise<boolean> {
    return await this.bigsellerService.updateCookie(cookie, session)
  }
}
