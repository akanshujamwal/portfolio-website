import { useState } from "react";
import { useSkills } from "../../../core/firebase/useFirestore";
import SectionHeader from "../../../shared/components/SectionHeader";

function SkillIcon({ skill }) {
  if (skill.iconUrl) {
    return <img src={skill.iconUrl} alt={skill.name} className="w-8 h-8 object-contain" />;
  }
  return (
    <span className="w-8 h-8 flex items-center justify-center bg-indigo-500/20 rounded-md text-indigo-300 text-xs font-bold">
      {skill.name.slice(0, 2).toUpperCase()}
    </span>
  );
}

export default function SkillsPreview() {
  const { data: skills, loading } = useSkills();
  const [activeCategory, setActiveCategory] = useState("All");

  if (loading) {
    return (
      <section id="skills" className="bg-gray-950 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What I Work With"
            title="Skills & Technologies"
            subtitle="Tools and technologies I use to build fast, scalable, and maintainable products."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-pulse">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-800 rounded-xl" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!skills?.length) return null;

  const categories = ["All", ...new Set(skills.map((s) => s.category))];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

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
              <SkillIcon skill={skill} />
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
