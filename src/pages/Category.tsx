import { useParams } from "react-router-dom";
import { ReviewCard } from "@/components/ReviewCard";
import { Header } from "@/components/Header";
import { categories } from "@/data/reviews";
import { useQuery } from "@tanstack/react-query";
import { getReviewsByCategory } from "@/services/reviews";
import { Review } from "@/types/supabase";

const Category = () => {
  const { categoryId } = useParams();
  const category = categories.find((c) => c.id === categoryId);
  
  const { data: reviews = [] } = useQuery<Review[]>({
    queryKey: ['reviews', categoryId],
    queryFn: () => getReviewsByCategory(categoryId || 'all'),
  });

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">
          {category?.name || "Category Not Found"}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Category;