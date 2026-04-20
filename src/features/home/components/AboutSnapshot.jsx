// AboutSnapshot — a brief "who I am" section on the home page.
// Not the full About page — just enough to introduce yourself.

import { Link } from "react-router-dom";
import { aboutData, profileData } from "../data/mockData";
import SectionHeader from "../../../shared/components/SectionHeader";

export default function AboutSnapshot() {
  return (
    <section id="about" className="bg-gray-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-column layout: text left, visual right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text ────────────────────── */}
          <div>
            <span className="inline-block text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3 bg-indigo-400/10 px-3 py-1 rounded-full">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              A developer who cares about the{" "}
              <span className="text-indigo-400">details</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              {aboutData.description}
            </p>

            {/* Currently Learning */}
            {aboutData.currentLearningSkills.length > 0 && (
              <div className="mb-8">
                <p className="text-gray-500 text-sm mb-3">Currently exploring:</p>
                <div className="flex flex-wrap gap-2">
                  {aboutData.currentLearningSkills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-indigo-400/10 text-indigo-300 text-xs font-medium px-3 py-1 rounded-full border border-indigo-400/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm transition-colors duration-200"
            >
              More about me →
            </Link>
          </div>

          {/* ── Right: Stats / Visual ─────────── */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "10+", label: "Projects Built" },
              { number: "3+", label: "Years of Coding" },
              { number: "5+", label: "Happy Clients" },
              { number: "4+", label: "Certifications" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-colors duration-200"
              >
                <p className="text-3xl font-bold text-indigo-400 mb-1">{stat.number}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}