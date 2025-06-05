export default function SkeletonProductGrid() {
  return (
    <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="p-4 bg-white rounded shadow animate-pulse">
          <div className="h-40 bg-gray-200 mb-4 rounded" />
          <div className="h-4 bg-gray-200 mb-2 w-3/4 rounded" />
          <div className="h-4 bg-gray-200 w-1/2 rounded" />
        </div>
      ))}
    </div>
  );
}