"use client";

import { useData } from "@/app/context/DataContext";
import ProductCard from "./ProductCard";

const ProductList = ({ query }: { query?: string }) => {
  const { products } = useData();
  const searchedProducts = query
    ? products.filter((product) =>
        product.productName.toLowerCase().includes(query.toLowerCase().trim()),
      )
    : products;

  return (
    <>
      {searchedProducts && searchedProducts.length > 0 ? (
        <div className="grid w-full grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {searchedProducts.map((product) => (
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
    </>
  );
};

export default ProductList;
