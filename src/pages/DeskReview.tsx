import { Header } from "@/components/Header";
import { Link } from "react-router-dom";

const DeskReview = () => {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="text-secondary hover:underline mb-4 inline-block">
              ← Back to Reviews
            </Link>
            <span className="text-secondary uppercase tracking-wider block mb-2">
              Desks
            </span>
            <h1 className="text-4xl font-bold text-primary mb-4">
              Best Desks Under $200 for Home Office (2024)
            </h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <span>Updated March 20, 2024</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-4">Quick Take</h2>
              <p className="text-gray-700">
                After testing dozens of affordable desks, we've found that you don't need to spend a fortune to get a quality workspace. Our top picks combine durability, style, and functionality while staying under $200.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Best Overall: Flexispot EC1 Standing Desk</h2>
              <img
                src="https://m.media-amazon.com/images/I/71cFRwJqMtL._AC_SL1500_.jpg"
                alt="Flexispot EC1 Standing Desk"
                className="w-full rounded-lg mb-4"
              />
              <p className="mb-4">
                The Flexispot EC1 proves that you don't need to spend a fortune to get a quality standing desk. At just under $200, it offers electric height adjustment, a sturdy steel frame, and a spacious 48x24 inch desktop.
              </p>
              <div className="flex justify-center mb-8">
                <a
                  href="https://www.amazon.com/dp/B0BN6FRYW9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors"
                >
                  Check Price on Amazon
                </a>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Best for Small Spaces: CubiCubi Computer Desk</h2>
              <img
                src="https://m.media-amazon.com/images/I/71ShBw4E6GL._AC_SL1500_.jpg"
                alt="CubiCubi Computer Desk"
                className="w-full rounded-lg mb-4"
              />
              <p className="mb-4">
                Perfect for tight spaces, the CubiCubi desk combines industrial style with practical storage solutions. The 40-inch width fits perfectly in small apartments while still providing ample workspace.
              </p>
              <div className="flex justify-center mb-8">
                <a
                  href="https://www.amazon.com/dp/B08CVKQ7PC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors"
                >
                  Check Price on Amazon
                </a>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Best Modern Design: Tribesigns Computer Desk</h2>
              <img
                src="https://m.media-amazon.com/images/I/71WR3AzFDfL._AC_SL1500_.jpg"
                alt="Tribesigns Computer Desk"
                className="w-full rounded-lg mb-4"
              />
              <p className="mb-4">
                The Tribesigns desk offers a sleek, minimalist design that looks more expensive than its price tag suggests. The white finish and gold accents add a touch of luxury to any home office.
              </p>
              <div className="flex justify-center mb-8">
                <a
                  href="https://www.amazon.com/dp/B07QFZGYSS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-accent transition-colors"
                >
                  Check Price on Amazon
                </a>
              </div>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
};

export default DeskReview;