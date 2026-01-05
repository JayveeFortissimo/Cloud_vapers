import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { itemsFormSchema } from "@/lib/formSchemas";
import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import InputImage from "@/components/common/ImagePicker";
import type { Products } from "@/page/Admin/tabs/sub-tabs/AddItems";
import { toast } from "sonner";

const AddItems = ({
  setData,
}: {
  setData: React.Dispatch<React.SetStateAction<Products[]>>;
}) => {
  const form = useForm<z.infer<typeof itemsFormSchema>>({
    resolver: zodResolver(itemsFormSchema),
    defaultValues: {
      product_name: "",
      product_price: 0,
      stocks: 0,
      sale_off: 0,
      date_released: new Date(),
      product_description: "",
      category: "",
      img: undefined,
    },
  });

  const { handleSubmit, reset, setValue } = form;

  function onSubmit(values: z.infer<typeof itemsFormSchema>) {
    if (!values.img) {
      toast.error("Image is required");
      return;
    }

    const productData: Products = {
      product_name: values.product_name,
      product_price: values.product_price,
      stocks: values.stocks,
      sale_off: values.sale_off,
      date_released: values.date_released,
      product_description: values.product_description,
      category: values.category,
      img: values.img,
    };
    setData((prev) => [...prev, productData]);
    toast.success("Item added successfully!");
    reset();
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <InputImage setValue={setValue} />

          <div className="w-full flex justify-center items-center gap-4">
            <FormField
              control={form.control}
              name="product_name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm font-medium mb-2">
                    Product Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Product Name"
                      {...field}
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="product_price"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm font-medium mb-2">
                    Product Price
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      value={field.value || ""}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value) || 0)
                      }
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full flex justify-center items-center gap-4">
            <FormField
              control={form.control}
              name="stocks"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm font-medium mb-2">
                    Stocks
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      value={field.value || ""}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value) || 0)
                      }
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sale_off"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-sm font-medium mb-2">
                    Sale Off
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      value={field.value || ""}
                      onChange={(e) =>
                        field.onChange(parseFloat(e.target.value) || 0)
                      }
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="date_released"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm font-medium mb-2">
                  Date Released
                </FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    value={
                      field.value
                        ? new Date(field.value).toISOString().split("T")[0]
                        : ""
                    }
                    onChange={(e) => field.onChange(new Date(e.target.value))}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                    className="bg-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="product_description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm font-medium mb-2">
                  Description
                </FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    className="bg-white border rounded min-h-[6rem] p-2"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm font-medium mb-2">
                  Category
                </FormLabel>
                <FormControl>
                  <select
                    {...field}
                    className="bg-white border rounded p-2"
                    name=""
                    id=""
                  >
                    <option value="NO SELECTED">Select Category</option>
                    <option value="E-Liquids">E-Liquids</option>
                    <option value="Vape Kits">Vape Kits</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="w-full">
            <Button variant={"default"} type="submit" className="w-full">
              Add Items
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddItems;
