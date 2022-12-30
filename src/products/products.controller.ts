import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ProductsService } from './products.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { BigsellerService } from '../bigseller/bigseller.service'

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private bigsellerService: BigsellerService,
  ) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto)
  }

  @UseGuards(AuthGuard())
  @Get()
  async findAll() {
    const bigseller = await this.bigsellerService.getListProductShopee()
    return { firestore: await this.productsService.findAll(), bigseller }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id)
  }
}
