// FeaturedProjects — shows top 3 projects with a "View All" link.
// .slice(0, 3) takes only the first 3 items from the array.

import { Link } from "react-router-dom";
import { projectsData } from "../../../data/mockData";
import SectionHeader from "../../../shared/components/SectionHeader";

export default function FeaturedProjects() {
  const featured = projectsData.slice(0, 3);

  return (
    <section id="projects" className="bg-gray-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="What I've Built"
          title="Featured Projects"
          subtitle="A selection of projects I've worked on — personal experiments and real-world client work."
        />

        {/* ── Project Cards ─────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((project) => (
            <div
              key={project.id}
              className="bg-gray-950 border border-gray-800 hover:border-indigo-500/50 rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/5 group"
            >
              {/* Header row */}
              <div className="flex items-start justify-between">
                <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 text-xl">
                  🚀
                </div>
                {project.isCompany && (
                  <span className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-1 rounded-full font-medium">
                    Company
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.overview}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2 border-t border-gray-800">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 text-xs font-semibold transition-colors"
                  >
                    Live Demo ↗
                  </a>
                )}
                {project.sourceLink && (
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 hover:text-white text-xs font-semibold transition-colors"
                  >
                    Source Code ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── View All Link ─────────────────── */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}