import { ChevronDown, Star } from 'lucide-react';

interface FilterBarProps {
  cuisines: string[];
  selectedCuisine: string;
  setSelectedCuisine: (cuisine: string) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
  resultsCount: number;
}

export default function FilterBar({ 
  cuisines, 
  selectedCuisine, 
  setSelectedCuisine, 
  minRating, 
  setMinRating,
  resultsCount 
}: FilterBarProps) {
  return (
    <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 mb-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 mr-4">
          <span className="text-sm font-medium text-gray-500">{resultsCount} restaurants</span>
        </div>

        {/* Rating Filter */}
        <div className="relative group">
          <select 
            className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/20"
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
          >
            <option value={0}>Rating: All</option>
            <option value={4.5}>Rating: 4.5+</option>
            <option value={4.0}>Rating: 4.0+</option>
            <option value={3.5}>Rating: 3.5+</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* Cuisine Filter */}
        <div className="relative group">
          <select 
            className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/20"
            value={selectedCuisine}
            onChange={(e) => setSelectedCuisine(e.target.value)}
          >
            <option value="All">Cuisine: All</option>
            {cuisines.map(cuisine => (
              <option key={cuisine} value={cuisine}>{cuisine}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        {/* Quick Filters */}
        <button 
          onClick={() => { setSelectedCuisine('All'); setMinRating(0); }}
          className="text-sm font-medium text-red-500 hover:text-red-600 px-2 py-1"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
