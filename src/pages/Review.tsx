import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getReviewByUrl } from "@/services/reviews";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { QuickTake } from "@/components/review/QuickTake";
import { ProductReview } from "@/components/review/ProductReview";
import { RelatedReviews } from "@/components/review/RelatedReviews";

const Review = () => {
  const { category, slug } = useParams();
  const url = `${category}/${slug}`;

  const { data: review, isLoading } = useQuery({
    queryKey: ["review", url],
    queryFn: () => getReviewByUrl(url),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!review) {
    return <div>Review not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ReviewHeader title={review.title} date={review.date} />
      {review.quickTake && <QuickTake content={review.quickTake} />}
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
      <RelatedReviews reviews={[]} />
    </div>
  );
};

export default Review;