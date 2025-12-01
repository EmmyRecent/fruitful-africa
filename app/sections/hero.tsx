import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-linear-to-br max-md:py-28 from-[#D97706]/10 via-[#FBBF24]/20 to-[#FFFBF7]">
      <div className="wrapper flex flex-col md:flex-row justify-between items-center gap-5 lg:gap-3">
        <div className="flex flex-col gap-4">
          <div className="p-3 border border-primaryColor inline-flex mr-auto rounded-round bg-primaryColor/20">
            <p className="text-primaryColor text-xs">
              Authentic African Marketplace
            </p>
          </div>

          <h1 className="text-5xl text-secondaryColor font-medium font-inter lg:text-6xl tracking-wider w-full max-w-[800px]">
            Discover Authentic African Craftsmanship
          </h1>

          <p className="text-primaryColor inline text-base w-full max-w-[500px]">
            Connect with verified artisans across Africa. Every purchase tells a
            story, supports a community, and celebrates rich cultural heritage.
          </p>

          <div className="flex gap-4 justify-start max-sm:flex-wrap items-center">
            <Button className="bg-primaryColor cursor-pointer" size="lg">
              <span className="text-base">Explore Marketplace</span>
              <ArrowRight />
            </Button>
            <Button
              className="bg-white text-secondaryColor border border-primaryColor/20 cursor-pointer"
              size="lg"
            >
              <span className="text-base">Meet the Makers</span>
            </Button>
          </div>
        </div>

        {/*  */}
        <div className="relative">
          <Image
            src="/hero-img.png"
            alt="Hero Image"
            width={500}
            height={500}
          />

          <div className="absolute bg-white p-4 rounded-round bottom-0 left-0 shadow-2xl">
            <p className="text-secondaryColor text-base lg:text-lg">
              Active vendors
            </p>
            <span className="text-primaryColor text-xl lg:text-2xl">850+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
