import { Link } from "react-router-dom";

interface ReviewHeaderProps {
  title: string;
  date: string;
}

export const ReviewHeader = ({ title, date }: ReviewHeaderProps) => {
  return (
    <div className="mb-8">
      <Link to="/" className="text-secondary hover:underline mb-4 inline-block">
        ← Back to Reviews
      </Link>
      <span className="text-secondary uppercase tracking-wider block mb-2">
        Desks
      </span>
      <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
      <div className="flex items-center gap-4 text-gray-600 mb-6">
        <span>Updated {date}</span>
      </div>
    </div>
  );
};