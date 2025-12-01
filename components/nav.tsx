"use client";

import { navLinks } from "@/app/constants";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Nav = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleSearchOpen = () => {
    setOpenSearch((prevValue) => !prevValue);
  };

  const handleToggleNav = () => {
    setIsNavOpen((prevValue) => !prevValue);
  };

  // Add and remove scroll on the body when nav is open and closed.
  useEffect(() => {
    if (isNavOpen) {
      document.querySelector("body")?.classList.add("no-scroll");
    } else {
      document.querySelector("body")?.classList.remove("no-scroll");
    }
  }, [isNavOpen]);

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
                  <li>{link.text}</li>
                </Link>
              ))}
            </ul>
          </nav>

          {/* Mobile nav links */}
          <nav
            className={`lg:hidden ${isNavOpen ? "translate-x-0" : "translate-x-[900px]"} transition-all duration-500 ease-in-out z-50 bg-linear-to-br from-primaryColor to-secondaryColor fixed top-0  w-full max-w-[75vw] right-0 bottom-0 flex flex-col justify-center`}
          >
            <X
              className="text-white absolute top-0 right-0 mr-5 mt-9 cursor-pointer"
              size={25}
              onClick={handleToggleNav}
            />

            <ul className="pt-8 px-4 flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="mr-auto"
                  onClick={handleToggleNav}
                >
                  <li className="text-white text-base cursor-pointer hover:font-semibold">
                    {link.text}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>

          {/* Nav overlay */}
          {isNavOpen && (
            <div
              className="inset-0 overflow-y-hidden fixed bg-black/50 h-screen z-10 transition-all duration-500 ease-in-out "
              onClick={handleToggleNav}
            ></div>
          )}

          <div className="flex gap-6 md:gap-8">
            <Search
              className="size-5 text-secondaryColor cursor-pointer lg:hidden"
              onClick={handleSearchOpen}
            />
            <ShoppingCart className="text-secondaryColor size-5 cursor-pointer" />
            <User className="text-secondaryColor size-5 cursor-pointer" />
            <Menu
              className="text-secondaryColor size-5 cursor-pointer lg:hidden"
              onClick={handleToggleNav}
            />
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
                <Search className="size-5 text-tertiaryColor" />
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
