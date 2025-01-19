import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { QuickTake } from "@/components/review/QuickTake";
import { ProductReview } from "@/components/review/ProductReview";
import { RelatedReviews } from "@/components/review/RelatedReviews";
import { getReviewByUrl, getReviewsByCategory } from "@/services/reviews";
import { Review } from "@/types/review";

const DeskReview = () => {
  const [review, setReview] = useState<Review | null>(null);
  const [relatedReviews, setRelatedReviews] = useState<Review[]>([]);
  const { reviewId } = useParams();

  useEffect(() => {
    const loadReview = async () => {
      const url = `/desks/${reviewId}`;
      const reviewData = await getReviewByUrl(url);
      setReview(reviewData);

      if (reviewData) {
        const allReviews = await getReviewsByCategory("desks");
        const related = allReviews
          .filter((r) => r.url !== url)
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
            <QuickTake content={review.quickTake || ""} />

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
        </article>

        <RelatedReviews reviews={relatedReviews} />
      </main>
    </div>
  );
};

export default DeskReview;