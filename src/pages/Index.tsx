import { ReviewCard } from "@/components/ReviewCard";
import { Header } from "@/components/Header";
import { reviews } from "@/data/reviews";

const Index = () => {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Latest Workstation Reviews
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

export default Index;