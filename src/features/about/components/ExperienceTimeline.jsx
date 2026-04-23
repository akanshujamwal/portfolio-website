import { useExperiences } from "../../../core/firebase/useFirestore";
import SectionHeader from "../../../shared/components/SectionHeader";

export default function ExperienceTimeline() {
  const { data: experiences, loading } = useExperiences();

  if (loading) {
    return (
      <section className="bg-gray-900 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Work History" title="Experience" subtitle="Companies and clients I've worked with, and what I built there." />
          <div className="space-y-6 animate-pulse">
            {[...Array(3)].map((_, i) => <div key={i} className="h-40 bg-gray-800 rounded-xl" />)}
          </div>
        </div>
      </section>
    );
  }

  if (!experiences?.length) return null;

  return (
    <section className="bg-gray-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="Work History"
          title="Experience"
          subtitle="Companies and clients I've worked with, and what I built there."
        />

        {/* ── Timeline ──────────────────────── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gray-800" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex gap-8 sm:gap-12">

                {/* ── Dot ───────────────────────── */}
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center z-10 ${
                    exp.currentlyWorking
                      ? "border-indigo-500 bg-indigo-500/20"
                      : "border-gray-700 bg-gray-900"
                  }`}>
                    <span className="text-sm sm:text-base">💼</span>
                  </div>
                </div>

                {/* ── Card ──────────────────────── */}
                <div className="flex-1 bg-gray-950 border border-gray-800 hover:border-indigo-500/30 rounded-xl p-6 pb-8 transition-colors duration-200 group">

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg group-hover:text-indigo-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-indigo-400 text-sm font-medium">{exp.company}</span>
                        {exp.location && (
                          <>
                            <span className="text-gray-600 text-xs">·</span>
                            <span className="text-gray-500 text-xs">{exp.location}</span>
                          </>
                        )}
                        {exp.employmentLabel && (
                          <>
                            <span className="text-gray-600 text-xs">·</span>
                            <span className="text-gray-500 text-xs">{exp.employmentLabel}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Date badge */}
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${
                      exp.currentlyWorking
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-gray-800 text-gray-400 border border-gray-700"
                    }`}>
                      {exp.startDate} — {exp.currentlyWorking ? "Present" : exp.endDate}
                    </span>
                  </div>

                  {/* Description */}
                  {exp.description && (
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                  )}

                  {/* Achievements */}
                  {exp.achievements?.length > 0 && (
                    <ul className="space-y-1 mb-4">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies */}
                  {exp.technologies?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
