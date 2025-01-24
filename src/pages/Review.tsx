import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getReviewBySlug } from "@/services/reviews";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { QuickTake } from "@/components/review/QuickTake";
import { ProductReview } from "@/components/review/ProductReview";
import { Review as ReviewType } from "@/types/supabase";

const Review = () => {
  const { reviewId } = useParams();
  
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