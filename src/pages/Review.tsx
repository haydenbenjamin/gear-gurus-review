import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getReviewByUrl } from "@/services/reviews";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { QuickTake } from "@/components/review/QuickTake";
import { ProductReview } from "@/components/review/ProductReview";
import { RelatedReviews } from "@/components/review/RelatedReviews";
import { reviews } from "@/data/reviews";

const Review = () => {
  const { reviewId } = useParams();
  const fullUrl = `/${reviewId}`;

  const { data: review, isLoading } = useQuery({
    queryKey: ['review', reviewId],
    queryFn: () => getReviewByUrl(fullUrl),
  });

  if (isLoading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (!review) {
    return <div className="container mx-auto px-4 py-8">Review not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <ReviewHeader title={review.title} date={review.date} />
        
        {review.quickTake && (
          <QuickTake content={review.quickTake} />
        )}

        {review.products?.map((product, index) => (
          <ProductReview
            key={index}
            title={product.title}
            imageUrl={product.imageUrl}
            description={product.description}
            amazonUrl={product.amazonUrl}
          />
        ))}

        <RelatedReviews
          reviews={reviews.filter(r => r.category === review.category && r.id !== review.id)}
        />
      </div>
    </div>
  );
};

export default Review;