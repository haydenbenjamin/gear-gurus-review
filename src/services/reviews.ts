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
  
  // Split the URL into category and slug
  const [category] = cleanUrl.split('/');
  
  try {
    const reviews = await getReviewsByCategory(category);
    const review = reviews.find(review => {
      const reviewUrl = review.url.startsWith('/') ? review.url.substring(1) : review.url;
      return reviewUrl === cleanUrl;
    });
    
    return review || null;
  } catch (error) {
    console.error(`Error finding review for URL ${url}:`, error);
    return null;
  }
}