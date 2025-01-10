import { Header } from "@/components/Header";
import { reviews } from "@/data/reviews";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { QuickTake } from "@/components/review/QuickTake";
import { ProductReview } from "@/components/review/ProductReview";
import { RelatedReviews } from "@/components/review/RelatedReviews";

const DeskReview = () => {
  const review = reviews.find((r) => r.url === "/desks/best-desks-under-200");
  const relatedReviews = reviews
    .filter((r) => r.category === "desks" && r.url !== "/desks/best-desks-under-200")
    .slice(0, 3);

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