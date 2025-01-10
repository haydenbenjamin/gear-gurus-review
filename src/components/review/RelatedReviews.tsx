import { Review } from "@/data/reviews";
import { ReviewCard } from "@/components/ReviewCard";

interface RelatedReviewsProps {
  reviews: Review[];
}

export const RelatedReviews = ({ reviews }: RelatedReviewsProps) => {
  if (reviews.length === 0) return null;

  return (
    <section className="mt-16 max-w-4xl mx-auto bg-primary rounded-lg p-8">
      <h2 className="text-2xl font-bold text-white mb-6">More Desk Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};