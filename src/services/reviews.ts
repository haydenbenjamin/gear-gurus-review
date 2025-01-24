import { createClient } from '@supabase/supabase-js';
import { Review } from '@/types/supabase';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function getReviewsByCategory(category: string): Promise<Review[]> {
  console.log('Fetching reviews for category:', category);
  let query = supabase
    .from('reviews')
    .select(`
      *,
      products (*)
    `);

  if (category !== 'all') {
    query = query.eq('category', category);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }

  console.log('Fetched reviews:', data);
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