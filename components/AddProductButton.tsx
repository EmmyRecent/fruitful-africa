import { LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

type AddProductProps = {
  id: string;
  className?: string;
};

const AddProductButton = ({ id, className }: AddProductProps) => {
  return (
    <Link href={`/admin/${id}/add-product`}>
      <Button className={`cursor-pointer bg-white/10 ${className}`}>
        <LogOutIcon className="rotate-270 transform" />
        <span>Add product</span>
      </Button>
    </Link>
  );
};

export default AddProductButton;
