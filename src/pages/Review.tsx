import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getReviewBySlug } from "@/services/reviews";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { QuickTake } from "@/components/review/QuickTake";
import { ProductReview } from "@/components/review/ProductReview";
import audioReviews from "@/content/audio.json";
import { Review as ReviewType } from "@/types/supabase";

const Review = () => {
  const { reviewId } = useParams();
  
  // First check if this is an audio review from the static content
  const audioReview = audioReviews.reviews.find(
    (review) => review.url === `/audio/${reviewId}` || 
                review.url === `/review/${reviewId}`
  );

  // If it's an audio review, use that data directly
  if (audioReview) {
    const review: ReviewType = {
      id: audioReview.id,
      title: audioReview.title,
      description: audioReview.description,
      image: audioReview.image,
      imageurl: audioReview.imageUrl,
      category: audioReview.category,
      url: audioReview.url,
      date: audioReview.date,
      excerpt: audioReview.excerpt,
      amazonurl: audioReview.amazonUrl,
      price: audioReview.price,
      quicktake: audioReview.quickTake,
      created_at: null,
      updated_at: null,
      products: audioReview.products?.map(product => ({
        id: 0, // temporary id since it's static content
        title: product.title,
        description: product.description,
        imageurl: product.imageUrl,
        amazonurl: product.amazonUrl,
        review_id: audioReview.id,
        type: null,
        created_at: null,
        updated_at: null
      }))
    };

    return (
      <div className="min-h-screen bg-muted pb-16">
        <ReviewHeader review={review} />
        {review.quicktake && <QuickTake quickTake={review.quicktake} />}
        {review.products && <ProductReview products={review.products} />}
      </div>
    );
  }

  // If not an audio review, fetch from Supabase
  const { data: review, isLoading, error } = useQuery({
    queryKey: ['review', reviewId],
    queryFn: () => getReviewBySlug(`/review/${reviewId}`),
  });

  if (isLoading) {
    return <div className="min-h-screen bg-muted">Loading...</div>;
  }

  if (error || !review) {
    return <div className="min-h-screen bg-muted">Review not found</div>;
  }

  return (
    <div className="min-h-screen bg-muted pb-16">
      <ReviewHeader review={review} />
      {review.quicktake && <QuickTake quickTake={review.quicktake} />}
      {review.products && <ProductReview products={review.products} />}
    </div>
  );
};

export default Review;