import { useAbout } from "../../../core/firebase/useFirestore";

function renderFunFact(item, i) {
  if (typeof item === "string") {
    return (
      <div key={i} className="bg-gray-800 border border-gray-700 hover:border-indigo-500/40 rounded-xl p-4 flex items-start gap-3 transition-colors duration-200">
        <span className="text-2xl flex-shrink-0">✨</span>
        <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
      </div>
    );
  }
  return (
    <div key={i} className="bg-gray-800 border border-gray-700 hover:border-indigo-500/40 rounded-xl p-4 flex items-start gap-3 transition-colors duration-200">
      <span className="text-2xl flex-shrink-0">{item.emoji || "✨"}</span>
      <p className="text-gray-300 text-sm leading-relaxed">{item.fact || item.text || JSON.stringify(item)}</p>
    </div>
  );
}

export default function MyStory() {
  const { data: about, loading } = useAbout();

  if (loading) {
    return (
      <section className="bg-gray-900 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-pulse">
            <div className="space-y-4">
              <div className="h-4 w-20 bg-gray-800 rounded-full" />
              <div className="h-10 w-48 bg-gray-800 rounded-xl" />
              <div className="h-40 bg-gray-800 rounded-xl" />
            </div>
            <div className="space-y-4">
              <div className="h-4 w-24 bg-gray-800 rounded-full" />
              <div className="h-10 w-40 bg-gray-800 rounded-xl" />
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => <div key={i} className="h-20 bg-gray-800 rounded-xl" />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!about) return null;

  const paragraphs = (about.bio || "").split("\n\n").filter(Boolean);

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
                <p key={i} className="text-gray-400 text-base leading-relaxed">{para}</p>
              ))}
            </div>

            {/* Personal quote */}
            {about.personalQuote && (
              <blockquote className="mt-8 border-l-4 border-indigo-500 pl-5">
                <p className="text-gray-300 text-base italic leading-relaxed">"{about.personalQuote}"</p>
              </blockquote>
            )}
          </div>

          {/* ── Fun Facts ─────────────────────── */}
          {about.funFacts?.length > 0 && (
            <div>
              <span className="inline-block text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-3 bg-indigo-400/10 px-3 py-1 rounded-full">
                Fun Facts
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Beyond the code
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {about.funFacts.map((item, i) => renderFunFact(item, i))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
