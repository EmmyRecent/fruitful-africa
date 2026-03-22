"use client";

import { useAuth } from "@/app/context/AuthContext";
import {
  getCartItemsFromCartCollection,
  syncCartItemsSubcollection,
} from "@/firebase/services/firestore";
import { CartItem, ProductWithId } from "@/types";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type CartContextType = {
  totalPrice: number;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addToCart: (product: ProductWithId, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [cartRemoteReady, setCartRemoteReady] = useState(false);

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window === "undefined") return [];

    const storedCart = localStorage.getItem("cartItems");

    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Load Firestore cart when user signs in (before syncing local → server).
  useEffect(() => {
    if (!user?.uid) {
      setCartRemoteReady(false);
      return;
    }

    setCartRemoteReady(false);
    let cancelled = false;

    void (async () => {
      try {
        const remote = await getCartItemsFromCartCollection(user.uid);
        if (cancelled) return;
        if (remote.length > 0) {
          setCartItems(remote);
        }
      } catch (error) {
        console.error("Error loading cart from Firestore:", error);
      } finally {
        if (!cancelled) {
          setCartRemoteReady(true);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [user?.uid]);

  // Sync cart to customer/{uid}/cartItems/* on any change while signed in (marketplace, cart page, etc.).
  useEffect(() => {
    if (!user?.uid || !cartRemoteReady) return;

    const handle = window.setTimeout(() => {
      void syncCartItemsSubcollection(user.uid, cartItems).catch((error) => {
        console.error("Error syncing cart to Firestore:", error);
      });
    }, 500);

    return () => window.clearTimeout(handle);
  }, [user?.uid, cartRemoteReady, cartItems]);

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + Number(item.productPrice) * item.quantity,
      0,
    );
  }, [cartItems]);

  const addToCart = (product: ProductWithId, quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    console.log("Updated quantity:", productId, quantity);

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, quantity) }
          : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  console.log("Cart:", cartItems);

  return (
    <CartContext.Provider
      value={{
        totalPrice,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) throw new Error("UseCart must be used within CartProvider!");

  return context;
};
