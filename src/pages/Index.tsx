import { ReviewCard } from "@/components/ReviewCard";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { reviews } from "@/data/reviews";
import { getReviewsByCategory } from "@/services/reviews";
import { useQuery } from "@tanstack/react-query";

const Index = () => {
  const { data: audioReviews = [] } = useQuery({
    queryKey: ['reviews', 'audio'],
    queryFn: () => getReviewsByCategory('audio'),
  });

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-white mb-8">
          Latest Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          {audioReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;