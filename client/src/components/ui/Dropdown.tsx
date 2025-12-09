import { Button } from "./Button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenus";

export default function DropdownMenuDemo({
  name,
  category,
}: {
  name?: string;
  category?: any[];
}) {
  const [categoryName, setCategory] = useState<string>('');
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">{name} {categoryName && ": " + categoryName}</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {category?.map((pro, index) => (
          <DropdownMenuItem key={index}>
            <DropdownMenuLabel onClick={() => setCategory(pro)}>{pro}</DropdownMenuLabel>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
