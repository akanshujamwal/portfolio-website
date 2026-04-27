import { useParams, useNavigate, Link } from "react-router-dom";
import { useProjectById, useProjects } from "../../../core/firebase/useFirestore";

const statusColors = {
  Completed:      "bg-green-500/10 text-green-400 border border-green-500/20",
  "In Progress":  "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
  Ongoing:        "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  Paused:         "bg-gray-500/10 text-gray-400 border border-gray-500/20",
};

export default function ProjectDetailPage() {
  const { id }     = useParams();
  const navigate   = useNavigate();
  const { data: project, loading, error } = useProjectById(id);
  const { data: allProjects } = useProjects();

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-950 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse space-y-6">
          <div className="h-4 w-24 bg-gray-800 rounded-full" />
          <div className="h-12 w-3/4 bg-gray-800 rounded-xl" />
          <div className="h-20 bg-gray-800 rounded-xl" />
          <div className="h-64 bg-gray-800 rounded-2xl" />
        </div>
      </main>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-5xl mb-4">🚫</p>
          <h1 className="text-white text-2xl font-bold mb-2">Project Not Found</h1>
          <p className="text-gray-400 text-sm mb-6">This project doesn't exist or was removed.</p>
          <Link to="/projects" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const more      = (allProjects ?? []).filter((p) => p.id !== project.id).slice(0, 3);
  const dateLabel = project.endDate || project.startDate;
  const firstImage = project.images?.[0] ?? null;

  return (
    <main className="min-h-screen bg-gray-950">

      {/* ── Hero ──────────────────────────── */}
      <section className="bg-gray-950 pt-32 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium mb-8 transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Projects
          </button>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[project.statusLabel] ?? "bg-gray-800 text-gray-400 border border-gray-700"}`}>
              {project.statusLabel}
            </span>
            {project.isCompany && (
              <span className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full font-medium">
                Company Project
              </span>
            )}
            {project.category && (
              <span className="text-xs bg-gray-800 text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
                {project.category}
              </span>
            )}
            {dateLabel && (
              <span className="text-xs bg-gray-800 text-gray-500 border border-gray-700 px-3 py-1 rounded-full">
                {dateLabel}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">{project.overview}</p>

          <div className="pb-10 border-b border-gray-800" />
        </div>
      </section>

      {/* ── Main Content ──────────────────── */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Left: Description ─────────── */}
            <div className="lg:col-span-2">
              {firstImage ? (
                <img src={firstImage} alt={project.title} className="w-full h-64 sm:h-80 object-cover rounded-2xl border border-gray-800 mb-10" />
              ) : (
                <div className="h-64 sm:h-80 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl border border-gray-800 flex items-center justify-center mb-10">
                  <span className="text-7xl">🚀</span>
                </div>
              )}

              <h2 className="text-white text-2xl font-bold mb-6">About this project</h2>
              <div className="space-y-4">
                {(project.description || "").split("\n\n").filter(Boolean).map((para, i) => (
                  <p key={i} className="text-gray-400 text-base leading-relaxed">{para}</p>
                ))}
              </div>

              {project.challenges && (
                <div className="mt-8">
                  <h3 className="text-white text-lg font-semibold mb-3">Challenges</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.challenges}</p>
                </div>
              )}
              {project.solution && (
                <div className="mt-6">
                  <h3 className="text-white text-lg font-semibold mb-3">Solution</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>

            {/* ── Right: Sidebar ────────────── */}
            <div className="flex flex-col gap-6">

              {/* Tech Stack */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Tech Stack</h3>
                <div className="flex flex-col gap-2">
                  {project.technologies.map((tech) => (
                    <div key={tech} className="flex items-center gap-3 bg-gray-800 rounded-lg px-3 py-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Project Info</h3>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Type",     value: project.isCompany ? "Company" : "Personal" },
                    { label: "Company",  value: project.companyName || null },
                    { label: "Category", value: project.category   },
                    { label: "Date",     value: dateLabel           },
                    { label: "Status",   value: project.statusLabel },
                  ].filter((i) => i.value).map((info) => (
                    <div key={info.label} className="flex justify-between items-center">
                      <span className="text-gray-500 text-xs">{info.label}</span>
                      <span className="text-gray-300 text-xs font-medium">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              {project.images?.length > 1 && (
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Gallery</h3>
                  <div className="flex flex-col gap-2">
                    {project.images.slice(1).map((img, i) => (
                      <img key={i} src={img} alt={`${project.title} ${i + 2}`} className="rounded-lg w-full object-cover" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── More Projects ─────────────────── */}
      {more.length > 0 && (
        <section className="border-t border-gray-800 py-16 bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-white text-2xl font-bold">More Projects</h2>
              <Link to="/projects" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {more.map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.id}`}
                  className="bg-gray-950 border border-gray-800 hover:border-indigo-500/50 rounded-xl p-6 flex flex-col gap-3 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-xl">🚀</div>
                  <h3 className="text-white font-semibold group-hover:text-indigo-400 transition-colors">{p.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{p.overview}</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-800">
                    {p.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">{tech}</span>
                    ))}
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
