import { Skeleton } from "./ui/skeleton";

type ProductSkeletonProps = {
  /**
   * Keep in sync with `ProductCard` sizing.
   * If you use a different Card radius, adjust here too.
   */
  className?: string;
};

const ProductSkeleton = ({ className }: ProductSkeletonProps) => {
  return (
    <div className={className}>
      {/* Card container */}
      <div className="rounded-round relative overflow-hidden bg-none p-0">
        {/* Image */}
        <Skeleton className="rounded-t-round h-64 w-full" />

        {/* Country pill */}
        <div className="absolute right-0 -translate-x-2 translate-y-3">
          <Skeleton className="rounded-round h-8 w-20 bg-white/80" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 px-4 pt-4">
          <div className="flex items-center justify-between gap-3">
            {/* Name */}
            <Skeleton className="h-5 w-40" />
            {/* Verified badge */}
            <Skeleton className="rounded-round h-9 w-28" />
          </div>

          {/* Category pill */}
          <Skeleton className="rounded-round h-7 w-24" />
        </div>

        {/* Footer */}
        <div className="px-4">
          <div className="my-3 flex items-center justify-between border-t border-gray-300 px-0 py-5">
            {/* Price */}
            <Skeleton className="h-10 w-24" />
            {/* Button */}
            <Skeleton className="h-10 w-32 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
