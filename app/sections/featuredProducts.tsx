import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { products } from "../constants";
import ProductCard from "../constants/ProductCard";

const FeaturedProducts = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="flex justify-between items-center pb-4 gap-4">
          <div className=" flex flex-col gap-4 mb-8">
            <h3 className="text-secondaryColor text-lg lg:text-xl font-semibold">
              Featured Products
            </h3>

            <p className="text-tertiaryColor text-base lg:text-lg font-normal">
              Handpicked selections from our verified vendors
            </p>
          </div>

          <Link href="marketplace">
            <Button
              className="bg-transparent text-black border-primaryColor/20 border cursor-pointer"
              size="lg"
            >
              <span>View All</span>
              <ArrowRight />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              country={product.country}
              amount={product.amount}
              category={product.category}
              img={product.img}
              name={product.name}
              rating={product.rating}
              sellerName={product.sellerName}
              verified={product.verified}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
