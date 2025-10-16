import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { ShoppingBasket } from "lucide-react";

const CartSheet = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<ShoppingBasket className="cursor-pointer" />
			</SheetTrigger>
			<SheetContent className="px-6 py-3">adadasd</SheetContent>
		</Sheet>
	);
};

export default CartSheet;
