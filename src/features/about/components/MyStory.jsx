// MyStory — long bio split into paragraphs + fun facts grid.
// .split('\n\n') splits the story string on double newlines into separate paragraphs.

import { aboutData } from "../../../data/mockData";
import SectionHeader from "../../../shared/components/SectionHeader";

export default function MyStory() {
  const paragraphs = aboutData.story.split("\n\n");

  return (
    <section className="bg-gray-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ── Story text ────────────────────── */}
          <div>
            <span className="inline-block text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3 bg-indigo-400/10 px-3 py-1 rounded-full">
              My Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              How I got here
            </h2>

            <div className="space-y-5">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-gray-400 text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* ── Fun Facts ─────────────────────── */}
          <div>
            <span className="inline-block text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3 bg-indigo-400/10 px-3 py-1 rounded-full">
              Fun Facts
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              Beyond the code
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutData.funFacts.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-800 border border-gray-700 hover:border-indigo-500/40 rounded-xl p-4 flex items-start gap-3 transition-colors duration-200"
                >
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}