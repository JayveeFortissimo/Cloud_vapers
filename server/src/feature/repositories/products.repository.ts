import { databaseConnection } from "../../config/database";
import { Products } from "../types/products";
export class ProductsRepositories {
  private readonly db = databaseConnection;

  async getAllProducts(offset: number, limit: number) {
    return await this.db.query(`SELECT * FROM products LIMIT $1 OFFSET $2`, [
      limit,
      offset,
    ]);
  }

async addItmes(products: Products[]) {
  const values: any[] = [];

  const placeholders = products
    .map((p, i) => {
      const idx = i * 8;

      values.push(
        p.product_name,
        p.product_price,
        p.stocks,
        p.sale_off,
        p.date_released,
        p.product_description,
        p.category,
        p.img
      );

      return `(
        $${idx + 1},
        $${idx + 2},
        $${idx + 3},
        $${idx + 4},
        $${idx + 5},
        $${idx + 6},
        $${idx + 7},
        $${idx + 8}
      )`;
    })
    .join(",");

  const query = `
    INSERT INTO products
    (product_name, product_price, stocks, sale_off, date_released, product_description, category, img)
    VALUES ${placeholders}
    RETURNING *
  `;

  return await this.db.query(query, values);
}

}
