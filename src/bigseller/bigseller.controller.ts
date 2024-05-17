import { Controller, Body, Put } from '@nestjs/common'
import { BigsellerService } from './bigseller.service'
import { UpdateCookieDto } from './dto/update-cookie-dto'

@Controller('bigseller')
export class BigsellerController {
  constructor(private bigsellerService: BigsellerService) {}

  @Put('/cookie')
  async update(@Body() body: UpdateCookieDto) {
    return await this.bigsellerService.updateCookie(body.cookie)
  }
}
