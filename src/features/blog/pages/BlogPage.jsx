// BlogPage — lists all blog posts with grid/list view toggle + tag filter + search.
//
// useState tracks:
//   view        → "grid" or "list" — controls layout
//   activeTag   → which tag filter is selected
//   search      → search input value
//
// Filtering logic:
//   1. Filter by tag if a tag is selected
//   2. Filter by search query against title + excerpt
//   Both filters work together simultaneously

import { useState } from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../../../data/mockData";

// Get all unique tags from blogs data
const allTags = ["All", ...new Set(blogsData.flatMap((b) => b.tags))];

// ── Grid Card ─────────────────────────────────────────────────
function GridCard({ post }) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/5 group"
    >
      {/* Banner */}
      <div className="h-48 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 flex items-center justify-center relative overflow-hidden">
        <span className="text-5xl">📰</span>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-indigo-400/10 text-indigo-400 px-2 py-0.5 rounded font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-base leading-snug group-hover:text-indigo-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-800 mt-auto">
          <span className="text-gray-500 text-xs">{post.publishedAt}</span>
          <span className="text-gray-500 text-xs">{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

// ── List Row ──────────────────────────────────────────────────
function ListRow({ post }) {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-xl p-6 flex gap-6 items-start transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/5 group"
    >
      {/* Left: Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
        📰
      </div>

      {/* Right: Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap gap-2 mb-2">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-indigo-400/10 text-indigo-400 px-2 py-0.5 rounded font-medium">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-white font-semibold text-lg leading-snug group-hover:text-indigo-400 transition-colors mb-2">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
      </div>

      {/* Far right: Meta */}
      <div className="flex-shrink-0 text-right hidden sm:block">
        <p className="text-gray-500 text-xs mb-1">{post.publishedAt}</p>
        <p className="text-gray-500 text-xs">{post.readTime}</p>
        <p className="text-indigo-400 text-xs font-medium mt-3 group-hover:translate-x-1 transition-transform">
          Read →
        </p>
      </div>
    </Link>
  );
}

// ── Main Page ─────────────────────────────────────────────────
export default function BlogPage() {
  const [view, setView]           = useState("grid"); // "grid" | "list"
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch]       = useState("");

  // Apply both tag and search filters
  const filtered = blogsData.filter((post) => {
    const matchesTag    = activeTag === "All" || post.tags.includes(activeTag);
    const matchesSearch = search === "" ||
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-950">

      {/* ── Page Header ───────────────────── */}
      <section className="bg-gray-950 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4 bg-indigo-400/10 px-3 py-1 rounded-full">
            My Writing
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Blog
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Thoughts on development, architecture, tools, and lessons learned building real products.
          </p>
        </div>
      </section>

      {/* ── Filters + Toggle Bar ──────────── */}
      <section className="border-y border-gray-800 bg-gray-900 py-4 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

            {/* Search */}
            <div className="relative flex-1 w-full sm:max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">🔍</span>
              <input
                type="text"
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 focus:border-indigo-500 rounded-lg pl-9 pr-4 py-2 text-white text-sm placeholder-gray-500 outline-none transition-colors"
              />
            </div>

            {/* Tag filters */}
            <div className="flex items-center gap-2 flex-wrap flex-1">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
                    activeTag === tag
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Grid / List toggle */}
            <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg p-1 flex-shrink-0">
              {/* Grid icon */}
              <button
                onClick={() => setView("grid")}
                title="Grid view"
                className={`p-2 rounded-md transition-all duration-200 ${
                  view === "grid" ? "bg-indigo-600 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                  <rect x="1" y="1" width="6" height="6" rx="1"/>
                  <rect x="9" y="1" width="6" height="6" rx="1"/>
                  <rect x="1" y="9" width="6" height="6" rx="1"/>
                  <rect x="9" y="9" width="6" height="6" rx="1"/>
                </svg>
              </button>
              {/* List icon */}
              <button
                onClick={() => setView("list")}
                title="List view"
                className={`p-2 rounded-md transition-all duration-200 ${
                  view === "list" ? "bg-indigo-600 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Posts ─────────────────────────── */}
      <section className="py-12 pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Result count */}
          <p className="text-gray-500 text-sm mb-6">
            {filtered.length} {filtered.length === 1 ? "post" : "posts"} found
          </p>

          {filtered.length === 0 ? (
            // Empty state
            <div className="text-center py-24">
              <p className="text-5xl mb-4">🔍</p>
              <h3 className="text-white text-xl font-semibold mb-2">No posts found</h3>
              <p className="text-gray-500 text-sm">Try a different tag or search term.</p>
              <button
                onClick={() => { setSearch(""); setActiveTag("All"); }}
                className="mt-4 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : view === "grid" ? (
            // Grid layout
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post) => <GridCard key={post.id} post={post} />)}
            </div>
          ) : (
            // List layout
            <div className="flex flex-col gap-4">
              {filtered.map((post) => <ListRow key={post.id} post={post} />)}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}