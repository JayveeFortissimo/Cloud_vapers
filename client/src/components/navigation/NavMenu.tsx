import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavLink } from "react-router-dom";

import type { ComponentProps } from "react";

const NavMenus: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Products",
    href: "products",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
      {NavMenus.map((pro) => (
        <NavigationMenuItem key={pro.name}>
          <NavLink
            to={pro.href}
            className={({ isActive }) =>
             `${ isActive ? "text-white border-b-3" : undefined} text-lg`
            }
            end
          >
            {pro.name}
          </NavLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);
