import { SearchX } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <div className="bg-gray-50 p-6 rounded-full mb-6">
        <SearchX className="w-16 h-16 text-gray-300" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">No restaurants found</h3>
      <p className="text-gray-500 max-w-md">
        We couldn't find any restaurants matching your search or filters. 
        Try adjusting your criteria or clearing all filters.
      </p>
    </div>
  );
}
