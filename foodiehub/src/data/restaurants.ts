export interface Restaurant {
  id: number;
  name: string;
  rating: number;
  cuisine: string;
  distance: string;
  priceRange: string;
  image: string;
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "The Gourmet Kitchen",
    rating: 4.8,
    cuisine: "Italian",
    distance: "2.5 km",
    priceRange: "₹800 for two",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Spice Route",
    rating: 4.2,
    cuisine: "North Indian",
    distance: "1.2 km",
    priceRange: "₹500 for two",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Sushi World",
    rating: 4.5,
    cuisine: "Japanese",
    distance: "3.8 km",
    priceRange: "₹1200 for two",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    name: "Burger King",
    rating: 3.9,
    cuisine: "Fast Food",
    distance: "0.8 km",
    priceRange: "₹400 for two",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 5,
    name: "Taco Bell",
    rating: 3.7,
    cuisine: "Mexican",
    distance: "1.5 km",
    priceRange: "₹450 for two",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 6,
    name: "Dragon House",
    rating: 4.1,
    cuisine: "Chinese",
    distance: "2.1 km",
    priceRange: "₹600 for two",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 7,
    name: "Healthy Bites",
    rating: 4.6,
    cuisine: "Salads",
    distance: "0.5 km",
    priceRange: "₹350 for two",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 8,
    name: "Pasta Paradise",
    rating: 4.3,
    cuisine: "Italian",
    distance: "4.2 km",
    priceRange: "₹900 for two",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 9,
    name: "The Curry Pot",
    rating: 3.8,
    cuisine: "North Indian",
    distance: "1.8 km",
    priceRange: "₹550 for two",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 10,
    name: "Waffle House",
    rating: 4.7,
    cuisine: "Desserts",
    distance: "2.9 km",
    priceRange: "₹300 for two",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 11,
    name: "Pizza Hut",
    rating: 4.0,
    cuisine: "Fast Food",
    distance: "1.1 km",
    priceRange: "₹600 for two",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 12,
    name: "Green Garden",
    rating: 4.4,
    cuisine: "Salads",
    distance: "3.1 km",
    priceRange: "₹400 for two",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&auto=format&fit=crop&q=60"
  }
];
