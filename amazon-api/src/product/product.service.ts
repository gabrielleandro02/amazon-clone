import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async create(
    name: string,
    price: number,
    description: string,
  ): Promise<Product> {
    const newProduct = new this.productModel({ name, price, description });
    return await newProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findById(idProduct: string): Promise<Product> {
    return this.productModel.findById(idProduct).exec();
  }

  async updateProduct(
    idProduct: string,
    name: string,
    price: number,
    description: string,
  ): Promise<Product> {
    const foundProduct = await this.productModel.findById(idProduct).exec();

    foundProduct.name = name;
    foundProduct.price = price;
    foundProduct.description = description;

    await this.productModel.updateOne(
      { _id: idProduct },
      {
        name,
        price,
        description,
      },
    );

    return foundProduct;
  }
}
