import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Category, FeaturedProducts, Features, Hero } from "./sections";

const Page = async () => {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Features />
        <Category />
        <FeaturedProducts />

        <div className="bg-linear-to-b from-secondaryColor to-primaryColor h-[350px] flex items-center justify-center my-24 text-white text-center">
          <div className="wrapper flex flex-col gap-4">
            <h3 className="text-lg">Become a vendor</h3>

            <p className="text-base">
              Join our community of verified artisans and reach global markets.
              We handle logistics, payments, and marketing while you focus on
              your craft.
            </p>

            <Button className="mx-auto text-tertiaryColor bg-white">
              <span>Start Selling Today</span>
              <ArrowRight />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Page;
