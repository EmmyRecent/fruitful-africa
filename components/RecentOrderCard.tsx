type RecentOrderCardProps = {
  productName: string;
  customerName: string;
  orderDate: string;
  amount: string;
  orderStatus: "shipped" | "processing" | "delivered";
};

const RecentOrderCard = ({
  productName,
  customerName,
  orderDate,
  amount,
  orderStatus,
}: RecentOrderCardProps) => {
  return (
    <div className="rounded-round flex w-full flex-col items-start justify-between gap-2 bg-[#FEF3E2] p-4">
      <div className="flex w-full items-center justify-between">
        <p className="text-secondaryColor text-base">{productName}</p>
        <p className="text-secondaryColor text-xl">{amount}</p>
      </div>

      <div className="flex w-full items-center justify-between">
        <p className="text-tertiaryColor text-sm">
          {customerName} • {orderDate}
        </p>

        {/* Status tag  */}
        <div className="rounded-round bg-blue-300 [&>p]:text-blue-700">
          <p className="px-2 py-1 text-xs">{orderStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default RecentOrderCard;
