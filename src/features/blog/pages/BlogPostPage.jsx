import { useParams, useNavigate, Link } from "react-router-dom";
import { useBlogById, useBlogs } from "../../../core/firebase/useFirestore";

function renderSection(section) {
  switch (section.type) {
    case "heading":
      return section.headingLevel === 3
        ? <h3 key={section.id} className="text-white text-xl font-bold mt-8 mb-3">{section.heading}</h3>
        : <h2 key={section.id} className="text-white text-2xl font-bold mt-10 mb-4">{section.heading}</h2>;

    case "text":
      return <p key={section.id} className="text-gray-300 text-base leading-relaxed mb-4">{section.text}</p>;

    case "quote":
      return (
        <blockquote key={section.id} className="border-l-4 border-indigo-500 pl-6 my-6">
          <p className="text-gray-200 text-lg italic leading-relaxed">"{section.text}"</p>
          {section.quoteAuthor && (
            <p className="text-gray-500 text-sm mt-2">— {section.quoteAuthor}</p>
          )}
        </blockquote>
      );

    case "bullet_list":
      return (
        <ul key={section.id} className="space-y-2 mb-6 ml-4">
          {(section.items ?? []).map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300 text-base">
              <span className="text-indigo-400 mt-1 flex-shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      );

    case "numbered_list":
      return (
        <ol key={section.id} className="space-y-2 mb-6 ml-4">
          {(section.items ?? []).map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300 text-base">
              <span className="text-indigo-400 font-bold flex-shrink-0 w-5">{i + 1}.</span>
              {item}
            </li>
          ))}
        </ol>
      );

    case "banner":
    case "image":
      return section.imageUrl ? (
        <figure key={section.id} className="my-8">
          <img src={section.imageUrl} alt={section.caption ?? ""} className="w-full rounded-2xl border border-gray-800 object-cover" />
          {section.caption && <figcaption className="text-gray-500 text-sm text-center mt-2">{section.caption}</figcaption>}
        </figure>
      ) : null;

    case "code":
      return (
        <pre key={section.id} className="bg-gray-800 rounded-xl p-5 overflow-x-auto my-6 border border-gray-700">
          <code className={`text-green-400 text-sm font-mono language-${section.language ?? "text"}`}>
            {section.code}
          </code>
        </pre>
      );

    default:
      if (section.text) {
        return <p key={section.id} className="text-gray-300 text-base leading-relaxed mb-4">{section.text}</p>;
      }
      return null;
  }
}

export default function BlogPostPage() {
  const { id }   = useParams();
  const navigate = useNavigate();
  const { data: post, loading, error } = useBlogById(id);
  const { data: allBlogs } = useBlogs();

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-950 pt-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse space-y-6">
          <div className="h-4 w-20 bg-gray-800 rounded-full" />
          <div className="h-12 w-full bg-gray-800 rounded-xl" />
          <div className="h-64 bg-gray-800 rounded-2xl" />
          <div className="space-y-3">
            {[...Array(6)].map((_, i) => <div key={i} className="h-4 bg-gray-800 rounded" />)}
          </div>
        </div>
      </main>
    );
  }

  if (error || !post) {
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

  const related = (allBlogs ?? []).filter((b) => b.id !== post.id).slice(0, 2);

  return (
    <main className="min-h-screen bg-gray-950">

      {/* ── Hero ──────────────────────────── */}
      <section className="bg-gray-950 pt-32 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

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

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-gray-500 text-sm pb-8 border-b border-gray-800">
            <span>{post.publishedAt}</span>
            {post.readTime && (
              <>
                <span>·</span>
                <span>{post.readTime}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ── Banner Image ──────────────────── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {post.bannerUrl ? (
          <img src={post.bannerUrl} alt={post.title} className="w-full h-64 sm:h-80 object-cover rounded-2xl border border-gray-800" />
        ) : (
          <div className="h-64 sm:h-80 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-2xl flex items-center justify-center border border-gray-800">
            <span className="text-7xl">📰</span>
          </div>
        )}
      </div>

      {/* ── Content ───────────────────────── */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom">
            {post.sections.map((section) => renderSection(section))}
          </div>

          {/* Excerpt as fallback if no sections */}
          {post.sections.length === 0 && post.excerpt && (
            <p className="text-gray-300 text-base leading-relaxed">{post.excerpt}</p>
          )}

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
                      <span key={tag} className="text-xs bg-indigo-400/10 text-indigo-400 px-2 py-0.5 rounded font-medium">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-indigo-400 transition-colors line-clamp-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{p.excerpt}</p>
                  <div className="flex justify-between text-gray-500 text-xs pt-2 border-t border-gray-800">
                    <span>{p.publishedAt}</span>
                    {p.readTime && <span>{p.readTime}</span>}
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
