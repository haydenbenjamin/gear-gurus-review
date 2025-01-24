import { Link } from "react-router-dom";
import { Review } from "@/types/supabase";

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  console.log('Review in ReviewCard:', review);
  
  // Construct the review URL - if no custom URL is provided, use the review ID
  const reviewUrl = review.url || `/review/${review.id}`;
  
  return (
    <div className="bg-primary rounded-lg shadow-xl overflow-hidden transition-transform hover:scale-[1.02] animate-fade-in border border-accent/20">
      <img
        src={review.imageurl || review.image}
        alt={review.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-sm text-secondary uppercase tracking-wider">
          {review.category}
        </span>
        <h2 className="text-xl font-semibold mt-2 mb-2 text-white">
          <Link to={reviewUrl} className="hover:text-secondary">
            {review.title}
          </Link>
        </h2>
        <p className="text-gray-300 mb-4">{review.description}</p>
        <div className="flex justify-end">
          <Link
            to={reviewUrl}
            className="bg-secondary text-white px-4 py-2 rounded hover:bg-accent transition-colors"
          >
            Full Review
          </Link>
        </div>
      </div>
    </div>
  );
};