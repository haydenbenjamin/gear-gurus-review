export interface Review {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  amazonUrl: string;
  imageUrl: string;
  price: string;
  updatedAt: string;
}

export const reviews: Review[] = [
  {
    id: "best-desks-under-200",
    title: "Best Desks Under $200 for Home Office",
    category: "desks",
    excerpt: "Find the perfect balance of quality and affordability with our top picks for home office desks under $200.",
    amazonUrl: "https://www.amazon.com/s?k=home+office+desk+under+200",
    imageUrl: "https://m.media-amazon.com/images/I/71cFRwJqMtL._AC_SL1500_.jpg",
    price: "Under $200",
    updatedAt: "2024-03-20",
  },
  {
    id: "best-32-inch-monitors",
    title: "Best 32-inch Monitors for Home Office",
    category: "monitors",
    excerpt: "Discover the top 32-inch monitors that offer the perfect balance of screen real estate and productivity features.",
    amazonUrl: "https://www.amazon.com/s?k=32+inch+monitor",
    imageUrl: "https://m.media-amazon.com/images/I/71mU5rpECpL._AC_SL1500_.jpg",
    price: "$200-$500",
    updatedAt: "2024-03-19",
  },
  {
    id: "best-mac-docking-stations",
    title: "Best Home Docking Stations for Macs",
    category: "accessories",
    excerpt: "Transform your MacBook into a powerful workstation with these top-rated docking stations.",
    amazonUrl: "https://www.amazon.com/s?k=macbook+docking+station",
    imageUrl: "https://m.media-amazon.com/images/I/71J2Z3dTwxL._AC_SL1500_.jpg",
    price: "$100-$300",
    updatedAt: "2024-03-18",
  },
];

export const categories = [
  { id: "all", name: "All Reviews" },
  { id: "desks", name: "Desks" },
  { id: "chairs", name: "Chairs" },
  { id: "monitors", name: "Monitors" },
  { id: "accessories", name: "Accessories" },
  { id: "lights", name: "Lighting" },
  { id: "cameras", name: "Cameras" },
];