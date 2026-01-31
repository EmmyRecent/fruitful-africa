"use client";

import { useData } from "@/app/context/DataContext";
import ProductDetailOverview from "@/components/ProductDetailOverview";
import { Button } from "@/components/ui/button";
import {
  HeartIcon,
  Minus,
  Plus,
  Share2,
  Shield,
  ShieldIcon,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

const ProductDetail = () => {
  const { products } = useData();
  const { id } = useParams();
  const productDetail = products.find((product) => product.id === id);
  const [nav, setNav] = useState("overview");

  if (!productDetail) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading product...</p>
      </div>
    );
  }

  console.log(productDetail);

  return (
    <>
      <div className="wrapper flex flex-col gap-5 py-8 md:gap-8 md:py-20 lg:gap-10">
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:gap-10">
          {/* Product Image */}
          <div className="flex w-full flex-1 flex-col gap-4">
            <div className="rounded-round relative aspect-square w-full overflow-hidden md:aspect-auto md:h-[500px]">
              <Image
                src={`${productDetail?.productImage?.[0]}`}
                alt={`${productDetail?.productName}`}
                fill
                className="rounded-round object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {productDetail?.productImage &&
              productDetail.productImage.length > 1 && (
                <div className="grid grid-cols-4 items-center justify-center gap-4">
                  {productDetail?.productImage.map((image, idx) => (
                    <div
                      key={idx}
                      className="rounded-round relative aspect-square w-full overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${productDetail?.productName} thumbnail ${idx + 1}`}
                        fill
                        className="rounded-round object-cover"
                        sizes="(max-width: 768px) 25vw, 12.5vw"
                      />
                    </div>
                  ))}
                </div>
              )}
          </div>

          {/* Product Details  */}
          <div className="flex w-full flex-col items-start gap-4 lg:w-1/2">
            <div className="flex flex-wrap gap-2">
              <div className="rounded-round bg-white p-2 text-sm text-black shadow">
                <p className="text-black">{productDetail?.productLocation}</p>
              </div>

              <div className="bg-primaryColor/10 rounded-round flex items-center justify-center gap-2 p-2">
                <Shield className="text-primaryColor size-4" />
                <p className="text-primaryColor text-xs font-medium">
                  Verified Vendor
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-4">
              <h2 className="text-secondaryColor text-xl font-medium capitalize md:text-2xl">
                {productDetail?.productName}
              </h2>

              <p className="text-primaryColor text-3xl md:text-4xl">
                £{productDetail?.productPrice}
              </p>

              <p className="text-tertiaryColor">
                {productDetail?.productDescription}
              </p>

              <div className="flex flex-col gap-3">
                <p className="text-secondaryColor font-medium">Quantity</p>

                <div className="flex items-center gap-3">
                  <div className="border-primaryColor/20 rounded-round flex w-max items-center gap-7 border bg-transparent px-4 py-1">
                    <button
                      type="button"
                      className="hover:text-primaryColor cursor-pointer transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={20} />
                    </button>
                    <span className="text-secondaryColor min-w-8 text-center font-medium">
                      1
                    </span>
                    <button
                      type="button"
                      className="hover:text-primaryColor cursor-pointer transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={20} />
                    </button>
                  </div>

                  <p className="text-tertiaryColor text-sm">
                    {productDetail?.productStock} in stock
                  </p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:flex-row">
                  <Button className="h-10 flex-1 cursor-pointer sm:flex-2">
                    Buy now
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="border-primaryColor/20 hover:bg-primaryColor/5 h-10 flex-1 cursor-pointer border bg-white hover:bg-none"
                  >
                    Add to Cart
                  </Button>
                </div>

                <div className="flex w-full gap-3">
                  <Button
                    variant={"ghost"}
                    className="border-primaryColor/20 hover:bg-primaryColor/5 h-10 flex-1 cursor-pointer border bg-white hover:bg-none"
                  >
                    <HeartIcon />
                    save
                  </Button>
                  <Button
                    variant={"ghost"}
                    className="border-primaryColor/20 hover:bg-primaryColor/5 h-10 flex-1 cursor-pointer border bg-white hover:bg-none"
                  >
                    <Share2 />
                    Share
                  </Button>
                </div>

                <div className="mt-5 flex w-full gap-3">
                  <Button
                    variant={"ghost"}
                    className="border-primaryColor/20 h-[150px] flex-1 flex-col border bg-white hover:bg-white"
                  >
                    <Truck className="text-primaryColor size-5" />
                    <span className="text-xs capitalize">Fast Shipping</span>
                  </Button>

                  <Button
                    variant={"ghost"}
                    className="border-primaryColor/20 h-[150px] flex-1 flex-col border bg-white hover:bg-white"
                  >
                    <ShieldIcon className="text-primaryColor size-4" />
                    <span className="text-xs capitalize">Authenticity</span>
                    <span className="text-tertiaryColor text-[10px] capitalize">
                      100% Verified
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-round border-primaryColor/20 flex w-full items-center justify-between gap-4 border bg-white p-4 px-6 md:w-max md:justify-start md:gap-20">
          <span
            className={`hover:text-primaryColor ${nav === "overview" ? "text-primaryColor" : "text-black"} cursor-pointer text-sm font-medium capitalize`}
            onClick={() => setNav("overview")}
          >
            Overview
          </span>
          <span
            className={` ${nav === "products" ? "text-primaryColor" : "text-black"} hover:text-primaryColor cursor-pointer text-sm font-medium capitalize`}
            onClick={() => setNav("shipping")}
          >
            shipping & return
          </span>
          <span
            className={`${nav === "orders" ? "text-primaryColor" : "text-black"} hover:text-primaryColor cursor-pointer text-sm font-medium capitalize`}
            onClick={() => setNav("reviews")}
          >
            reviews
          </span>
        </div>

        {nav === "overview" && (
          <ProductDetailOverview
            productDescription={productDetail.productDescription}
          />
        )}
      </div>
    </>
  );
};

export default ProductDetail;
