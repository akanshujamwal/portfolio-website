import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./shared/components/Navbar";
import ErrorBoundary from "./shared/components/ErrorBoundary";

const HomePage          = lazy(() => import("./features/home/pages/HomePage"));
const AboutPage         = lazy(() => import("./features/about/pages/AboutPage"));
const ProjectsPage      = lazy(() => import("./features/projects/pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("./features/projects/pages/ProjectDetailPage"));
const BlogPage          = lazy(() => import("./features/blog/pages/BlogPage"));
const BlogPostPage      = lazy(() => import("./features/blog/pages/BlogPostPage"));
const TestimonialsPage  = lazy(() => import("./features/testimonial/pages/TestimonialsPage"));
const ContactPage       = lazy(() => import("./features/contact/pages/ContactPage"));
const NotFoundPage      = lazy(() => import("./features/notfound/pages/NotFoundPage"));
const PrivacyPolicyPage = lazy(() => import("./features/legal/pages/PrivacyPolicyPage"));
const TermsOfServicePage = lazy(() => import("./features/legal/pages/TermsOfServicePage"));

function PageLoader() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"             element={<HomePage />}          />
            <Route path="/about"        element={<AboutPage />}         />
            <Route path="/projects"     element={<ProjectsPage />}      />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/blog"         element={<BlogPage />}          />
            <Route path="/blog/:id"     element={<BlogPostPage />}      />
            <Route path="/testimonials" element={<TestimonialsPage />}  />
            <Route path="/contact"      element={<ContactPage />}       />
            <Route path="/privacy"      element={<PrivacyPolicyPage />} />
            <Route path="/terms"        element={<TermsOfServicePage />}/>
            <Route path="*"             element={<NotFoundPage />}      />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
