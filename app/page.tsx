import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Category, FeaturedProducts, Features, Hero } from "./sections";

const HomePage = () => {
  return (
    <>
      <Nav />

      <main>
        <Hero />
        <Features />
        <Category />
        <FeaturedProducts />

        <div className="from-secondaryColor to-primaryColor my-24 flex h-[350px] items-center justify-center bg-linear-to-b text-center text-white">
          <div className="wrapper flex flex-col gap-4">
            <h3 className="text-lg">Become a vendor</h3>

            <p className="text-base">
              Join our community of verified artisans and reach global markets.
              We handle logistics, payments, and marketing while you focus on
              your craft.
            </p>

            <Button className="text-tertiaryColor mx-auto bg-white">
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

export default HomePage;
