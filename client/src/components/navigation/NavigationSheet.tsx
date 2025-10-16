import { Button } from "@/components/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";

export const NavigationSheet = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" size="icon" className="text-black">
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent className="px-6 py-3">
				<Logo />
				<NavMenu orientation="vertical" className="mt-6 [&>div]:h-full" />
			</SheetContent>
		</Sheet>
	);
};
