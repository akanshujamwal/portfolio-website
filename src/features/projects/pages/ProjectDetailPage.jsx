// ProjectDetailPage — full individual project page.
// useParams reads the :id from the URL → /projects/1 → id = "1"
// Number(id) converts string to number for .find()

import { useParams, useNavigate, Link } from "react-router-dom";
import { projectsData } from "../../../data/mockData";

const statusColors = {
  "Completed":   "bg-green-500/10 text-green-400 border border-green-500/20",
  "In Progress": "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
};

export default function ProjectDetailPage() {
  const { id }   = useParams();
  const navigate = useNavigate();
  const project  = projectsData.find((p) => p.id === Number(id));

  // Not found
  if (!project) {
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

  // Other projects for "More Projects" section
  const more = projectsData.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-950">

      {/* ── Hero ──────────────────────────── */}
      <section className="bg-gray-950 pt-32 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium mb-8 transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Projects
          </button>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusColors[project.status]}`}>
              {project.status}
            </span>
            {project.isCompany && (
              <span className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full font-medium">
                Company Project
              </span>
            )}
            <span className="text-xs bg-gray-800 text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-xs bg-gray-800 text-gray-500 border border-gray-700 px-3 py-1 rounded-full">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h1>

          {/* Overview */}
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {project.overview}
          </p>

          {/* CTA Links */}
          <div className="flex flex-wrap gap-4 pb-10 border-b border-gray-800">
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2"
              >
                🌐 Live Demo
              </a>
            )}
            {project.sourceLink && (
              <a
                href={project.sourceLink}
                target="_blank"
                rel="noreferrer"
                className="border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                📦 Source Code
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── Main Content ──────────────────── */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* ── Left: Description ─────────── */}
            <div className="lg:col-span-2">

              {/* Image placeholder */}
              <div className="h-64 sm:h-80 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-2xl border border-gray-800 flex items-center justify-center mb-10">
                <span className="text-7xl">🚀</span>
              </div>

              <h2 className="text-white text-2xl font-bold mb-6">About this project</h2>

              {/* Description paragraphs */}
              <div className="space-y-4">
                {project.description.split("\n\n").map((para, i) => (
                  <p key={i} className="text-gray-400 text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* ── Right: Sidebar ────────────── */}
            <div className="flex flex-col gap-6">

              {/* Tech Stack */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Tech Stack
                </h3>
                <div className="flex flex-col gap-2">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-3 bg-gray-800 rounded-lg px-3 py-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Project Info
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Type", value: project.isCompany ? "Company" : "Personal" },
                    { label: "Category", value: project.category },
                    { label: "Year", value: project.year },
                    { label: "Status", value: project.status },
                  ].map((info) => (
                    <div key={info.label} className="flex justify-between items-center">
                      <span className="text-gray-500 text-xs">{info.label}</span>
                      <span className="text-gray-300 text-xs font-medium">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Links
                </h3>
                <div className="flex flex-col gap-2">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-indigo-500/40 rounded-lg px-4 py-3 transition-all group"
                    >
                      <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">
                        🌐 Live Demo
                      </span>
                      <span className="text-gray-600 group-hover:text-indigo-400 transition-colors">↗</span>
                    </a>
                  )}
                  {project.sourceLink && (
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-indigo-500/40 rounded-lg px-4 py-3 transition-all group"
                    >
                      <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">
                        📦 Source Code
                      </span>
                      <span className="text-gray-600 group-hover:text-indigo-400 transition-colors">↗</span>
                    </a>
                  )}
                  {!project.sourceLink && (
                    <p className="text-gray-600 text-xs text-center py-2">Source code not available</p>
                  )}
                </div>
              </div>
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
                  <h3 className="text-white font-semibold group-hover:text-indigo-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{p.overview}</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-800">
                    {p.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">
                        {tech}
                      </span>
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