import { ReviewCard } from "@/components/ReviewCard";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { getReviewsByCategory } from "@/services/reviews";
import { useQuery } from "@tanstack/react-query";
import { Review } from "@/types/supabase";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const { data: reviews = [], isLoading, error } = useQuery<Review[]>({
    queryKey: ['reviews', 'all'],
    queryFn: () => getReviewsByCategory('all'),
  });

  console.log('Reviews in Index:', reviews);

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-white mb-8">
          Latest Reviews
        </h2>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-primary rounded-lg shadow-xl overflow-hidden">
                <Skeleton className="w-full h-48" />
                <div className="p-4">
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-20 w-full mb-4" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <p className="text-white">Error loading reviews. Please try again later.</p>
        ) : reviews.length === 0 ? (
          <p className="text-white">No reviews found.</p>
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