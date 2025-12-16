import CategoryCard from "@/components/CategoryCard";
import { category } from "../constants";

const Category = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="mb-8 flex flex-col gap-4 text-center">
          <h3 className="text-secondaryColor text-lg font-semibold lg:text-xl">
            Shop By Category
          </h3>
          <p className="text-tertiaryColor text-base font-normal lg:text-lg">
            Explore our curated collection of authentic African products
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
