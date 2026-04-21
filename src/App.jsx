import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/Navbar";
import HomePage from "./features/home/pages/HomePage";
import AboutPage from "./features/about/pages/AboutPage";
import NotFoundPage from "./features/notfound/pages/NotFoundPage";

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
        <Route path="/blog" element={<ComingSoon page="Blog" />} />
        <Route path="/blog/:id" element={<ComingSoon page="Blog Post" />} />
        <Route path="/testimonials" element={<ComingSoon page="Testimonials" />} />
        <Route path="/contact" element={<ComingSoon page="Contact" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;