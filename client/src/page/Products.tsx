import { useEffect } from "react";
import { priceRange } from "@/lib/dummyProducts";
import MyDropdowns from "@/components/ui/Dropdown";
import { Button } from "@/components/ui/Button";
import { ShoppingCart } from "lucide-react";
import { fetchAllProducts } from "@/store/AllProducts";
import { type AppDispatch } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "@/store/store";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { productList } = useSelector((state: RootState) => state.allProducts);
  
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="container mx-auto flex flex-col py-10 px-5 md:px-0 gap-5">
      <header className="flex justify-between">
        <MyDropdowns
          name={"Categories"}
          //set can check if there have a duplicate heheh please pag-aralan to nakaklimutan mo eh
          category={[
            ...new Set(productList?.map((product) => product?.category)),
          ]}
        />

        <MyDropdowns
          name={"Price"}
          category={[...new Set(priceRange?.map((product) => product?.name))]}
        />
      </header>

      <section className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
        {productList?.map((pro) => {
          return (
            <div
              key={pro?.product_id}
              className="flex flex-col justify-center border h-auto w-full rounded p-5 text-white gap-3"
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
                    See More
                  </Button>
                  <Button variant={"productBtn"} className="flex-1">
                    Cart <ShoppingCart />
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Products;
