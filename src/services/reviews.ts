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
  // Remove leading slash if present
  const cleanUrl = url.startsWith('/') ? url.substring(1) : url;
  
  // Try to find the review in each category
  const categories = ['audio', 'desks'];
  
  for (const category of categories) {
    try {
      const reviews = await getReviewsByCategory(category);
      const review = reviews.find(review => {
        const reviewUrl = review.url.startsWith('/') ? review.url.substring(1) : review.url;
        return reviewUrl === cleanUrl;
      });
      
      if (review) {
        return review;
      }
    } catch (error) {
      console.error(`Error searching in category ${category}:`, error);
    }
  }
  
  return null;
}