import { Header } from "@/components/Header";
import { reviews } from "@/data/reviews";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { QuickTake } from "@/components/review/QuickTake";
import { ProductReview } from "@/components/review/ProductReview";
import { RelatedReviews } from "@/components/review/RelatedReviews";

const DeskReview = () => {
  const relatedReviews = reviews
    .filter((r) => r.category === "desks" && r.url !== "/desks/best-desks-under-200")
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <ReviewHeader 
            title="Best Desks Under $200 for Home Office (2024)"
            date="March 20, 2024"
          />

          <div className="prose prose-lg max-w-none">
            <QuickTake 
              content="After testing dozens of affordable desks, we've found that you don't need to spend a fortune to get a quality workspace. Our top picks combine durability, style, and functionality while staying under $200."
            />

            <ProductReview
              title="Best Overall: Flexispot EC1 Standing Desk"
              imageUrl="https://m.media-amazon.com/images/I/81GYcaGN3LL._AC_SX679_.jpg"
              description="The Flexispot EC1 proves that you don't need to spend a fortune to get a quality standing desk. At just under $200, it offers electric height adjustment, a sturdy steel frame, and a spacious 48x24 inch desktop."
              amazonUrl="https://www.amazon.com/Flexispot-Adjustable-Electric-Standing-Marble/dp/B08M3LYMWQ/"
            />

            <ProductReview
              title="Best for Small Spaces: CubiCubi Computer Desk"
              imageUrl="https://m.media-amazon.com/images/I/71ShBw4E6GL._AC_SL1500_.jpg"
              description="Perfect for tight spaces, the CubiCubi desk combines industrial style with practical storage solutions. The 40-inch width fits perfectly in small apartments while still providing ample workspace."
              amazonUrl="https://www.amazon.com/dp/B08CVKQ7PC"
            />

            <ProductReview
              title="Best Modern Design: Tribesigns Computer Desk"
              imageUrl="https://m.media-amazon.com/images/I/71WR3AzFDfL._AC_SL1500_.jpg"
              description="The Tribesigns desk offers a sleek, minimalist design that looks more expensive than its price tag suggests. The white finish and gold accents add a touch of luxury to any home office."
              amazonUrl="https://www.amazon.com/dp/B07QFZGYSS"
            />
          </div>
        </article>

        <RelatedReviews reviews={relatedReviews} />
      </main>
    </div>
  );
};

export default DeskReview;