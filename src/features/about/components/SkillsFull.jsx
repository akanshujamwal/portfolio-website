import { useState } from "react";
import { useSkills } from "../../../core/firebase/useFirestore";
import SectionHeader from "../../../shared/components/SectionHeader";

function SkillIcon({ skill }) {
  if (skill.iconUrl) {
    return <img src={skill.iconUrl} alt={skill.name} className="w-10 h-10 object-contain" />;
  }
  return (
    <span className="w-10 h-10 flex items-center justify-center bg-indigo-500/20 rounded-lg text-indigo-300 text-sm font-bold">
      {skill.name.slice(0, 2).toUpperCase()}
    </span>
  );
}

export default function SkillsFull() {
  const { data: skills, loading } = useSkills();
  const [activeCategory, setActiveCategory] = useState("All");

  if (loading) {
    return (
      <section className="bg-gray-900 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Tech Stack" title="Skills & Technologies" subtitle="Every tool I reach for when building real products." />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-pulse">
            {[...Array(12)].map((_, i) => <div key={i} className="h-28 bg-gray-800 rounded-xl" />)}
          </div>
        </div>
      </section>
    );
  }

  if (!skills?.length) return null;

  const categories = ["All", ...new Set(skills.map((s) => s.category))];

  const filtered =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

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
                ({cat === "All" ? skills.length : skills.filter((s) => s.category === cat).length})
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
              <SkillIcon skill={skill} />
              <span className="text-gray-300 group-hover:text-white text-xs font-medium transition-colors">
                {skill.name}
              </span>
              {skill.proficiencyLabel && (
                <span className="text-gray-600 text-xs">{skill.proficiencyLabel}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
