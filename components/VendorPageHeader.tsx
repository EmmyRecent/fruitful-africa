import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import Link from "next/link";

type VendorPageHeaderProps = {
  id: string;
};

const VendorPageHeader = ({ id }: VendorPageHeaderProps) => {
  return (
    <div className="bg-tertiaryColor flex min-h-1/3 items-center justify-center py-20">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-5 flex flex-col justify-center gap-1">
            <p className="text-2xl font-semibold text-white capitalize">
              Vendor Dashboard
            </p>
            <p className="text-base text-white">
              Welcome back, Ama&apos;s Textiles
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link href={`/vendor/${id}/add-product`}>
              <Button className="cursor-pointer bg-white/10">
                <LogOutIcon className="rotate-270 transform" />
                <span>Add product</span>
              </Button>
            </Link>

            <Link href={`/vendor/${id}/store-front`}>
              <Button variant="default" className="cursor-pointer">
                View StoreFront
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorPageHeader;
