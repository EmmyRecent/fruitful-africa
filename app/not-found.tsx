import { Button } from "@/components/ui/button";
import { ArrowLeft, HomeIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <section>
      <div className="wrapper flex flex-col items-center justify-center text-center">
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <Image
            src="/404.png"
            alt="404 not found"
            width={400}
            height={400}
            className="mx-auto w-full max-w-[200px] object-contain lg:max-w-[300px]"
          />

          <p className="text-primaryColor text-base font-medium">
            Page not found
          </p>

          <p className="text-tertiaryColor text-base">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved or doesn&apos;t exist.
          </p>

          <div className="w-full items-center justify-center gap-2 sm:flex">
            <Link href="/">
              <Button className="w-full cursor-pointer max-sm:mb-2" size="lg">
                <HomeIcon />
                <span>Go back home</span>
              </Button>
            </Link>

            <Link href="/">
              <Button
                className="border-primaryColor/20 w-full cursor-pointer border bg-[#FFFBF7] text-black"
                size="lg"
              >
                <ArrowLeft />
                <span>Go back</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-7 flex flex-col items-center justify-center">
          <p className="text-tertiaryColor">Popular pages</p>

          <div className="text-primaryColor mt-2 flex flex-wrap items-center justify-center gap-4 text-center text-sm [&>p]:cursor-pointer [&>p]:capitalize">
            <Link href="marketplace">
              <p className="flex items-center gap-2">
                <SearchIcon className="text-primaryColor" size={15} />
                <span>marketplace</span>
              </p>
            </Link>

            <span className="text-base font-semibold">·</span>

            <Link href="makers">
              <p>Meet the makers</p>
            </Link>

            <span className="text-base font-semibold">·</span>

            <Link href="become-a-vendor">
              <p>Become a vendor</p>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 py-10">
          <Image
            src="/logo.png"
            alt="Fruitful Africa logo"
            width={44}
            height={44}
            className="rounded-[5px]"
          />
          <p className="text-primaryColor inline-flex text-base font-medium">
            FruitfulAfrica
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
