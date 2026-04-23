import { Link } from "react-router-dom";
import { useFeaturedBlogs } from "../../../core/firebase/useFirestore";
import SectionHeader from "../../../shared/components/SectionHeader";

export default function BlogPreview() {
  const { data: posts, loading } = useFeaturedBlogs();

  if (loading) {
    return (
      <section id="blog" className="bg-gray-950 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="My Writing"
            title="Latest Blog Posts"
            subtitle="Thoughts on development, architecture, and the tools I use every day."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 animate-pulse">
            {[...Array(3)].map((_, i) => <div key={i} className="h-72 bg-gray-800 rounded-xl" />)}
          </div>
        </div>
      </section>
    );
  }

  if (!posts?.length) return null;

  return (
    <section id="blog" className="bg-gray-950 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="My Writing"
          title="Latest Blog Posts"
          subtitle="Thoughts on development, architecture, and the tools I use every day."
        />

        {/* ── Blog Cards ────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/5 group"
            >
              {/* Banner */}
              {post.bannerUrl ? (
                <img src={post.bannerUrl} alt={post.title} className="h-44 w-full object-cover" />
              ) : (
                <div className="h-44 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 flex items-center justify-center">
                  <span className="text-4xl">📰</span>
                </div>
              )}

              <div className="p-6 flex flex-col gap-3 flex-1">
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{post.publishedAt}</span>
                  {post.readTime && <span>{post.readTime}</span>}
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-base leading-snug group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-800">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-indigo-400/10 text-indigo-400 px-2 py-1 rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── View All Link ─────────────────── */}
        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
          >
            View All Posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
