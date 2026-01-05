import { useState, useEffect, useMemo } from "react";
import AddItemsForm from "@/components/section/admin/AddItemsForm";
import { Button } from "@/components/ui/Button";
import api from "@/lib/api";
import toast from "@/lib/toast";
export interface Products {
  product_name: string;
  product_price: number;
  stocks: number;
  sale_off: number;
  date_released: Date;
  product_description: string;
  category: string;
  img: File | undefined;
}

const AddItems = () => {
  const [data, setData] = useState<Products[]>([]);
  console.log("Current data:", data);
  console.log(Array.isArray(data));
  const imageUrls = useMemo(() => {
        //Bakit Map? Para mabilis maghanap ng URL gamit ang index.
    const urlMap = new Map<number, string>();
    data.forEach((item, index) => {
      if (item.img) {
        urlMap.set(index, URL.createObjectURL(item.img));
      }
    });
 
    return urlMap;
  }, [data]);


  useEffect(() => {
    const urls = Array.from(imageUrls.values());
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imageUrls]);


  const addProducts = async() =>{
    try{
    await api.post("api/addProducts", {products:data});
    toast.success("Products added successfully");
    setData([]);
    }catch(error){
      console.error("Error adding products:", error);
    }finally{
      // WAit here bak mag lagay ako ng mga count pooling ata yun 
    }
  }

  return (
    <div className="flex-1 overflow-auto p-4 flex">
      <div className="min-h-auto w-full bg-white rounded-lg shadow-md p-4 flex-1 grid gird-cols-1 md:grid-cols-2 gap-4">

        <div className="border rounded p-3">
          <AddItemsForm setData={setData} />
        </div>

        <div className="border rounded p-4 flex-1 overflow-auto flex flex-col justify-between">
          <header className="flex-1 ">
            {data.length === 0 ? (
              <p className="text-center text-gray-500">No data found</p>
            ) : (
              <div>
                {data.map((items, index) => {
                  const imageUrl = imageUrls.get(index);
                  return (
                    <div key={index} className="mb-4 p-2 border-b">
                      <div className="flex gap-3">
                        {imageUrl && (
                          <img
                            src={imageUrl}
                            alt={items.product_name}
                            className="w-[30%] h-auto max-h-48 object-contain mb-2"
                          />
                        )}
                        <div>
                          <h3 className="font-semibold text-lg">
                            {items.product_name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            Price: ${items.product_price}
                          </p>
                          <p className="text-sm text-gray-600">
                            Stocks: {items.stocks}
                          </p>
                          <p className="text-sm text-gray-600">
                            Sale Off: {items.sale_off}
                          </p>
                          <p className="text-sm text-gray-800">
                            Date Released: {items.date_released.toDateString()}
                          </p>
                          <p className="text-sm text-gray-800">
                            Description: {items.product_description}
                          </p>
                          <p className="text-sm text-gray-800">
                            Category: {items.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </header>

          <footer>
            <div className="w-full">
              <Button variant={"default"} className="w-full" onClick={addProducts}>
                Submit
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
