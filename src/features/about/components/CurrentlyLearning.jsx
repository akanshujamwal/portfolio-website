// CurrentlyLearning — shows what the developer is actively exploring.
// Also includes a CV download CTA at the bottom.

import { aboutData, profileData } from "../../home/data/mockData";

export default function CurrentlyLearning() {
  return (
    <section className="bg-gray-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* ── Currently Learning ────────────── */}
          <div>
            <span className="inline-block text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3 bg-indigo-400/10 px-3 py-1 rounded-full">
              What's Next
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Currently Learning
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              I believe growth never stops. Here's what I'm actively exploring and adding to my toolkit right now.
            </p>

            <div className="flex flex-col gap-4">
              {aboutData.currentLearningSkills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-gray-950 border border-gray-800 rounded-xl p-4 flex items-center gap-4 group hover:border-indigo-500/40 transition-colors duration-200"
                >
                  {/* Progress indicator */}
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold">{skill}</p>
                    <p className="text-gray-500 text-xs mt-0.5">In progress</p>
                  </div>
                  {/* Animated dot */}
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* ── CV Download CTA ───────────────── */}
          <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-8 sm:p-10 text-center">
            <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
              📄
            </div>
            <h3 className="text-white text-2xl font-bold mb-3">
              Want the full picture?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              My CV has the complete breakdown — every project, role, certification, and skill in one document.
            </p>
            <a
              href={profileData.cvUrl}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              ↓ Download CV
            </a>
            {profileData.meetingLink && (
              <p className="text-gray-600 text-xs mt-4">
                or{" "}
                <a
                  href={profileData.meetingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  book a 30-min call
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}