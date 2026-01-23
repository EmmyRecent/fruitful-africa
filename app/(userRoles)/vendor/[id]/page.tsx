"use client";

import { useData } from "@/app/context/DataContext";
import CardStat from "@/components/CardStat";
import { Button } from "@/components/ui/button";
import VendorAnalytics from "@/components/VendorAnalytics";
import VendorOrders from "@/components/VendorOrders";
import VendorOverview from "@/components/VendorOverview";
import VendorProduct from "@/components/VendorProduct";
import {
  Eye,
  LogOutIcon,
  Package,
  PoundSterlingIcon,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const Vendor = () => {
  const [nav, setNav] = useState("overview");
  const params = useParams();
  const id = params.id;
  const { products } = useData();

  const addProducts = () => {
    console.log("Product is has been added to the cart!");
  };

  return (
    <>
      <div className="bg-tertiaryColor flex min-h-1/3 items-center justify-center py-20">
        <div className="wrapper">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-5 flex flex-col justify-center gap-1">
              <p className="text-2xl font-semibold text-white capitalize">
                Vendor Dashboard
              </p>

              <p className="text-base text-white">
                Welcome back, Ama&apos;s Textiles
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link href={`/vendor/${id}/add-product`}>
                <Button
                  className="cursor-pointer bg-white/10"
                  onClick={addProducts}
                >
                  <LogOutIcon className="rotate-270 transform" />
                  <span>Add product</span>
                </Button>
              </Link>

              <Link href={`/vendor/${id}/store-front`}>
                <Button variant="default" className="cursor-pointer">
                  View StoreFront
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen py-10">
        {/* Add stat cards here: Products, Orders, Total revenue, Views which is not required atm */}
        <div className="wrapper">
          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <CardStat
              title="Total revenue"
              value={"£12,450"}
              icon={PoundSterlingIcon}
            />
            <CardStat title="Products" value={products.length} icon={Package} />
            <CardStat title="Orders" value={100} icon={ShoppingCart} />
            <CardStat title="Views" value={100} icon={Eye} />
          </div>

          {/* Nav bar for the vendor dashboard */}
          <div className="rounded-round border-primaryColor/20 flex w-full items-center justify-between gap-4 border bg-white p-4 px-6 md:w-max md:justify-start md:gap-20">
            <span
              className={`hover:text-primaryColor ${nav === "overview" ? "text-primaryColor" : "text-black"} cursor-pointer text-sm font-semibold`}
              onClick={() => setNav("overview")}
            >
              Overview
            </span>
            <span
              className={` ${nav === "products" ? "text-primaryColor" : "text-black"} hover:text-primaryColor cursor-pointer text-sm font-semibold`}
              onClick={() => setNav("products")}
            >
              Products
            </span>
            <span
              className={`${nav === "orders" ? "text-primaryColor" : "text-black"} hover:text-primaryColor cursor-pointer text-sm font-semibold`}
              onClick={() => setNav("orders")}
            >
              Orders
            </span>
            <span
              className={`${nav === "analytics" ? "text-primaryColor" : "text-black"} hover:text-primaryColor cursor-pointer text-sm font-semibold`}
              onClick={() => setNav("analytics")}
            >
              Analytics
            </span>
          </div>

          {nav === "overview" && <VendorOverview />}
          {nav === "products" && <VendorProduct />}
          {nav === "orders" && <VendorOrders />}
          {nav === "analytics" && <VendorAnalytics />}
        </div>
      </div>
    </>
  );
};

export default Vendor;
