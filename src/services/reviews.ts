import { supabase } from "@/integrations/supabase/client";
import { Review } from "@/types/supabase";

export async function getReviewsByCategory(category: string): Promise<Review[]> {
  console.log('Starting getReviewsByCategory with category:', category);

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
    throw error;
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
    .eq('url', slug)
    .maybeSingle();

  if (error) {
    console.error('Error fetching review:', error);
    throw error;
  }

  console.log('Successfully fetched review:', data);
  return data;
}