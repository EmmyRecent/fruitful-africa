import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import ProductList from "@/components/ProductList";
import ProductSkeleton from "@/components/ProductSkeleton";
import { Suspense } from "react";

type MarketplaceType = {
  searchParams: Promise<{ query: string }>;
};

const Marketplace = async ({ searchParams }: MarketplaceType) => {
  const query = (await searchParams).query;

  return (
    <>
      <Nav query={query} />

      <main>
        <div className="bg-white">
          <div className="wrapper py-4 lg:py-8">
            <h1 className="text-xl font-medium">Marketplace</h1>
            <h2 className="text-tertiaryColor">
              Discover authentic African crafts from verified artisans
            </h2>
          </div>
        </div>

        <div className="min-h-screen py-10 lg:py-16">
          <div className="wrapper">
            {query && (
              <p className="mb-4 text-sm">
                Showing results for{" "}
                <span className="text-tertiaryColor">{query}</span>
              </p>
            )}

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
                <ProductList query={query} />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Marketplace;
