import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import RestaurantList from './components/RestaurantList';
import EmptyState from './components/EmptyState';
import { restaurants } from './data/restaurants';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All');
  const [minRating, setMinRating] = useState(0);
  const [location, setLocation] = useState('New Delhi');

  // Extract unique cuisines for the filter
  const cuisines = useMemo(() => {
    const uniqueCuisines = new Set(restaurants.map(r => r.cuisine));
    return Array.from(uniqueCuisines).sort();
  }, []);

  // Filter logic
  const filteredRestaurants = useMemo(() => {
    return restaurants.filter(restaurant => {
      const matchesSearch = 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCuisine = selectedCuisine === 'All' || restaurant.cuisine === selectedCuisine;
      
      const matchesRating = restaurant.rating >= minRating;

      return matchesSearch && matchesCuisine && matchesRating;
    });
  }, [searchQuery, selectedCuisine, minRating]);

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("This feature is coming soon! We're currently in beta.");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header 
        location={location} 
        setLocation={setLocation} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Best Food in {location}</h2>
          <p className="text-gray-500">Explore top-rated restaurants, cafes, and bars around you</p>
        </div>

        <SearchBar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
        />

        <FilterBar 
          cuisines={cuisines}
          selectedCuisine={selectedCuisine}
          setSelectedCuisine={setSelectedCuisine}
          minRating={minRating}
          setMinRating={setMinRating}
          resultsCount={filteredRestaurants.length}
        />

        {filteredRestaurants.length > 0 ? (
          <RestaurantList restaurants={filteredRestaurants} />
        ) : (
          <EmptyState />
        )}
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <h1 className="text-3xl font-black italic text-gray-400 tracking-tighter">FoodieHub</h1>
            <div className="flex gap-8 text-sm text-gray-500 font-medium">
              <a href="#" onClick={handleLinkClick} className="hover:text-gray-800">About FoodieHub</a>
              <a href="#" onClick={handleLinkClick} className="hover:text-gray-800">Careers</a>
              <a href="#" onClick={handleLinkClick} className="hover:text-gray-800">For Restaurants</a>
              <a href="#" onClick={handleLinkClick} className="hover:text-gray-800">Learn More</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-xs text-gray-400 text-center">
            By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © FoodieHub™ Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
