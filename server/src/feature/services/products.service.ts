import { ProductsRepositories } from "../repositories/products.repository";
import { Products } from "../types/products";
export class ProductsService {
  constructor(private productRepository: ProductsRepositories) {}

  async getAllProducts(offset: number, limit: number) {
    const products = await this.productRepository.getAllProducts(offset, limit);
    return products.rows;
  }

  async addItems(products: Products[]) {
    return await this.productRepository.addItmes(products);
  }
}
