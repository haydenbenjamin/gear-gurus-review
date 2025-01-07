import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { reviews } from "@/data/reviews";

const Review = () => {
  const { reviewId } = useParams();
  const review = reviews.find((r) => r.id === Number(reviewId));

  if (!review) {
    return (
      <div className="min-h-screen bg-muted">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-primary mb-8">
            Review Not Found
          </h1>
          <Link to="/" className="text-secondary hover:underline">
            Back to Home
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="text-secondary hover:underline mb-4 inline-block">
              ← Back to Reviews
            </Link>
            <span className="text-secondary uppercase tracking-wider block mb-2">
              {review.category}
            </span>
            <h1 className="text-4xl font-bold text-primary mb-4">
              {review.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span className="font-semibold">Price Range: {review.price}</span>
              <span>•</span>
              <span>Updated {new Date(review.date).toLocaleDateString()}</span>
            </div>
          </div>

          <img
            src={review.imageUrl || review.image}
            alt={review.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Quick Verdict</h2>
              <p className="text-gray-700">{review.excerpt || review.description}</p>
            </div>

            <div className="flex justify-center mb-8">
              <a
                href={review.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-8 py-4 rounded-lg hover:bg-accent transition-colors inline-flex items-center gap-2"
              >
                Check Price on Amazon
              </a>
            </div>

            <p className="text-gray-600 italic">
              Note: This is a demo review page. In a real implementation, this would contain the full review content with detailed sections about features, pros and cons, comparisons, and more.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Review;