"use client";

import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import CartCard from "./CartCard";
import { Button } from "./ui/button";

const CartList = () => {
  const {
    cartItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (!cartItems.length) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-3">
        <p className="text-tertiaryColor w-full text-center text-base font-semibold capitalize">
          Your Cart is Empty!
        </p>

        <p>Add your favorite items to your cart.</p>

        <Link href="/marketplace" className="mx-auto w-full max-w-[600px]">
          <Button className="h-12 w-full cursor-pointer capitalize">
            Shop Now
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-start justify-center gap-4 md:justify-between">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        {cartItems.map((item) => (
          <CartCard
            key={item.id}
            productId={item.id}
            productImage={item.productImage}
            productName={item.productName}
            productPrice={item.productPrice}
            productStock={item.productStock}
            qty={item.quantity}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>

      <p
        className="hover:text-tertiaryColor ml-auto cursor-pointer text-xs"
        onClick={clearCart}
      >
        clear shopping cart
      </p>

      <div className="mt-8 flex w-full items-center justify-between">
        <p className="font-medium capitalize">
          Subtotal ({cartItems.length} Item)
        </p>
        <p className="font-medium capitalize">£{totalPrice}</p>
      </div>
    </div>
  );
};

export default CartList;
