"use client";

import { navLinks } from "@/app/constants";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const handleSearchOpen = () => {
    setOpenSearch((prevValue) => !prevValue);
  };

  return (
    <header className="shadow-2xl">
      {/* Logo */}
      <div className="wrapper">
        <div className="py-6 md:py-5 flex items-center justify-between">
          <div className="flex items-center justify-center gap-3">
            <Image
              src="/logo.png"
              alt="Fruitful Africa logo"
              width={54}
              height={54}
              className="rounded-[5px]"
            />
            <p className="text-xl text-primaryColor font-semibold inline-flex">
              FruitfulAfrica
            </p>
          </div>

          <div className="hidden lg:block">
            <form className="w-full">
              <div className="bg-white flex gap-4 justify-center items-center">
                <input
                  type="text"
                  className="w-full placeholder:text-tertiaryColor outline-none text-base"
                  placeholder="Search products, artisans..."
                />
                <Search className="size-6 text-tertiaryColor" />
              </div>
            </form>
          </div>

          {/* Desktop nav links */}
          <nav className="hidden lg:block">
            <ul className="flex gap-4 [&>a]:hover:text-primaryColor [&>a]:text-secondaryColor [&>a]:text-lg">
              {navLinks.map((link) => (
                <Link key={link.text} href={link.href}>
                  {link.text}
                </Link>
              ))}
            </ul>
          </nav>

          {/* Mobile nav links */}
          <nav className="lg:hidden"></nav>

          <div className="flex gap-6 md:gap-8">
            <Search
              className="size-6 text-secondaryColor cursor-pointer lg:hidden"
              onClick={handleSearchOpen}
            />
            <ShoppingCart className="text-secondaryColor size-6 cursor-pointer" />
            <User className="text-secondaryColor size-6 cursor-pointer" />
            <Menu className="text-secondaryColor size-6 cursor-pointer lg:hidden" />
          </div>
        </div>

        {openSearch && (
          <div className="lg:hidden">
            <form className="w-full">
              <div className="bg-white flex gap-4 justify-center items-center pb-5">
                <input
                  type="text"
                  className="w-full placeholder:text-tertiaryColor h-10 px-4 outline-none text-base"
                  placeholder="Search products..."
                />
                <Search className="size-6 text-tertiaryColor" />
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
