export interface Review {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  url: string;
  date: string;
  excerpt?: string;
  amazonUrl?: string;
  imageUrl?: string;
  price?: string;
}

export const categories = [
  { id: "all", name: "All Reviews" },
  { id: "desks", name: "Desks" },
  { id: "chairs", name: "Chairs" },
  { id: "monitors", name: "Monitors" },
  { id: "accessories", name: "Accessories" },
  { id: "lights", name: "Lighting" },
  { id: "cameras", name: "Cameras" },
];

export const reviews: Review[] = [
  {
    id: 1,
    title: "Best Desks Under $200",
    description: "Find the perfect affordable desk for your home office setup with our comprehensive guide to the best desks under $200.",
    image: "https://m.media-amazon.com/images/I/81GYcaGN3LL._AC_SX679_.jpg",
    category: "desks",
    url: "/desks/best-desks-under-200",
    date: "2024-03-20",
    excerpt: "Find the perfect affordable desk for your home office setup with our comprehensive guide to the best desks under $200.",
    imageUrl: "https://m.media-amazon.com/images/I/81GYcaGN3LL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Flexispot-Adjustable-Electric-Standing-Marble/dp/B08M3LYMWQ/",
    price: "Under $200"
  },
  {
    id: 2,
    title: "Best Ergonomic Chair",
    description: "Discover the best ergonomic chairs that provide comfort and support for long hours of work.",
    image: "https://m.media-amazon.com/images/I/81c1Z1g1WPL._AC_SL1500_.jpg",
    category: "chairs",
    url: "/chairs/best-ergonomic-chair",
    date: "2024-02-15",
    excerpt: "Discover the best ergonomic chairs that provide comfort and support for long hours of work.",
    imageUrl: "https://m.media-amazon.com/images/I/81c1Z1g1WPL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/example",
    price: "$200-$500"
  },
  {
    id: 3,
    title: "Top Gaming Desks",
    description: "Explore our top picks for gaming desks that enhance your gaming experience.",
    image: "https://m.media-amazon.com/images/I/81G1Z1g1WPL._AC_SL1500_.jpg",
    category: "gaming",
    url: "/gaming/best-gaming-desks",
    date: "2024-01-10",
    excerpt: "Explore our top picks for gaming desks that enhance your gaming experience.",
    imageUrl: "https://m.media-amazon.com/images/I/81G1Z1g1WPL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/example",
    price: "$300-$600"
  },
  {
    id: 4,
    title: "Stylish Office Decor",
    description: "Find inspiration for stylish office decor that boosts productivity and creativity.",
    image: "https://m.media-amazon.com/images/I/81D1Z1g1WPL._AC_SL1500_.jpg",
    category: "decor",
    url: "/decor/stylish-office-decor",
    date: "2024-03-01",
    excerpt: "Find inspiration for stylish office decor that boosts productivity and creativity.",
    imageUrl: "https://m.media-amazon.com/images/I/81D1Z1g1WPL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/example",
    price: "$50-$200"
  },
  {
    id: 5,
    title: "Best Standing Desks for 2024",
    description: "A comprehensive guide to the best standing desks available in the market.",
    image: "https://m.media-amazon.com/images/I/71vZypjNkPS._AC_SL1500_.jpg",
    category: "desks",
    url: "/desks/best-standing-desks",
    date: "2024-03-15",
    excerpt: "Find the perfect standing desk to improve your work setup and posture.",
    imageUrl: "https://m.media-amazon.com/images/I/71vZypjNkPS._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/example",
    price: "$300-$800"
  },
  {
    id: 6,
    title: "Best L-Shaped Desks Review",
    description: "Discover the top L-shaped desks for maximizing your workspace.",
    image: "https://m.media-amazon.com/images/I/81XR+H7YgIL._AC_SL1500_.jpg",
    category: "desks",
    url: "/desks/best-l-shaped-desks",
    date: "2024-03-10",
    excerpt: "Find the perfect L-shaped desk to maximize your workspace efficiency.",
    imageUrl: "https://m.media-amazon.com/images/I/81XR+H7YgIL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/example",
    price: "$150-$400"
  },
  {
    id: 7,
    title: "Best Gaming Desks Under $300",
    description: "The ultimate guide to affordable gaming desks that don't compromise on quality.",
    image: "https://m.media-amazon.com/images/I/71WSt8qL1FL._AC_SL1500_.jpg",
    category: "desks",
    url: "/desks/best-gaming-desks-under-300",
    date: "2024-03-05",
    excerpt: "Find the perfect gaming desk that fits your budget and gaming setup needs.",
    imageUrl: "https://m.media-amazon.com/images/I/71WSt8qL1FL._AC_SL1500_.jpg",
    amazonUrl: "https://www.amazon.com/example",
    price: "Under $300"
  }
];
