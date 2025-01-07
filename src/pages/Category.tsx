import { useParams } from "react-router-dom";
import { ReviewCard } from "@/components/ReviewCard";
import { Header } from "@/components/Header";
import { reviews, categories } from "@/data/reviews";

const Category = () => {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);
  const filteredReviews = reviews.filter(
    (review) => review.category === categoryId
  );

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">
          {category?.name || "Category Not Found"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Category;