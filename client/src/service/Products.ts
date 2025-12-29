import api from "@/lib/api";

export const getAllProducts = async () => {
  const response = await api.get("api/products?page=1&limit=10");
  return response.data;
};
