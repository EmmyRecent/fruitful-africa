import CartList from "@/components/CartList";

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
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
