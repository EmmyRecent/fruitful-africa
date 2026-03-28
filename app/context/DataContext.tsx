"use client";

import { ProductWithId } from "@/types";
import { subscribeToProducts } from "@/firebase/services/firestore";
import { createContext, useContext, useEffect, useState } from "react";

type DataContextType = {
  products: ProductWithId[];
  setProducts: React.Dispatch<React.SetStateAction<ProductWithId[]>>;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({
  initialProducts,
  children,
}: {
  initialProducts: ProductWithId[];
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<ProductWithId[]>(initialProducts);

  useEffect(() => {
    const unsubscribe = subscribeToProducts(setProducts, (error) => {
      console.error("Failed to subscribe to products:", error);
    });

    return () => unsubscribe();
  }, []);

  return (
    <DataContext.Provider value={{ products, setProducts }}>
      {children}
    </DataContext.Provider>
  );
};

// Use data hook
export const useData = () => {
  const context = useContext(DataContext);

  if (!context) throw new Error("useData must be used within DataProvider!");

  return context;
};
