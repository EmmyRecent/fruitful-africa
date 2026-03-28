import AddProductButton from "@/components/AddProductButton";
import ProductList from "@/components/ProductList";

const StoreFront = async ({
  params,
}: Readonly<{ params: Promise<{ id: string }> }>) => {
  const { id } = await params;

  console.log(id);
  return (
    <div className="wrapper flex flex-col items-center justify-center gap-12 py-20">
      <p className="text-primaryColor text-xl font-semibold capitalize md:text-2xl">
        Store Front
      </p>

      <div className="ml-auto">
        <AddProductButton id={id} className="bg-primaryColor" />
      </div>

      <div className="flex min-h-[400px] w-full flex-col items-center justify-center">
        <ProductList />
      </div>
    </div>
  );
};

export default StoreFront;
