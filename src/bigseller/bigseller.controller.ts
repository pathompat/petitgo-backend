import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BigsellerService } from './bigseller.service';
import { CreateBigsellerDto } from './dto/create-bigseller.dto';
import { UpdateBigsellerDto } from './dto/update-bigseller.dto';

@Controller('bigseller')
export class BigsellerController {
  constructor(private readonly bigsellerService: BigsellerService) {}

  @Post()
  create(@Body() createBigsellerDto: CreateBigsellerDto) {
    return this.bigsellerService.create(createBigsellerDto);
  }

  @Get()
  findAll() {
    return this.bigsellerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bigsellerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBigsellerDto: UpdateBigsellerDto) {
    return this.bigsellerService.update(+id, updateBigsellerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bigsellerService.remove(+id);
  }
}
