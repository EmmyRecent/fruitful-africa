"use client";

import AdminAnalytics from "@/components/VendorAnalytics";
import AdminOrders from "@/components/VendorOrders";
import AdminOverview from "@/components/VendorOverview";
import AdminProduct from "@/components/VendorProduct";
import { useState } from "react";

const AdminPageTabs = () => {
  const [nav, setNav] = useState("overview");

  return (
    <>
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

      {nav === "overview" && <AdminOverview />}
      {nav === "products" && <AdminProduct />}
      {nav === "orders" && <AdminOrders />}
      {nav === "analytics" && <AdminAnalytics />}
    </>
  );
};

export default AdminPageTabs;
