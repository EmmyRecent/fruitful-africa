"use client";

import { navLinks } from "@/app/constants";
import { useAuth } from "@/app/context/AuthContext";
import { useCart } from "@/app/context/CartContext";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";

const Nav = ({ query }: { query?: string }) => {
  const { user } = useAuth();
  const { cartItems } = useCart();
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
    <header className="bg-white shadow-2xl">
      {/* Logo */}
      <div className="wrapper">
        <div className="flex items-center justify-between py-6 md:py-5">
          <Link href="/">
            <div className="flex cursor-pointer items-center justify-center gap-3">
              <Image
                src="/logo.png"
                alt="Fruitful Africa logo"
                width={54}
                height={54}
                className="rounded-[5px]"
              />
              <p className="text-primaryColor inline-flex text-xl font-semibold">
                FruitfulAfrica
              </p>
            </div>
          </Link>

          <div className="hidden lg:block">
            <SearchForm query={query} />
          </div>

          {/* Desktop nav links */}
          <nav className="hidden lg:block">
            <ul className="[&>a]:hover:text-primaryColor [&>a]:text-secondaryColor flex gap-4 [&>a]:text-lg">
              {navLinks.map((link) => (
                <Link key={link.text} href={link.href}>
                  <li>{link.text}</li>
                </Link>
              ))}
            </ul>
          </nav>

          {/* Mobile nav links */}
          <nav
            className={`lg:hidden ${isNavOpen ? "translate-x-0" : "translate-x-[900px]"} from-primaryColor to-secondaryColor fixed top-0 right-0 bottom-0 z-50 flex w-full max-w-[75vw] flex-col justify-center bg-linear-to-br transition-all duration-500 ease-in-out`}
          >
            <X
              className="absolute top-0 right-0 mt-9 mr-5 cursor-pointer text-white"
              size={25}
              onClick={handleToggleNav}
            />

            <ul className="flex flex-col gap-8 px-4 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="mr-auto"
                  onClick={handleToggleNav}
                >
                  <li className="cursor-pointer text-base text-white hover:font-semibold">
                    {link.text}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>

          {/* Nav overlay */}
          {isNavOpen && (
            <div
              className="fixed inset-0 z-10 h-screen overflow-y-hidden bg-black/50 transition-all duration-500 ease-in-out"
              onClick={handleToggleNav}
            ></div>
          )}

          <div className="flex gap-6 md:gap-8">
            <Search
              className="text-secondaryColor size-5 cursor-pointer lg:hidden"
              onClick={handleSearchOpen}
            />

            <Link href={"/cart"}>
              <div className="relative cursor-pointer">
                <ShoppingCart className="text-secondaryColor size-5 cursor-pointer" />

                {cartItems && cartItems.length > 0 && (
                  <div className="bg-primaryColor absolute right-0 bottom-0 flex size-5 translate-x-[15px] translate-y-[15px] items-center justify-center rounded-full p-1">
                    <p className="text-xs text-white">{cartItems.length}</p>
                  </div>
                )}
              </div>
            </Link>

            <Link href={user && user?.uid ? `/user/${user.uid}` : "/login"}>
              <User className="text-secondaryColor size-5 cursor-pointer" />
            </Link>

            <Menu
              className="text-secondaryColor size-5 cursor-pointer lg:hidden"
              onClick={handleToggleNav}
            />
          </div>
        </div>

        {openSearch && (
          <div className="pb-1 lg:hidden">
            <SearchForm />
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
