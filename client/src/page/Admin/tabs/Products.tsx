import { Plus, SquarePen, Search, Filter, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/Input";

const Products = () => {
  return (
   <div className="min-h-screen bg-stone-100 flex flex-col">
      <header className="bg-white min-h-[5rem] border py-3 px-5 flex items-center justify-between gap-4">
        <div>
          <p className="font-bold text-xl flex gap-3"><ShoppingBag /> Products</p>
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
            <Plus className="cursor-pointer" />
            <SquarePen className="cursor-pointer" />
          </div>
        </div>
      </header>

            <section className="p-4 flex-1 overflow-auto">
              asdasd
            </section>
      
    </div>
  )
}

export default Products
