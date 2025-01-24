import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Category from "./pages/Category";
import Review from "./pages/Review";
import DeskReview from "./pages/DeskReview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/review/:reviewId" element={<Review />} />
        <Route path="/desks/best-desks-under-200" element={<DeskReview />} />
        <Route path="/audio/:reviewId" element={<Review />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;