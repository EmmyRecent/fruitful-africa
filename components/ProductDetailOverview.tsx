type productDetailOverviewProps = {
  productDescription: string;
};

const ProductDetailOverview = ({
  productDescription,
}: productDetailOverviewProps) => {
  return (
    <>
      <div className="border-primaryColor/20 rounded-round border bg-white px-4 py-3">
        <p className="mb-4 font-medium capitalize">Product Detail</p>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-1 items-center justify-between">
            <p className="text-tertiaryColor text-sm">Weight:</p>
            <p className="text-sm">200g</p>
          </div>

          <div className="flex flex-1 items-center justify-between">
            <p className="text-tertiaryColor text-sm">Dimension:</p>
            <p className="text-sm">{"72 x 14"}</p>
          </div>
        </div>

        <div className="border-primaryColor/20 my-4 border-[0.5px]"></div>

        <p className="text-sm">{productDescription}</p>
      </div>
    </>
  );
};

export default ProductDetailOverview;
