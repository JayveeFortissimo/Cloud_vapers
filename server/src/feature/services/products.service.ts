import { ProductsRepositories } from "../repositories/products.repository";

export class ProductsService {
  constructor(private productRepository: ProductsRepositories) {}

   async getAllProducts(offset: number, limit: number) {
    const products = await this.productRepository.getAllProducts(offset, limit);

    return products.rows;
  }
}
