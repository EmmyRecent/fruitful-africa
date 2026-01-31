"use client";

import { useData } from "@/app/context/DataContext";
import CardStat from "@/components/CardStat";
import { Eye, Package, PoundSterlingIcon, ShoppingCart } from "lucide-react";

const VendorDashboardStats = () => {
  const { products } = useData();

  return (
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
  );
};

export default VendorDashboardStats;
