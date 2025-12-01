import CategoryCard from "@/components/categoryCard";
import { category } from "../constants";

const Category = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="text-center flex flex-col gap-4 mb-8">
          <h3 className="text-secondaryColor text-lg lg:text-xl font-semibold">
            Shop By Category
          </h3>
          <p className="text-tertiaryColor text-base lg:text-lg font-normal">
            Explore our curated collection of authentic African products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {category.map((cat) => (
            <CategoryCard
              key={cat.category}
              img={cat.img}
              category={cat.category}
              amount={cat.amount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
