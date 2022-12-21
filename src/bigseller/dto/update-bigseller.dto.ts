import { PartialType } from '@nestjs/mapped-types';
import { CreateBigsellerDto } from './create-bigseller.dto';

export class UpdateBigsellerDto extends PartialType(CreateBigsellerDto) {}
