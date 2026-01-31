import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProductList from "@/components/ProductList";
import ProductSkeleton from "@/components/ProductSkeleton";
import { Suspense } from "react";

const Marketplace = () => {
  return (
    <>
      <Nav />

      <main>
        <div className="bg-white">
          <div className="wrapper py-8 lg:py-10">
            <h1 className="mb-2 text-xl font-medium">Marketplace</h1>
            <h2 className="text-tertiaryColor">
              Discover authentic African crafts from verified artisans
            </h2>
          </div>
        </div>

        <section>
          <div className="wrapper">
            <div className="flex min-h-[400px] w-full flex-col items-center justify-center">
              <Suspense
                fallback={
                  <div className="grid w-full grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {[...Array(10)].map((_, idx) => (
                      <ProductSkeleton key={idx} />
                    ))}
                  </div>
                }
              >
                <ProductList />
              </Suspense>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Marketplace;
