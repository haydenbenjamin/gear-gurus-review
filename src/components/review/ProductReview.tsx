interface ProductReviewProps {
  title: string;
  imageUrl: string;
  description: string;
  amazonUrl: string;
}

export const ProductReview = ({ title, imageUrl, description, amazonUrl }: ProductReviewProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <img
        src={imageUrl}
        alt={title}
        className="w-full rounded-lg mb-4"
      />
      <p className="mb-4">{description}</p>
      <div className="flex justify-center mb-8">
        <a
          href={amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors"
        >
          Check Price on Amazon
        </a>
      </div>
    </section>
  );
};