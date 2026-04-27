import { useEducation } from "../../../core/firebase/useFirestore";
import SectionHeader from "../../../shared/components/SectionHeader";

export default function EducationTimeline() {
  const { data: education, loading, error } = useEducation();

  if (loading) {
    return (
      <section className="bg-gray-950 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Academic Background" title="Education" subtitle="Where I studied and the foundations that shaped the way I think." />
          <div className="space-y-6 animate-pulse">
            {[...Array(2)].map((_, i) => <div key={i} className="h-36 bg-gray-800 rounded-xl" />)}
          </div>
        </div>
      </section>
    );
  }

  if (error || !education?.length) return null;

  return (
    <section className="bg-gray-950 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="Academic Background"
          title="Education"
          subtitle="Where I studied and the foundations that shaped the way I think."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gray-800" />

          <div className="space-y-10">
            {education.map((edu) => {
              const isOngoing = edu.isCurrentlyEnrolled || edu.endYear === null;
              return (
                <div key={edu.id} className="relative flex gap-8 sm:gap-12">

                  {/* ── Dot ───────────────────────── */}
                  <div className="relative flex-shrink-0">
                    <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center z-10 ${
                      isOngoing
                        ? "border-indigo-500 bg-indigo-500/20"
                        : "border-gray-700 bg-gray-900"
                    }`}>
                      <span className="text-sm sm:text-base">🎓</span>
                    </div>
                  </div>

                  {/* ── Card ──────────────────────── */}
                  <div className="flex-1 bg-gray-900 border border-gray-800 hover:border-indigo-500/30 rounded-xl p-6 pb-8 transition-colors duration-200 group">

                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-white font-semibold text-lg group-hover:text-indigo-400 transition-colors">
                          {edu.degree}
                        </h3>
                        {edu.fieldOfStudy && (
                          <p className="text-gray-500 text-xs mt-0.5">{edu.fieldOfStudy}</p>
                        )}
                        <div className="flex items-center gap-2 mt-1">
                          {edu.website ? (
                            <a
                              href={edu.website}
                              target="_blank"
                              rel="noreferrer"
                              className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
                            >
                              {edu.school} ↗
                            </a>
                          ) : (
                            <span className="text-indigo-400 text-sm font-medium">{edu.school}</span>
                          )}
                          {edu.location && (
                            <>
                              <span className="text-gray-600 text-xs">·</span>
                              <span className="text-gray-500 text-xs">{edu.location}</span>
                            </>
                          )}
                        </div>
                      </div>

                      <span className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${
                        isOngoing
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-gray-800 text-gray-400 border border-gray-700"
                      }`}>
                        {edu.startYear} — {isOngoing ? "Ongoing" : (edu.endYear ?? "")}
                      </span>
                    </div>

                    {edu.description && (
                      <p className="text-gray-400 text-sm leading-relaxed mb-3">{edu.description}</p>
                    )}

                    {edu.achievements?.length > 0 && (
                      <ul className="space-y-1">
                        {edu.achievements.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="text-indigo-400 mt-0.5 flex-shrink-0">▸</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
