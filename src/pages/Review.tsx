import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getReviewBySlug } from "@/services/reviews";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { QuickTake } from "@/components/review/QuickTake";
import { ProductReview } from "@/components/review/ProductReview";
import { RelatedReviews } from "@/components/review/RelatedReviews";
import { Header } from "@/components/Header";

const Review = () => {
  const { reviewId } = useParams();
  
  const { data: review, isLoading } = useQuery({
    queryKey: ["review", reviewId],
    queryFn: () => getReviewBySlug(reviewId || ''),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-muted">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">Loading review...</div>
        </div>
      </div>
    );
  }

  if (!review) {
    return (
      <div className="min-h-screen bg-muted">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-red-500">Review not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <article className="bg-primary rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <ReviewHeader 
            title={review.title}
            date={review.date || ''}
          />
          
          {review.quicktake && (
            <QuickTake content={review.quicktake} />
          )}

          <div className="space-y-8 mt-8">
            {review.products?.map((product) => (
              <ProductReview
                key={product.id}
                title={product.title || ''}
                imageUrl={product.imageurl || ''}
                description={product.description || ''}
                amazonUrl={product.amazonurl || ''}
              />
            ))}
          </div>

          <RelatedReviews reviews={[]} />
        </article>
      </div>
    </div>
  );
};

export default Review;