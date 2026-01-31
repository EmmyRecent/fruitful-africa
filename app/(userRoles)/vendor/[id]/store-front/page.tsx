import ProductList from "@/components/ProductList";

const StoreFront = () => {
  return (
    <div className="wrapper flex flex-col items-center justify-center gap-12 py-20">
      <p className="text-primaryColor text-xl font-semibold capitalize md:text-2xl">
        Store Front
      </p>

      <div className="flex min-h-[400px] w-full flex-col items-center justify-center">
        <ProductList />
      </div>
    </div>
  );
};

export default StoreFront;
