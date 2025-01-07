import { Link } from "react-router-dom";
import { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-primary rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-[1.02] animate-fade-in border border-accent/20">
      <img
        src={review.imageUrl || review.image}
        alt={review.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-sm text-secondary uppercase tracking-wider">
          {review.category}
        </span>
        <h2 className="text-xl font-semibold mt-2 mb-2 text-white">
          <Link to={review.url} className="hover:text-secondary">
            {review.title}
          </Link>
        </h2>
        <p className="text-gray-300 mb-4">{review.excerpt || review.description}</p>
        <div className="flex justify-end">
          <Link
            to={review.url}
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-accent transition-colors"
          >
            Full Review
          </Link>
        </div>
      </div>
    </div>
  );
};