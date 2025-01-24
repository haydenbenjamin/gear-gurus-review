import { Product } from "@/types/supabase";

interface ProductReviewProps {
  products: Product[];
}

export const ProductReview = ({ products }: ProductReviewProps) => {
  return (
    <section className="mb-12">
      {products.map((product, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-6">{product.title}</h2>
          <img
            src={product.imageurl || ''}
            alt={product.title || ''}
            className="w-full rounded-lg mb-4"
          />
          <p className="mb-4">{product.description}</p>
          {product.amazonurl && (
            <div className="flex justify-center mb-8">
              <a
                href={product.amazonurl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors"
              >
                Check Price on Amazon
              </a>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};