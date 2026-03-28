import { useAuth } from "@/app/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { MoreHorizontal, PencilLine, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { deleteProduct } from "@/firebase/services/firestore";
import { useMemo } from "react";
import { useData } from "@/app/context/DataContext";

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
  const { user } = useAuth();
  const { products } = useData();
  const pathname = usePathname();
  const isAdmin = pathname.includes("admin");
  const productDetail = useMemo(
    () => products.find((product) => product.id === id),
    [products, id],
  );

  if (!user) return;
  if (!productDetail) return;

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(id, productDetail.productImage);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

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
        {isAdmin && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="mb-4 ml-auto">
              <Button
                variant="ghost"
                className="hover:bg-primaryColor/20 h-8 w-max rotate-90"
              >
                <MoreHorizontal className="text-primaryColor" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="-translate-x-5 md:-translate-x-8">
              <Link href={`/admin/${user.uid}/edit-product/${id}`}>
                <DropdownMenuItem className="cursor-pointer">
                  Edit{" "}
                  <span>
                    <PencilLine size={4} />
                  </span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleDeleteProduct}
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

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
