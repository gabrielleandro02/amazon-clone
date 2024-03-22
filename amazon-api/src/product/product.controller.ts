import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ) {
    return await this.productService.create(name, price, description);
  }

  @Get()
  async getProducts() {
    return await this.productService.findAll();
  }
}
