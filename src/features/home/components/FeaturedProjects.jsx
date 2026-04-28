import { Link } from "react-router-dom";
import { useFeaturedProjects } from "../../../core/firebase/useFirestore";
import SectionHeader from "../../../shared/components/SectionHeader";
import { statusColors } from "../../projects/constants/projectColors";

export default function FeaturedProjects() {
  const { data: projects, loading, error } = useFeaturedProjects();

  if (!loading && (error || !projects?.length)) return null;

  return (
    <section id="projects" className="bg-gray-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="What I've Built"
          title="Featured Projects"
          subtitle="A selection of projects I've worked on — personal experiments and real-world client work."
        />

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 animate-pulse">
            {[...Array(3)].map((_, i) => <div key={i} className="h-64 bg-gray-800 rounded-xl" />)}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="bg-gray-950 border border-gray-800 hover:border-indigo-500/50 rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/5 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 text-xl">
                      🚀
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${statusColors[project.statusLabel] ?? "bg-gray-800 text-gray-400 border-gray-700"}`}>
                        {project.statusLabel}
                      </span>
                      {project.isCompany && (
                        <span className="text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-1 rounded-full font-medium">
                          Company
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {project.overview}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs bg-gray-800 text-gray-500 px-2 py-1 rounded font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-800">
                    <span className="text-gray-600 text-xs">
                      {project.endDate || project.startDate}
                    </span>
                    <span className="text-indigo-400 text-xs font-semibold group-hover:translate-x-1 transition-transform">
                      View Project →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
              >
                View All Projects →
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
