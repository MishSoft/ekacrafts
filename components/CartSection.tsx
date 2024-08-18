import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LuShoppingBag } from "react-icons/lu";
import Image from "next/image";
export default function CartSection() {
  return (
    <Sheet>
      <SheetTrigger>
        <button className="border-2 p-2 rounded-full text-white relative ">
          <span className="absolute w-[20px] h-[20px] bg-white rounded-full font-bold flex items-center justify-center text-purple-600 top-[-5px] right-[-5px]">
            0
          </span>
          <LuShoppingBag size={24} />
        </button>
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center justify-center">
        <SheetHeader>
          <SheetTitle className="text-center text-3xl">Cart</SheetTitle>
          <SheetDescription className="border flex items-center justify-center">
            <Image
              src="/public/empty-cart.png"
              width={200}
              height={200}
              alt="Cart image"
              className="border"
            />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
