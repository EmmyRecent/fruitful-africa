import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-linear-to-br from-[#D97706]/10 via-[#FBBF24]/20 to-[#FFFBF7] max-md:py-28">
      <div className="wrapper flex flex-col items-center justify-between gap-5 md:flex-row lg:gap-3">
        <div className="flex flex-col gap-4">
          <div className="border-primaryColor rounded-round bg-primaryColor/20 mr-auto inline-flex border p-3">
            <p className="text-primaryColor text-xs">
              Authentic African Marketplace
            </p>
          </div>

          <h1 className="text-secondaryColor font-inter w-full max-w-[800px] text-5xl font-medium tracking-wider lg:text-6xl">
            Discover Authentic African Craftsmanship
          </h1>

          <p className="text-primaryColor inline w-full max-w-[500px] text-base">
            Connect with verified artisans across Africa. Every purchase tells a
            story, supports a community, and celebrates rich cultural heritage.
          </p>

          <div className="flex items-center justify-start gap-4 max-sm:flex-wrap">
            <Link href="/marketplace">
              <Button className="bg-primaryColor cursor-pointer" size="lg">
                <span className="text-base">Explore Marketplace</span>
                <ArrowRight />
              </Button>
            </Link>

            <Button
              className="text-secondaryColor border-primaryColor/20 cursor-pointer border bg-white"
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
            className="h-auto w-auto"
          />

          <div className="rounded-round absolute bottom-0 left-0 bg-white p-4 shadow-2xl">
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
