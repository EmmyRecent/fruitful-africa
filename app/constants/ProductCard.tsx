import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { CategoryType } from "@/types";
import { Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductCardType = {
  id: number;
  country: string;
  img: string;
  name: string;
  sellerName: string;
  verified: boolean;
  rating: number;
  category: CategoryType["category"];
  amount: number;
};

const ProductCard = ({
  id,
  country,
  img,
  name,
  sellerName,
  verified,
  rating,
  category,
  amount,
}: ProductCardType) => {
  return (
    <Card className="bg-none rounded-round relative p-0">
      <Image
        src={`/${img}.png`}
        alt={name}
        width={326}
        height={256}
        className="w-full rounded-t-round"
      />

      <div className="absolute bg-white text-black p-2 rounded-round right-0 text-sm translate-y-3 -translate-x-2">
        <p>{country}</p>
      </div>

      <CardContent className="px-4 flex flex-col gap-1">
        <div className="flex items-center justify-between rounded-round">
          <CardTitle className="p-0 m-0 text-secondaryColor text-xl">
            {name}
          </CardTitle>

          {verified && (
            <div className="bg-primaryColor/10 p-2 flex gap-3 rounded-round">
              <Shield className="text-primaryColor size-5 justify-center items-center" />
              <p className="text-primaryColor text-sm font-medium">Verified</p>
            </div>
          )}
        </div>

        <p className="text-tertiaryColor text-base">{sellerName}</p>

        <div className="bg-transparent mr-auto py-1 px-3 rounded-round border border-primaryColor/30">
          <p className="capitalize text-sm">{category}</p>
        </div>
      </CardContent>

      <div className="px-4">
        <CardFooter className="flex justify-between items-center py-5 px-0 border-t border-primaryColor ">
          <p className="text-3xl text-primaryColor">£{amount}</p>

          <Link href={`/${id}`}>
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
