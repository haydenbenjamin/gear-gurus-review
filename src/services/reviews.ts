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

export async function getReviewByUrl(path: string): Promise<Review | null> {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Get the category from the first part of the path
  const category = cleanPath.split('/')[0];
  
  try {
    const reviews = await getReviewsByCategory(category);
    const review = reviews.find(review => {
      const reviewUrl = review.url.startsWith('/') ? review.url.substring(1) : review.url;
      return reviewUrl === cleanPath;
    });
    
    return review || null;
  } catch (error) {
    console.error(`Error finding review for path ${path}:`, error);
    return null;
  }
}