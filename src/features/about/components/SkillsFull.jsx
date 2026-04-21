// SkillsFull — full skills list with category filter tabs.
// Same logic as SkillsPreview on the home page but with more breathing room.
// Reusing the same skillsData from mockData — single source of truth.

import { useState } from "react";
import { skillsData } from "../../../data/mockData";
import SectionHeader from "../../../shared/components/SectionHeader";

export default function SkillsFull() {
  const categories = ["All", ...new Set(skillsData.map((s) => s.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section className="bg-gray-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="Tech Stack"
          title="Skills & Technologies"
          subtitle="Every tool I reach for when building real products."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              {cat}
              <span className="ml-1.5 text-xs opacity-60">
                ({cat === "All" ? skillsData.length : skillsData.filter((s) => s.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-950 border border-gray-800 hover:border-indigo-500/50 rounded-xl p-5 flex flex-col items-center gap-3 text-center transition-all duration-200 hover:bg-gray-800/60 group"
            >
              <span className="text-4xl">{skill.icon}</span>
              <span className="text-gray-300 group-hover:text-white text-xs font-medium transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}