import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useProjects } from "../../../core/firebase/useFirestore";
import { statusColors } from "../constants/projectColors";

function GridCard({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 group"
    >
      <div className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600" />
      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-xl flex-shrink-0">
            🚀
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${statusColors[project.statusLabel] ?? "bg-gray-800 text-gray-400 border-gray-700"}`}>
              {project.statusLabel}
            </span>
            {project.isCompany && (
              <span className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded-full font-medium">
                Company
              </span>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.overview}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded font-medium">{tech}</span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs bg-gray-800 text-gray-500 px-2 py-1 rounded font-medium">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex gap-4 pt-3 border-t border-gray-800 items-center">
          <span className="text-gray-600 text-xs">{project.endDate || project.startDate}</span>
          <span className="ml-auto text-indigo-400 text-xs font-semibold group-hover:translate-x-1 transition-transform">
            View Project →
          </span>
        </div>
      </div>
    </Link>
  );
}

function ListRow({ project }) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-xl p-6 flex gap-6 items-start transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/5 group"
    >
      <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
        🚀
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="text-white font-semibold text-lg group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${statusColors[project.statusLabel] ?? "bg-gray-800 text-gray-400 border-gray-700"}`}>
            {project.statusLabel}
          </span>
          {project.isCompany && (
            <span className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded-full font-medium">
              Company
            </span>
          )}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-3">{project.overview}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded font-medium">{tech}</span>
          ))}
        </div>
      </div>

      <div className="flex-shrink-0 text-right hidden sm:flex flex-col items-end gap-2">
        <span className="text-gray-500 text-xs">{project.endDate || project.startDate}</span>
        <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">{project.category}</span>
        <span className="text-indigo-400 text-xs font-semibold mt-2 group-hover:translate-x-1 transition-transform">
          View Project →
        </span>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  const { data: projects, loading, error } = useProjects();
  const [view,     setView]     = useState("grid");
  const [type,     setType]     = useState("All");
  const [category, setCategory] = useState("All");
  const [search,   setSearch]   = useState("");

  const categories = useMemo(
    () => ["All", ...new Set((projects ?? []).map((p) => p.category))],
    [projects]
  );

  const filtered = useMemo(() => {
    return (projects ?? []).filter((p) => {
      const matchesType     = type === "All" || (type === "Personal" ? !p.isCompany : p.isCompany);
      const matchesCategory = category === "All" || p.category === category;
      const matchesSearch   = search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchesType && matchesCategory && matchesSearch;
    });
  }, [projects, type, category, search]);

  const totalPersonal = (projects ?? []).filter((p) => !p.isCompany).length;
  const totalCompany  = (projects ?? []).filter((p) =>  p.isCompany).length;
  const totalDone     = (projects ?? []).filter((p) =>  p.statusLabel === "Completed").length;

  return (
    <main className="min-h-screen bg-gray-950">

      {/* ── Page Header ───────────────────── */}
      <section className="bg-gray-950 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4 bg-indigo-400/10 px-3 py-1 rounded-full">
            My Work
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            A collection of personal experiments, freelance work, and company projects — each one a lesson in building better software.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────── */}
      <section className="border-y border-gray-800 bg-gray-900 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-4 text-center">
            {[
              { number: (loading || error) ? "—" : (projects?.length ?? 0), label: "Total Projects" },
              { number: (loading || error) ? "—" : totalPersonal,           label: "Personal"       },
              { number: (loading || error) ? "—" : totalCompany,            label: "Company"        },
              { number: (loading || error) ? "—" : totalDone,               label: "Completed"      },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-xl sm:text-2xl font-bold text-indigo-400">{s.number}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filters Bar ───────────────────── */}
      <section className="border-b border-gray-800 bg-gray-900 py-4 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              {/* Type tabs */}
              <div className="flex bg-gray-800 border border-gray-700 rounded-lg p-1 gap-1">
                {["All", "Personal", "Company"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    className={`text-xs font-semibold px-4 py-1.5 rounded-md transition-all duration-200 ${
                      type === t ? "bg-indigo-600 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative flex-1 min-w-[200px] max-w-xs">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">🔍</span>
                <input
                  type="text"
                  placeholder="Search projects or tech..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 focus:border-indigo-500 rounded-lg pl-9 pr-4 py-2 text-white text-sm placeholder-gray-500 outline-none transition-colors"
                />
              </div>

              <div className="flex-1" />

              {/* View toggle */}
              <div className="flex items-center bg-gray-800 border border-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setView("grid")}
                  className={`p-2 rounded-md transition-all duration-200 ${view === "grid" ? "bg-indigo-600 text-white" : "text-gray-400 hover:text-white"}`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <rect x="1" y="1" width="6" height="6" rx="1"/>
                    <rect x="9" y="1" width="6" height="6" rx="1"/>
                    <rect x="1" y="9" width="6" height="6" rx="1"/>
                    <rect x="9" y="9" width="6" height="6" rx="1"/>
                  </svg>
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 rounded-md transition-all duration-200 ${view === "list" ? "bg-indigo-600 text-white" : "text-gray-400 hover:text-white"}`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 ${
                    category === cat
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-transparent text-gray-400 border-gray-700 hover:text-white hover:border-gray-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects ──────────────────────── */}
      <section className="py-12 pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-500 text-sm">
              {loading ? "Loading…" : `${filtered.length} ${filtered.length === 1 ? "project" : "projects"} found`}
            </p>
            {(search || type !== "All" || category !== "All") && (
              <button
                onClick={() => { setSearch(""); setType("All"); setCategory("All"); }}
                className="text-indigo-400 hover:text-indigo-300 text-xs font-medium transition-colors"
              >
                Clear filters ✕
              </button>
            )}
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
              {[...Array(6)].map((_, i) => <div key={i} className="h-64 bg-gray-800 rounded-xl" />)}
            </div>
          ) : error ? (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">⚠️</p>
              <h3 className="text-white text-xl font-semibold mb-2">Failed to load projects</h3>
              <p className="text-gray-500 text-sm mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
              >
                Try again
              </button>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">🔍</p>
              <h3 className="text-white text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-500 text-sm">Try a different filter or search term.</p>
              <button
                onClick={() => { setSearch(""); setType("All"); setCategory("All"); }}
                className="mt-4 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : view === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => <GridCard key={p.id} project={p} />)}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {filtered.map((p) => <ListRow key={p.id} project={p} />)}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
