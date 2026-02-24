import React from 'react';
import { Star } from 'lucide-react';
import { Restaurant } from '../data/restaurants';
import { motion } from 'motion/react';

interface RestaurantCardProps {
  restaurant: Restaurant;
  key?: React.Key;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const handleClick = () => {
    alert(`Opening ${restaurant.name} details... (Feature coming soon!)`);
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      onClick={handleClick}
      className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-gray-100"
    >
      <div className="relative h-52 overflow-hidden">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-gray-700">
          {restaurant.distance}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1 group-hover:text-red-500 transition-colors">
            {restaurant.name}
          </h3>
          <div className="flex items-center bg-green-700 text-white px-1.5 py-0.5 rounded text-xs font-bold shrink-0">
            {restaurant.rating} <Star className="w-3 h-3 ml-0.5 fill-current" />
          </div>
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p className="truncate mr-2">{restaurant.cuisine}</p>
          <p className="shrink-0">{restaurant.priceRange}</p>
        </div>
      </div>
    </motion.div>
  );
}
