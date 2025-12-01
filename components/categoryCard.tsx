import Link from "next/link";
import { Card, CardContent, CardTitle } from "./ui/card";

type CategoryCardProps = {
  img: string;
  category: string;
  amount: number;
};

const CategoryCard = ({ img, category, amount }: CategoryCardProps) => {
  return (
    <Link href="marketplace">
      <Card
        className="p-5 bg-cover bg-no-repeat bg-center h-48 cursor-pointer"
        style={{
          backgroundImage: `url('${img}.png')`,
        }}
      >
        <CardContent className="p-0 mt-auto">
          <CardTitle className="p-0 text-white text-lg font-medium capitalize">
            {category}
          </CardTitle>
          <p className="text-white text-base font-normal">
            <span>{amount}</span> products
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
