"use client";

import { getProduct } from "@/firebase/services/firestore";
import { ProductWithId } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";

type DataContextType = {
  products: ProductWithId[];
  loading: boolean;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<ProductWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct();

        setProducts(data);
      } catch (error) {
        console.log("Error fetching product data from firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return (
    <DataContext.Provider value={{ products, loading }}>
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
