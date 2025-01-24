import { Link } from "react-router-dom";
import { Review } from "@/types/supabase";

interface ReviewHeaderProps {
  review: Review;
}

export const ReviewHeader = ({ review }: ReviewHeaderProps) => {
  return (
    <div className="mb-8">
      <Link to="/" className="text-secondary hover:underline mb-4 inline-block">
        ← Back to Reviews
      </Link>
      <span className="text-secondary uppercase tracking-wider block mb-2">
        {review.category}
      </span>
      <h1 className="text-4xl font-bold text-primary mb-4">{review.title}</h1>
      <div className="flex items-center gap-4 text-gray-600 mb-6">
        <span>Updated {review.date}</span>
      </div>
    </div>
  );
};