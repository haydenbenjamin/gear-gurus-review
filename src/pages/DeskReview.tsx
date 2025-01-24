import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { QuickTake } from "@/components/review/QuickTake";
import { ProductReview } from "@/components/review/ProductReview";
import { RelatedReviews } from "@/components/review/RelatedReviews";
import { getReviewBySlug, getReviewsByCategory } from "@/services/reviews";
import { Review } from "@/types/supabase";

const DeskReview = () => {
  const [review, setReview] = useState<Review | null>(null);
  const [relatedReviews, setRelatedReviews] = useState<Review[]>([]);

  useEffect(() => {
    const loadReview = async () => {
      const reviewData = await getReviewBySlug('desks/best-desks-under-200');
      setReview(reviewData);

      if (reviewData) {
        const allReviews = await getReviewsByCategory("desks");
        const related = allReviews
          .filter((r) => r.url !== '/desks/best-desks-under-200')
          .slice(0, 3);
        setRelatedReviews(related);
      }
    };

    loadReview();
  }, []);

  if (!review) return null;

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="bg-primary rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <ReviewHeader review={review} />

          {review.quicktake && (
            <QuickTake quickTake={review.quicktake} />
          )}

          {review.products && (
            <ProductReview products={review.products} />
          )}

          <RelatedReviews reviews={relatedReviews} />
        </article>
      </main>
    </div>
  );
};

export default DeskReview;