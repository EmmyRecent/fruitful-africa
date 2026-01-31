import RecentOrders from "@/components/RecentOrders";
import VendorTopProducts from "./VendorTopProducts";

const VendorOverview = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-4 py-8 md:flex-row md:justify-between">
      <RecentOrders />
      <VendorTopProducts />
    </div>
  );
};

export default VendorOverview;
