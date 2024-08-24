import CartSection from "@/components/CartSection";
import Link from "next/link";
import React from "react";
import { UserButton } from "./UserButton";
import Nav from "./Nav";
import { Mobilenav } from "./Mobilenav";

export default function Header() {
  return (
    <header className="p-5 bg-[#963484] flex items-center justify-between">
      <Link href="/">
        <h1 className="text-3xl font-semibold text-white">Eka's Crafts</h1>
      </Link>

      {/* Nav link */}
      <Nav />

      {/* Cart & User buttons & mobile Nav */}
      <div className="flex items-center gap-8">
        <CartSection />
        <UserButton />
        <div className="md:hidden">
          <Mobilenav />
        </div>
      </div>
    </header>
  );
}
