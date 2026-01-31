type VendorTopProductsCardProps = {
  productName: string;
  numberOfSales: string;
  amount: string;
  stock: string;
};

const VendorTopProductsCard = ({
  productName,
  numberOfSales,
  amount,
  stock,
}: VendorTopProductsCardProps) => {
  return (
    <div className="rounded-round flex w-full flex-col items-start justify-between gap-2 p-4">
      <div className="flex w-full items-center justify-between">
        <p className="text-secondaryColor text-base">{productName}</p>
        <p className="text-secondaryColor text-xl">{amount}</p>
      </div>

      <div className="flex w-full items-center justify-between">
        <p className="text-tertiaryColor text-sm">{numberOfSales} Sales</p>
        <p className="text-tertiaryColor px-2 py-1 text-xs">Stock: {stock}</p>
      </div>
    </div>
  );
};

export default VendorTopProductsCard;
