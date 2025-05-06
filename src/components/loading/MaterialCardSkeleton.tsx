import { Skeleton } from "@/components/ui/skeleton";

const MaterialCardSkeleton = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 flex flex-col">
      <Skeleton className="h-64 lg:h-96 w-full" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    </div>
  );
};

export default MaterialCardSkeleton;
