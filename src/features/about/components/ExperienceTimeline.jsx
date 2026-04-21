// ExperienceTimeline — vertical timeline of work history.
// The left line + dots are purely CSS — no library needed.
// endYear === null means the person currently works there → show "Present".

import { experiencesData } from "../../../data/mockData";
import SectionHeader from "../../../shared/components/SectionHeader";

export default function ExperienceTimeline() {
  // Sort by order field ascending
  const sorted = [...experiencesData].sort((a, b) => a.order - b.order);

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
            {sorted.map((exp, i) => (
              <div key={exp.id} className="relative flex gap-8 sm:gap-12">

                {/* ── Dot ───────────────────────── */}
                <div className="relative flex-shrink-0 flex flex-col items-center">
                  <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full border-2 flex items-center justify-center z-10 ${
                    exp.endYear === null
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
                        {exp.website ? (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noreferrer"
                            className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
                          >
                            {exp.company} ↗
                          </a>
                        ) : (
                          <span className="text-indigo-400 text-sm font-medium">{exp.company}</span>
                        )}
                        <span className="text-gray-600 text-xs">·</span>
                        <span className="text-gray-500 text-xs">{exp.location}</span>
                      </div>
                    </div>

                    {/* Date badge */}
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full flex-shrink-0 ${
                      exp.endYear === null
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-gray-800 text-gray-400 border border-gray-700"
                    }`}>
                      {exp.startYear} — {exp.endYear ?? "Present"}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}