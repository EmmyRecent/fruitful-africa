import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FeaturedProductCard from "@/components/FeaturedProductCard";

const FeaturedProducts = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="flex items-center justify-between gap-4 pb-4">
          <div className="mb-8 flex flex-col gap-4">
            <h3 className="text-secondaryColor text-lg font-semibold lg:text-xl">
              Featured Products
            </h3>

            <p className="text-tertiaryColor text-base font-normal lg:text-lg">
              Handpicked selections from our verified vendors
            </p>
          </div>

          <Link href="/marketplace">
            <Button
              className="border-primaryColor/20 cursor-pointer border bg-transparent text-black"
              size="lg"
            >
              <span>View All</span>
              <ArrowRight />
            </Button>
          </Link>
        </div>

        <FeaturedProductCard />
      </div>
    </section>
  );
};

export default FeaturedProducts;
