"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

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

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex items-center flex-1 justify-end pr-10 gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              pathname === link.path && "border-b-2"
            } hover:border-b-2 text-white font-bold`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
