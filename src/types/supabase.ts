export interface Product {
  id: number;
  title: string;
  description: string;
  image_url: string;
  amazon_url: string;
  price: string;
  category: string;
  created_at: string;
}

export interface Review {
  id: number;
  title: string;
  description: string;
  image_url: string;
  category: string;
  slug: string;
  date: string;
  quick_take: string;
  products: Product[];
  created_at: string;
}