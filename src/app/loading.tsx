import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:px-12">
      <Skeleton className="h-10 w-56" />
      <Skeleton className="mt-4 h-4 w-full max-w-md" />
      <Skeleton className="mt-2 h-4 w-full max-w-sm" />
      <Skeleton className="mt-8 h-12 w-full rounded-full" />
      <div className="mt-10 flex flex-wrap gap-2.5">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-9 w-24 rounded-full" />
        ))}
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-40 w-full rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
