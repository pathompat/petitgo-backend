import { Injectable } from '@nestjs/common';
import { CreateBigsellerDto } from './dto/create-bigseller.dto';
import { UpdateBigsellerDto } from './dto/update-bigseller.dto';

@Injectable()
export class BigsellerService {
  create(createBigsellerDto: CreateBigsellerDto) {
    return 'This action adds a new bigseller';
  }

  findAll() {
    return `This action returns all bigseller`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bigseller`;
  }

  update(id: number, updateBigsellerDto: UpdateBigsellerDto) {
    return `This action updates a #${id} bigseller`;
  }

  remove(id: number) {
    return `This action removes a #${id} bigseller`;
  }
}
