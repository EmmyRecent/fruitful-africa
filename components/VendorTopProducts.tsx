import Link from "next/link";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import VendorTopProductsCard from "./VendorTopProductsCard";

const VendorTopProducts = () => {
  return (
    <Card className="rounded-round border-primaryColor/20 w-full border px-4 shadow-none md:max-w-1/2">
      <h4 className="text-black capitalize">Top products</h4>

      <VendorTopProductsCard
        productName="Kente Cloth Runner"
        amount="$89.99"
        numberOfSales="127"
        stock="42"
      />

      <VendorTopProductsCard
        productName="Kente Cloth Runner"
        amount="$89.99"
        numberOfSales="127"
        stock="42"
      />

      <VendorTopProductsCard
        productName="Kente Cloth Runner"
        amount="$89.99"
        numberOfSales="127"
        stock="42"
      />

      <Link href={`/vendor/1/store-front`}>
        <Button className="bg-primaryColor/15 border-primaryColor/20 w-full cursor-pointer border">
          <span className="text-secondaryColor capitalize">
            Manage Inventory
          </span>
        </Button>
      </Link>
    </Card>
  );
};

export default VendorTopProducts;
