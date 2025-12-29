import { databaseConnection } from "../../config/database";

export class ProductsRepositories {
  private readonly db = databaseConnection;

  async getAllProducts(offset: number, limit: number) {
    return await this.db.query(`SELECT * FROM products LIMIT $1 OFFSET $2`, [limit, offset]);
  } 
}
