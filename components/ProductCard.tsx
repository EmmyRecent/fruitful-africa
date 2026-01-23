import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  id: string;
  country: string;
  img: string;
  name: string;
  verified?: boolean;
  rating?: number;
  category: string;
  amount: string;
  description: string;
};

const ProductCard = ({
  id,
  country,
  img,
  name,
  verified,
  // rating,
  category,
  amount,
  description,
}: ProductCardProps) => {
  return (
    <Card className="rounded-round relative h-full w-full border-none bg-none p-0 shadow-lg">
      <Image
        src={img}
        alt={name}
        width={326}
        height={256}
        className="rounded-t-round h-[380px] w-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      <div className="rounded-round absolute right-0 -translate-x-2 translate-y-3 bg-white p-2 text-sm text-black shadow-lg">
        <p>{country}</p>
      </div>

      <CardContent className="flex flex-col gap-1 px-4">
        <div className="rounded-round flex items-center justify-between">
          <CardTitle className="text-secondaryColor m-0 p-0 text-xl">
            {name}
          </CardTitle>

          {verified && (
            <div className="bg-primaryColor/10 rounded-round flex items-center justify-center gap-2 p-2">
              <Shield className="text-primaryColor size-4" />
              <p className="text-primaryColor text-xs font-medium">Verified</p>
            </div>
          )}
        </div>

        <div className="rounded-round border-primaryColor/30 mr-auto border bg-transparent px-3 py-1">
          <p className="text-sm capitalize">{category}</p>
        </div>

        <div>
          <p className="text-sm">{description.trim()}</p>
        </div>
      </CardContent>

      <div className="px-4">
        <CardFooter className="border-primaryColor flex items-center justify-between border-t px-0 py-5">
          <p className="text-primaryColor text-3xl">£{amount}</p>

          <Link href={`/product/${id}`}>
            <Button className="cursor-pointer text-base" variant={"default"}>
              View Details
            </Button>
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductCard;
