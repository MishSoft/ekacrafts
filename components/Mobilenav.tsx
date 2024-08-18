"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu4Fill } from "react-icons/ri";

const links = [
  {
    name: "Home",
    path: "/",
  },

  {
    name: "Products",
    path: "/products",
  },

  {
    name: "Contact",
    path: "/contact",
  },

  {
    name: "About",
    path: "/about",
  },
];

export function Mobilenav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="border-2 p-2 rounded-full text-white">
          <RiMenu4Fill size={24} />
        </button>
      </SheetTrigger>
      <SheetContent className="flex items-center justify-center">
        <SheetHeader>
          <SheetTitle className="text-center mb-10">
            <h1 className="text-3xl text-purple-600">Eka's Crafts</h1>
          </SheetTitle>
          <SheetDescription className="flex flex-col items-center gap-8">
            {links.map((link, index) => {
              return (
                <Link
                  className={`${
                    pathname === link.path && "border-b-2 border-purple-600"
                  } hover:border-b-2 text-xl hover:border-purple-600 text-purple-600 font-bold`}
                  key={index}
                  href={link.path}
                >
                  {link.name}
                </Link>
              );
            })}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
