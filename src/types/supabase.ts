export interface Product {
  id: number;
  title: string | null;
  description: string | null;
  imageurl: string | null;
  amazonurl: string | null;
  review_id: number | null;
  type: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface Review {
  id: number;
  title: string;
  description: string | null;
  image: string | null;
  imageurl: string | null;
  category: string | null;
  url: string | null;
  date: string | null;
  excerpt: string | null;
  amazonurl: string | null;
  price: string | null;
  quicktake: string | null;
  created_at: string | null;
  updated_at: string | null;
  products?: Product[];
}