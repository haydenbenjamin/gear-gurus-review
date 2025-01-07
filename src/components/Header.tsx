import { Link } from "react-router-dom";
import { categories } from "@/data/reviews";

export const Header = () => {
  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-white mb-4 md:mb-0">
            WorkstationReviews
          </Link>
          <nav className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.id === "all" ? "/" : `/category/${category.id}`}
                className="text-white hover:text-accent transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};