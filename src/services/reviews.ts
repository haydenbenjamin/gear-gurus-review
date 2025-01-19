import { Review } from '@/types/review';

export async function getReviewsByCategory(category: string): Promise<Review[]> {
  try {
    const response = await import(`@/content/${category}.json`);
    return response.reviews;
  } catch (error) {
    console.error(`Error loading reviews for category ${category}:`, error);
    return [];
  }
}

export async function getReviewByUrl(url: string): Promise<Review | null> {
  // Extract category from URL (e.g., "desks" from "/desks/best-desks-under-200")
  const category = url.split('/')[1];
  
  try {
    const reviews = await getReviewsByCategory(category);
    return reviews.find(review => review.url === url) || null;
  } catch (error) {
    console.error(`Error loading review for URL ${url}:`, error);
    return null;
  }
}