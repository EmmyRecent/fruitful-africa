"use client";

import { useData } from "@/app/context/DataContext";
import ProductCard from "@/components/ProductCard";
import ProductSkeleton from "@/components/ProductSkeleton";

const StoreFront = () => {
  const { products, loading } = useData();

  console.log("product:", products);

  if (loading)
    return (
      <div className="flex min-h-1/3 flex-col items-center justify-center gap-8 py-20">
        <p className="text-primaryColor text-lg font-semibold capitalize sm:text-xl md:text-2xl">
          Store Front
        </p>

        <div className="wrapper grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, idx) => (
            <ProductSkeleton key={idx} />
          ))}
        </div>
      </div>
    );

  return (
    <div className="wrapper flex flex-col items-center justify-center gap-12 py-20">
      <p className="text-primaryColor text-xl font-semibold capitalize md:text-2xl">
        Store Front
      </p>

      <div className="flex min-h-[400px] w-full flex-col items-center justify-center">
        {products && products.length > 0 ? (
          <div className="grid w-full grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.productName}
                category={product.productCategory}
                country={product.productLocation}
                amount={product.productPrice}
                img={product.productImage?.[0]}
                description={product.productDescription}
                verified={true}
              />
            ))}
          </div>
        ) : (
          <p className="text-tertiaryColor text-sm">No product in storefront</p>
        )}
      </div>
    </div>
  );
};

export default StoreFront;
