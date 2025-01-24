import { ReviewCard } from "@/components/ReviewCard";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { getReviewsByCategory } from "@/services/reviews";
import { useQuery } from "@tanstack/react-query";
import { Review } from "@/types/supabase";

const Index = () => {
  const { data: reviews = [], isLoading } = useQuery<Review[]>({
    queryKey: ['reviews', 'all'],
    queryFn: () => getReviewsByCategory('all'),
  });

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-white mb-8">
          Latest Reviews
        </h2>
        {isLoading ? (
          <p className="text-white">Loading reviews...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;