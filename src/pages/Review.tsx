import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getReviewBySlug } from "@/services/reviews";
import { Header } from "@/components/Header";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { QuickTake } from "@/components/review/QuickTake";
import { ProductReview } from "@/components/review/ProductReview";
import { Review as ReviewType } from "@/types/supabase";

const Review = () => {
  const { category, slug } = useParams();
  
  const { data: review, isLoading, error } = useQuery<ReviewType | null>({
    queryKey: ['review', category, slug],
    queryFn: () => getReviewBySlug(`${category}/${slug}`),
  });

  if (isLoading) {
    return <div className="min-h-screen bg-muted">Loading...</div>;
  }

  if (error || !review) {
    return <div className="min-h-screen bg-muted">Review not found</div>;
  }

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="bg-primary rounded-lg shadow-md p-6 max-w-4xl mx-auto text-[#F1F1F1]">
          <ReviewHeader review={review} />
          {review.quicktake && <QuickTake quickTake={review.quicktake} />}
          {review.products && <ProductReview products={review.products} />}
        </article>
      </main>
    </div>
  );
};

export default Review;