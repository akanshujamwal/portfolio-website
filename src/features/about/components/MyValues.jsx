import { useAbout } from "../../../core/firebase/useFirestore";
import SectionHeader from "../../../shared/components/SectionHeader";

function renderHighlight(item, i) {
  if (typeof item === "string") {
    return (
      <div key={i} className="bg-gray-900 border border-gray-800 hover:border-indigo-500/40 rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/5 group">
        <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-indigo-500/20 transition-colors">
          🎯
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
      </div>
    );
  }
  return (
    <div key={i} className="bg-gray-900 border border-gray-800 hover:border-indigo-500/40 rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/5 group">
      <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-indigo-500/20 transition-colors">
        {item.icon || "🎯"}
      </div>
      {item.title && (
        <h3 className="text-white font-semibold text-base group-hover:text-indigo-400 transition-colors">
          {item.title}
        </h3>
      )}
      <p className="text-gray-400 text-sm leading-relaxed">
        {item.description || item.text || item.fact || ""}
      </p>
    </div>
  );
}

export default function MyValues() {
  const { data: about, loading } = useAbout();

  if (loading) {
    return (
      <section className="bg-gray-950 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="How I Work" title="My Approach" subtitle="The principles that guide every project I take on." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-pulse">
            {[...Array(4)].map((_, i) => <div key={i} className="h-48 bg-gray-800 rounded-xl" />)}
          </div>
        </div>
      </section>
    );
  }

  if (!about) return null;

  // Use careerHighlights if available; fall back to personalInterests
  const items = about.careerHighlights?.length
    ? about.careerHighlights
    : about.personalInterests ?? [];

  if (!items.length) return null;

  return (
    <section className="bg-gray-950 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="How I Work"
          title="My Approach"
          subtitle="The principles that guide every project I take on."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => renderHighlight(item, i))}
        </div>
      </div>
    </section>
  );
}
