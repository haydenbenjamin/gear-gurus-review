import { createClient } from '@supabase/supabase-js';
import { Review } from '@/types/supabase';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function getReviewsByCategory(category: string): Promise<Review[]> {
  console.log('Starting getReviewsByCategory with category:', category);
  console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
  console.log('Supabase key length:', import.meta.env.VITE_SUPABASE_ANON_KEY?.length);

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

  console.log('Successfully fetched reviews:', data);
  return data || [];
}

export async function getReviewBySlug(slug: string): Promise<Review | null> {
  console.log('Starting getReviewBySlug with slug:', slug);
  
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

  console.log('Successfully fetched review:', data);
  return data;
}