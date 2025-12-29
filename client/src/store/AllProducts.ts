import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "@/service/Products";

export interface Product {
  product_id: number;
  product_name: string;
  product_description: string;
  product_price: number;
  stocks: number;
  product_image: string;
  category: string;
}
interface Pagination {
  currentPage: number;
  totalPages: number;
  perPage: number;
}

interface AllProductsState {
  productList: Array<Product>;
  pagination: Pagination;
  loading: boolean;
}

const initialState: AllProductsState = {
  productList: [],
  pagination: {
    currentPage: 1,
    totalPages: 1,
    perPage: 10,
  },
  loading: false,
};

export const fetchAllProducts = createAsyncThunk(
  "fetchAllProducts",
  async () => {
    try {
      const { products, pagination } = await getAllProducts();
      return { products, pagination };
    } catch (error) {
      console.log(error);
    }
  }
);

const allProducts = createSlice({
  name: "allProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.productList = action?.payload?.products;
      state.pagination = action?.payload?.pagination;
      state.loading = false;
    });

    builder.addCase(fetchAllProducts.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default allProducts.reducer;
