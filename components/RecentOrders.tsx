import RecentOrderCard from "./RecentOrderCard";
import { Card } from "./ui/card";

const RecentOrders = () => {
  return (
    <Card className="rounded-round border-primaryColor/20 w-full border px-4 shadow-none md:max-w-1/2">
      <h4 className="text-black">Recent Orders</h4>

      <RecentOrderCard
        productName="Kente Cloth Runner"
        amount="$89.99"
        customerName="John D"
        orderDate="Oct 28"
        orderStatus="shipped"
      />
      <RecentOrderCard
        productName="Kente Cloth Runner"
        amount="$89.99"
        customerName="John D"
        orderDate="Oct 28"
        orderStatus="shipped"
      />
      <RecentOrderCard
        productName="Kente Cloth Runner"
        amount="$89.99"
        customerName="John D"
        orderDate="Oct 28"
        orderStatus="shipped"
      />
    </Card>
  );
};

export default RecentOrders;
