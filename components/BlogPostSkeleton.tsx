export default function BlogPostSkeleton() {
    return (
        <div className="group flex flex-col h-full">
            <div className="nb-card-heavy h-full flex flex-col animate-pulse">
                {/* Image Skeleton */}
                <div className="aspect-[16/9] bg-gray-200 border-b-2 border-black" />

                <div className="p-8 flex-grow flex flex-col">
                    {/* Category and Reading Time */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-5 w-24 bg-gray-300" />
                        <div className="h-4 w-16 bg-gray-200" />
                    </div>

                    {/* Title */}
                    <div className="space-y-2 mb-4">
                        <div className="h-6 bg-gray-300 w-full" />
                        <div className="h-6 bg-gray-300 w-4/5" />
                    </div>

                    {/* Description */}
                    <div className="space-y-2 mb-6">
                        <div className="h-4 bg-gray-200 w-full" />
                        <div className="h-4 bg-gray-200 w-full" />
                        <div className="h-4 bg-gray-200 w-3/4" />
                    </div>

                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-black/10 flex justify-between items-center">
                        <div className="h-3 w-20 bg-gray-200" />
                        <div className="h-3 w-12 bg-gray-200" />
                    </div>
                </div>
            </div>
        </div>
    );
}
