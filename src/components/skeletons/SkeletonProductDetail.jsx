export default function SkeletonProductDetail() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 min-h-[70vh]">
        {/* Left side: Image placeholder */}
        <div className="flex flex-col justify-center">
          <div className="w-full h-96 bg-gray-200 rounded animate-pulse" />
        </div>

        {/* Right side: Text placeholders */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Title */}
          <div className="h-10 bg-gray-200 rounded w-3/4 animate-pulse" />

          {/* Category badge */}
          <div className="inline-block h-6 bg-gray-200 rounded-full w-24 animate-pulse" />

          {/* Description */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse" />
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-5 bg-gray-200 rounded animate-pulse"
                />
              ))}
            </div>
            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* Price */}
          <div className="h-12 w-24 bg-gray-200 rounded animate-pulse" />

          {/* Button */}
          <div className="h-12 bg-gray-300 rounded animate-pulse w-full" />
        </div>
      </div>
    </div>
  );
}
