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
  { id: "computer-accessories", name: "Computer Accessories" },
  { id: "desks", name: "Desks" },
  { id: "chairs", name: "Chairs" },
  { id: "cameras", name: "Cameras" },
  { id: "lighting", name: "Lighting" },
  { id: "desk-accessories", name: "Desk Accessories" },
  { id: "audio", name: "Audio" }
];