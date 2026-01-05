import {
  Plus,
  SquarePen,
  Search,
  Filter,
  ShoppingBag,
  DeleteIcon,
} from "lucide-react";
import { Input } from "@/components/ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "@/store/store";
import { type AppDispatch } from "@/store/store";
import { Button } from "@/components/ui/Button";
import { fetchAllProducts } from "@/store/AllProducts";
import { useEffect, useState } from "react";

import AddItems from "./sub-tabs/AddItems";
import EditItems from "./sub-tabs/EditItems";

const Products = () => {
  const [tabs, setTabs] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const { productList } = useSelector((state: RootState) => state.allProducts);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col">
      <header className="bg-white min-h-[5rem] border py-3 px-5 flex items-center justify-between gap-4">
        <div>
          <p className="font-bold text-xl flex gap-3">
            <ShoppingBag /> Products
          </p>
          <p className="text-stone-400 text-sm">
            It will show all products listed in the store.
          </p>
        </div>

        <div className="w-full max-w-[30rem] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 h-4 w-4" />
          <Input
            className="pl-10 pr-10 border rounded-2xl bg-stone-50/50"
            placeholder="Search products..."
          />
          <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 h-4 w-4 cursor-pointer" />
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Plus className="cursor-pointer" onClick={() => setTabs("add")} />
            <SquarePen
              className="cursor-pointer"
              onClick={() => setTabs("edit")}
            />
          </div>
        </div>
      </header>

      {tabs === "add" ? (
        <AddItems />
      ) : tabs === "edit" ? (
        <EditItems />
      ) : (
        <section className="p-4 flex-1 overflow-auto min-h-screen w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
          {productList?.map((pro) => {
            return (
              <div
                key={pro?.product_id}
                className="flex flex-col justify-center border h-auto w-full rounded p-5 text-gray-700 gap-3"
              >
                {/* <img src={pro.imgUrl} alt="vape Image" className="h-[25rem]" /> */}
                <p className="text-2xl font-extrabold">{pro.product_name}</p>
                <p>{pro?.product_description}</p>
                <div className="w-full flex justify-between items-center">
                  <div className="w-full">
                    <p>$ {pro?.product_price}</p>
                    <p>Stocks {pro?.stocks}</p>
                  </div>
                  <div className="flex justify-center items-center gap-3 w-full">
                    <Button variant={"ghost"} className="flex-1">
                      Edit
                    </Button>
                    <Button variant={"productBtn"} className="flex-1">
                      Delete <DeleteIcon />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Products;
