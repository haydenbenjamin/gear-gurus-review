import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getReviewByUrl } from "@/services/reviews";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { QuickTake } from "@/components/review/QuickTake";
import { ProductReview } from "@/components/review/ProductReview";
import { RelatedReviews } from "@/components/review/RelatedReviews";

const Review = () => {
  const { "*": path } = useParams();
  
  const { data: review, isLoading } = useQuery({
    queryKey: ["review", path],
    queryFn: () => getReviewByUrl(path || ""),
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">Loading review...</div>
      </div>
    );
  }

  if (!review) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-500">Review not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <ReviewHeader title={review.title} date={review.date} />
        
        {review.quickTake && (
          <QuickTake content={review.quickTake} />
        )}

        <div className="space-y-8">
          {review.products?.map((product) => (
            <ProductReview
              key={product.title}
              title={product.title}
              imageUrl={product.imageUrl}
              description={product.description}
              amazonUrl={product.amazonUrl}
            />
          ))}
        </div>

        <RelatedReviews
          reviews={[]}
        />
      </div>
    </div>
  );
};

export default Review;