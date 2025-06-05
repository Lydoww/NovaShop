export default function SkeletonFilters() {
  return (
    <aside className="w-1/4 p-4 bg-white mb-4 animated-pulse">
      <div className="mb-4">
        <div className="h-4 bg-gray-200 w-1/3 mb-4 rounded" />
        <div className="h-10 bg-gray-200 rounded-md" />
      </div>

      <div className="mb-4">
        <div className="h-4 bg-gray-200 w-1/3 mb-4 rounded" />
        <div className="flex flex-wrap gap-2">
          {[...Array(4)].map((_, i) => (
            <div key={i}>
              <div className=" h-8 w-20 bg-gray-200 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}