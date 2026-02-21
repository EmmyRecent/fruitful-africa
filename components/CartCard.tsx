"use client";

import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

type CartCardType = {
  productId: string;
  productName: string;
  productImage: string[];
  productPrice: string;
  productStock: string;
  qty: number;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
};

const CartCard = ({
  productId,
  productName,
  productImage,
  productPrice,
  productStock,
  qty,
  updateQuantity,
  removeFromCart,
}: CartCardType) => {
  const [quantity, setQuantity] = useState(qty);

  useEffect(() => {
    setQuantity(qty);
  }, [qty]);

  const add = () => {
    setQuantity((prevValue) => {
      const newQty = Math.min(Number(productStock), prevValue + 1);
      updateQuantity(productId, newQty);

      return newQty;
    });
  };

  const minus = () => {
    setQuantity((prevValue) => {
      const newQty = Math.max(1, prevValue - 1);
      updateQuantity(productId, newQty);

      return newQty;
    });
  };

  return (
    <div className="border-primaryColor/30 rounded-round flex w-full gap-4 border px-3 py-4">
      <Image
        src={productImage[0]}
        alt={productName}
        width={100}
        height={100}
        className="rounded-round object-cover"
      />

      <div className="flex w-full items-center justify-between [&>p]:text-sm [&>p]:md:text-base">
        <div className="flex flex-col gap-1">
          <p className="font-semibold">{productName}</p>

          <div className="flex items-center justify-center gap-4">
            <p className="text-sm">Qty</p>

            <div className="border-primaryColor/20 rounded-round flex w-max items-center gap-7 border bg-transparent px-4 py-1">
              <button
                type="button"
                className="hover:text-primaryColor cursor-pointer transition-colors"
                aria-label="Decrease quantity"
                onClick={minus}
              >
                <Minus size={18} />
              </button>
              <span className="text-secondaryColor min-w-8 text-center text-sm font-medium">
                {quantity}
              </span>
              <button
                type="button"
                className="hover:text-primaryColor cursor-pointer transition-colors"
                aria-label="Increase quantity"
                onClick={add}
              >
                <Plus size={19} />
              </button>
            </div>
          </div>

          <p>
            <span className="text-tertiaryColor">{productStock}</span> left in
            stock
          </p>
        </div>

        <div className="flex flex-col items-end justify-between gap-4">
          <Button
            className="cursor-pointer"
            size={"icon"}
            onClick={() => removeFromCart(productId)}
          >
            <Trash size={16} />
          </Button>
          <p>£{productPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
