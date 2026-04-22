import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/Navbar";
import HomePage from "./features/home/pages/HomePage";
import AboutPage from "./features/about/pages/AboutPage";
import NotFoundPage from "./features/notfound/pages/NotFoundPage";
import ContactPage from "./features/contact/pages/ContactPage";
import TestimonialsPage from "./features/testimonials/pages/TestimonialsPage";
import BlogPage from "./features/blog/pages/BlogPage";
import BlogPostPage from "./features/blog/pages/BlogPostPage";
function ComingSoon({ page }) {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="text-center">
        <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-2">Coming Soon</p>
        <h1 className="text-white text-3xl font-bold">{page} Page</h1>
        <p className="text-gray-500 text-sm mt-2">We'll build this next.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ComingSoon page="Projects" />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;