// SkillsPreview — displays all skills grouped by category.
// .filter() is a JavaScript array method — it keeps only items that match a condition.
// [...new Set()] removes duplicates — here used to get unique category names.

import { useState } from "react";
import { skillsData } from "../../../data/mockData";
import SectionHeader from "../../../shared/components/SectionHeader";

export default function SkillsPreview() {
  // Get unique categories from the skills list
  const categories = ["All", ...new Set(skillsData.map((s) => s.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter skills based on selected category
  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="bg-gray-950 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="What I Work With"
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to build fast, scalable, and maintainable products."
        />

        {/* ── Category Filter Tabs ──────────── */}
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
            </button>
          ))}
        </div>

        {/* ── Skills Grid ───────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-xl p-4 flex flex-col items-center gap-2 text-center transition-all duration-200 hover:bg-gray-800/80 group"
            >
              <span className="text-3xl">{skill.icon}</span>
              <span className="text-gray-300 group-hover:text-white text-xs font-medium transition-colors">
                {skill.name}
              </span>
              <span className="text-gray-600 text-xs">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}