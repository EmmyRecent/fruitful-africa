import { Button } from "@/components/ui/button";
import Link from "next/link";
import AddProductButton from "./AddProductButton";

type AdminPageHeaderProps = {
  id: string;
};

const AdminPageHeader = ({ id }: AdminPageHeaderProps) => {
  return (
    <div className="bg-tertiaryColor flex min-h-1/3 items-center justify-center py-20">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-5 flex flex-col justify-center gap-1">
            <p className="text-2xl font-semibold text-white capitalize">
              Admin Dashboard
            </p>

            <p className="text-base text-white">Welcome back, James</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <AddProductButton id={id} />

            <Link href={`/admin/${id}/store-front`}>
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

export default AdminPageHeader;
