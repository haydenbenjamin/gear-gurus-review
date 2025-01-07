import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { reviews } from "@/data/reviews";

const Review = () => {
  const { reviewId } = useParams();
  const review = reviews.find((r) => r.id === reviewId);

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
          <img
            src={review.imageUrl}
            alt={review.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-4xl font-bold text-primary mb-4">
            {review.title}
          </h1>
          <div className="flex items-center justify-between mb-6">
            <span className="text-secondary uppercase tracking-wider">
              {review.category}
            </span>
            <span className="text-primary font-semibold">{review.price}</span>
          </div>
          <p className="text-gray-600 mb-6">{review.excerpt}</p>
          <a
            href={review.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white px-6 py-3 rounded hover:bg-primary transition-colors inline-block"
          >
            View on Amazon
          </a>
        </article>
      </main>
    </div>
  );
};

export default Review;