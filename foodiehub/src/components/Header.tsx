import { Search, MapPin, ChevronDown } from 'lucide-react';

interface HeaderProps {
  location: string;
  setLocation: (loc: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ location, setLocation, searchQuery, setSearchQuery }: HeaderProps) {
  const locations = ['New Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune'];

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-4 md:px-8 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-black italic text-orange-500 tracking-tighter">FoodieHub</h1>
        </div>
        
        <div className="flex-1 max-w-2xl w-full flex items-center bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="relative flex items-center px-3 border-r border-gray-200 min-w-[140px] md:min-w-[180px] group">
            <MapPin className="text-red-400 w-5 h-5 mr-2" />
            <select 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-sm text-gray-600 bg-transparent outline-none cursor-pointer appearance-none pr-4 w-full"
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          <div className="flex-1 flex items-center px-3">
            <Search className="text-gray-400 w-5 h-5 mr-2" />
            <input 
              type="text" 
              placeholder="Search for restaurant, cuisine or a dish" 
              className="w-full py-2 text-sm outline-none text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-500 font-light">
          <button 
            onClick={() => alert('Login feature coming soon!')}
            className="hover:text-gray-800 transition-colors"
          >
            Log in
          </button>
          <button 
            onClick={() => alert('Sign up feature coming soon!')}
            className="hover:text-gray-800 transition-colors"
          >
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
