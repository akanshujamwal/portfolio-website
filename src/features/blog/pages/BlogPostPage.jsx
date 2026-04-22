// BlogPostPage — full individual blog post page.
//
// useParams → reads the :id from the URL (e.g. /blog/1 → id = "1")
// We use Number(id) to convert "1" (string) to 1 (number) for .find()
// navigate(-1) → goes back to the previous page (like browser back button)

import { useParams, useNavigate, Link } from "react-router-dom";
import { blogsData } from "../../../data/mockData";

export default function BlogPostPage() {
  const { id }     = useParams();
  const navigate   = useNavigate();
  const post       = blogsData.find((b) => b.id === Number(id));

  // Post not found
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl mb-4">📭</p>
          <h1 className="text-white text-2xl font-bold mb-2">Post Not Found</h1>
          <p className="text-gray-400 text-sm mb-6">This post doesn't exist or was removed.</p>
          <Link to="/blog" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get other posts for "Read More" section
  const related = blogsData.filter((b) => b.id !== post.id).slice(0, 2);

  // Render markdown-like content as styled HTML
  // This is a simple renderer — when Firebase is connected, use a proper markdown library
  function renderContent(content) {
    return content.split("\n").map((line, i) => {
      if (line.startsWith("## ")) {
        return <h2 key={i} className="text-white text-2xl font-bold mt-10 mb-4">{line.replace("## ", "")}</h2>;
      }
      if (line.startsWith("```")) {
        return null; // handled below
      }
      if (line.trim() === "") {
        return <br key={i} />;
      }
      // Code blocks
      if (line.startsWith("    ") || line.startsWith("\t")) {
        return (
          <code key={i} className="block bg-gray-800 text-green-400 text-sm px-4 py-1 font-mono">
            {line.trim()}
          </code>
        );
      }
      return (
        <p key={i} className="text-gray-300 text-base leading-relaxed mb-4">
          {line}
        </p>
      );
    });
  }

  return (
    <main className="min-h-screen bg-gray-950">

      {/* ── Hero ──────────────────────────── */}
      <section className="bg-gray-950 pt-32 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium mb-8 transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Blog
          </button>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-indigo-400/10 text-indigo-400 px-3 py-1 rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex items-center gap-4 text-gray-500 text-sm pb-8 border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                Y
              </div>
              <span>Your Name</span>
            </div>
            <span>·</span>
            <span>{post.publishedAt}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── Banner Image ──────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="h-64 sm:h-80 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-2xl flex items-center justify-center border border-gray-800">
          <span className="text-7xl">📰</span>
        </div>
      </div>

      {/* ── Content ───────────────────────── */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom">
            {renderContent(post.content)}
          </div>

          {/* Share row */}
          <div className="flex items-center gap-4 mt-12 pt-8 border-t border-gray-800">
            <span className="text-gray-500 text-sm">Share this post:</span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Twitter / X
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ── Related Posts ─────────────────── */}
      {related.length > 0 && (
        <section className="border-t border-gray-800 py-16 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-white text-2xl font-bold mb-8">More Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/blog/${p.id}`}
                  className="bg-gray-950 border border-gray-800 hover:border-indigo-500/50 rounded-xl p-6 flex flex-col gap-3 transition-all duration-200 group"
                >
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-indigo-400/10 text-indigo-400 px-2 py-0.5 rounded font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{p.excerpt}</p>
                  <div className="flex justify-between text-gray-500 text-xs pt-2 border-t border-gray-800">
                    <span>{p.publishedAt}</span>
                    <span>{p.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}