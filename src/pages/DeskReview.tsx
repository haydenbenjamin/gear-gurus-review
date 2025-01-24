import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const { reviewId } = useParams();

  useEffect(() => {
    const loadReview = async () => {
      if (!reviewId) return;
      const reviewData = await getReviewBySlug(reviewId);
      setReview(reviewData);

      if (reviewData) {
        const allReviews = await getReviewsByCategory("desks");
        const related = allReviews
          .filter((r) => r.slug !== reviewId)
          .slice(0, 3);
        setRelatedReviews(related);
      }
    };

    loadReview();
  }, [reviewId]);

  if (!review) return null;

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <ReviewHeader 
            title={review.title}
            date={review.date}
          />

          <div className="prose prose-lg max-w-none">
            <QuickTake content={review.quick_take || ""} />

            {review.products?.map((product) => (
              <ProductReview
                key={product.title}
                title={product.title}
                imageUrl={product.image_url}
                description={product.description}
                amazonUrl={product.amazon_url}
              />
            ))}
          </div>
        </article>

        <RelatedReviews reviews={relatedReviews} />
      </main>
    </div>
  );
};

export default DeskReview;