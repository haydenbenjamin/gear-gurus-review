import { createClient } from '@supabase/supabase-js';
import { Review, Product } from '@/types/supabase';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function getReviewsByCategory(category: string): Promise<Review[]> {
  const { data, error } = await supabase
    .from('reviews')
    .select(`
      *,
      products (*)
    `)
    .eq('category', category === 'all' ? undefined : category);

  if (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }

  return data || [];
}

export async function getReviewBySlug(slug: string): Promise<Review | null> {
  const { data, error } = await supabase
    .from('reviews')
    .select(`
      *,
      products (*)
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching review:', error);
    return null;
  }

  return data;
}