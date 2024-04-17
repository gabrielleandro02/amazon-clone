import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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

  @Get(':idProduct')
  async getProduct(@Param('idProduct') idProduct: string) {
    return await this.productService.findById(idProduct);
  }

  @Patch(':idProduct')
  async updateProduct(
    @Param('idProduct') idProduct: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ) {
    return await this.productService.updateProduct(
      idProduct,
      name,
      price,
      description,
    );
  }
}
