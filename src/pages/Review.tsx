import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getReviewBySlug } from "@/services/reviews";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { QuickTake } from "@/components/review/QuickTake";
import { ProductReview } from "@/components/review/ProductReview";
import { RelatedReviews } from "@/components/review/RelatedReviews";

const Review = () => {
  const { "*": path } = useParams();
  const slug = path?.split('/').pop() || '';
  
  const { data: review, isLoading } = useQuery({
    queryKey: ["review", slug],
    queryFn: () => getReviewBySlug(slug),
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
        
        {review.quick_take && (
          <QuickTake content={review.quick_take} />
        )}

        <div className="space-y-8">
          {review.products?.map((product) => (
            <ProductReview
              key={product.id}
              title={product.title}
              imageUrl={product.image_url}
              description={product.description}
              amazonUrl={product.amazon_url}
            />
          ))}
        </div>

        <RelatedReviews reviews={[]} />
      </div>
    </div>
  );
};

export default Review;