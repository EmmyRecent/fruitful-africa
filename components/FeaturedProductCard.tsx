"use client";

import { useData } from "@/app/context/DataContext";
import ProductCard from "./ProductCard";

const FeaturedProductCard = () => {
  const { products } = useData();

  return (
    <div className="grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.slice(0, 3).map((product) => (
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
  );
};

export default FeaturedProductCard;
