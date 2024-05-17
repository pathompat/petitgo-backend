import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateCookieDto {
  @IsNotEmpty()
  @IsString()
  cookie: string
}
