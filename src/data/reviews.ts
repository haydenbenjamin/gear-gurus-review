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
  quickTake?: string;
  products?: {
    title: string;
    imageUrl: string;
    description: string;
    amazonUrl: string;
  }[];
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
  // Keep the first desk review
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
    price: "Under $200",
    quickTake: "After testing dozens of affordable desks, we've found that you don't need to spend a fortune to get a quality workspace. Our top picks combine durability, style, and functionality while staying under $200.",
    products: [
      {
        title: "Best Overall: Flexispot EC1 Standing Desk",
        imageUrl: "https://m.media-amazon.com/images/I/81GYcaGN3LL._AC_SX679_.jpg",
        description: "The Flexispot EC1 proves that you don't need to spend a fortune to get a quality standing desk. At just under $200, it offers electric height adjustment, a sturdy steel frame, and a spacious 48x24 inch desktop.",
        amazonUrl: "https://www.amazon.com/Flexispot-Adjustable-Electric-Standing-Marble/dp/B08M3LYMWQ/"
      },
      {
        title: "Best for Small Spaces: CubiCubi Computer Desk",
        imageUrl: "https://m.media-amazon.com/images/I/71ShBw4E6GL._AC_SL1500_.jpg",
        description: "Perfect for tight spaces, the CubiCubi desk combines industrial style with practical storage solutions. The 40-inch width fits perfectly in small apartments while still providing ample workspace.",
        amazonUrl: "https://www.amazon.com/dp/B08CVKQ7PC"
      },
      {
        title: "Best Modern Design: Tribesigns Computer Desk",
        imageUrl: "https://m.media-amazon.com/images/I/71WR3AzFDfL._AC_SL1500_.jpg",
        description: "The Tribesigns desk offers a sleek, minimalist design that looks more expensive than its price tag suggests. The white finish and gold accents add a touch of luxury to any home office.",
        amazonUrl: "https://www.amazon.com/dp/B07QFZGYSS"
      }
    ]
  }
];
