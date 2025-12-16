import { Skeleton } from "./ui/skeleton";

const UserProfileSkeleton = () => {
  return (
    <div className="flex flex-col justify-center gap-1 sm:flex-row sm:items-center sm:justify-between">
      {/* Left section */}
      <div className="items-center justify-center gap-4 sm:flex">
        {/* Avatar */}
        <div className="mb-4 sm:mb-0">
          <Skeleton className="h-24 w-24 rounded-full" />
        </div>

        {/* User info */}
        <div className="flex flex-col gap-1">
          {/* Name */}
          <Skeleton className="h-4 w-40" />

          {/* Email */}
          <Skeleton className="h-4 w-56" />

          {/* Stats pills */}
          <div className="mt-1 flex flex-wrap items-center gap-3">
            <Skeleton className="h-6 w-32 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-36 rounded-full" />
          </div>
        </div>
      </div>

      {/* Edit button */}
      <Skeleton className="mt-4 h-10 w-36 rounded-md sm:mt-0" />
    </div>
  );
};

export default UserProfileSkeleton;
