import { Link } from "react-router-dom";
import { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] animate-fade-in">
      <img
        src={review.imageUrl}
        alt={review.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-sm text-secondary uppercase tracking-wider">
          {review.category}
        </span>
        <h2 className="text-xl font-semibold mt-2 mb-2">
          <Link to={`/review/${review.id}`} className="hover:text-secondary">
            {review.title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4">{review.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-primary font-semibold">{review.price}</span>
          <a
            href={review.amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-primary transition-colors"
          >
            View on Amazon
          </a>
        </div>
      </div>
    </div>
  );
};