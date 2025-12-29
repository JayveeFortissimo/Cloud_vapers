import { ProductsService } from "../services/products.service";
import { Request, Response } from "express";


interface GetProductsQuery {
  page?: string;
  limit?: string;
}

export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  getAllProducts = async (req: Request<Record<string, never>, string, Record<string, never>,GetProductsQuery>, res: Response) => {

    const pageStr = req.query.page || "1";
    const limitStr = req.query.limit || "10";

    const page = parseInt(pageStr as string);
    const limit = parseInt(limitStr as string);

    const offset = (page - 1) * limit;

    try {
      const products = await this.productService.getAllProducts(offset, limit);
      res.status(200).json({
        products: products,
        pagination: {
          currentPage: page,
          perPage: limit,
                  // Baguhin mo to base sa stocks ha
          total: products.length,
          totalPages: Math.ceil(products.length / limit),
        },
      });
    } catch (_error) {
      console.log(_error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
}
