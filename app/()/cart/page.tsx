import CartList from "@/components/CartList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Cart = () => {
  return (
    <>
      <section className="items-start">
        <div className="wrapper flex flex-col items-center justify-center">
          <h1 className="text-tertiaryColor py-6 text-center text-xl font-medium capitalize md:text-2xl">
            Your Cart
          </h1>

          <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-4">
            <CartList />

            <Link href={"/checkout"} className="w-full">
              <Button className="h-12 w-full cursor-pointer">
                Proceed to checkout
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
