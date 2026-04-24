import { useState } from "react";
import { useTestimonials } from "../../../core/firebase/useFirestore";

export default function TestimonialsPage() {
  const { data: testimonials, loading, error } = useTestimonials();
  const [selected, setSelected] = useState(null);

  function openModal(t)  { setSelected(t); }
  function closeModal()  { setSelected(null); }

  return (
    <main className="min-h-screen bg-gray-950">

      {/* ── Page Header ───────────────────── */}
      <section className="bg-gray-950 pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4 bg-indigo-400/10 px-3 py-1 rounded-full">
            Kind Words
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">What People Say</h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Feedback from clients, colleagues, and collaborators I've had the pleasure of working with.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────── */}
      <section className="border-y border-gray-800 bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { number: (loading || error) ? "—" : `${testimonials?.length ?? 0}+`, label: "Testimonials" },
              { number: "100%", label: "Satisfaction Rate" },
              { number: "5★",  label: "Average Rating"   },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-bold text-indigo-400 mb-1">{stat.number}</p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Grid ─────────────── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 animate-pulse">
              {[...Array(6)].map((_, i) => <div key={i} className="h-52 bg-gray-800 rounded-xl break-inside-avoid" />)}
            </div>
          ) : error ? (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">⚠️</p>
              <h3 className="text-white text-xl font-semibold mb-2">Failed to load testimonials</h3>
              <p className="text-gray-500 text-sm mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
              >
                Try again
              </button>
            </div>
          ) : !testimonials?.length ? (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">💬</p>
              <h3 className="text-white text-xl font-semibold mb-2">No testimonials yet</h3>
              <p className="text-gray-500 text-sm">Check back soon!</p>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="break-inside-avoid bg-gray-900 border border-gray-800 hover:border-indigo-500/40 rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/5 cursor-pointer group"
                  onClick={() => openModal(t)}
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}
                  </div>
                  <span className="text-indigo-400/30 text-5xl font-serif leading-none select-none">"</span>
                  <p className="text-gray-300 text-sm leading-relaxed -mt-4">{t.message}</p>
                  <p className="text-indigo-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to read more →
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                    {t.avatarUrl ? (
                      <img src={t.avatarUrl} alt={t.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {t.initials}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold truncate">{t.name}</p>
                      <p className="text-gray-500 text-xs truncate">{t.roleWithCompany}</p>
                    </div>
                    {t.linkedinUrl && (
                      <a
                        href={t.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-gray-600 hover:text-indigo-400 transition-colors text-xs flex-shrink-0"
                      >
                        LinkedIn ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ───────────────────────────── */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-base mb-6">Worked with me? I'd love to hear your feedback.</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Leave a Testimonial →
          </a>
        </div>
      </section>

      {/* ── Modal ─────────────────────────── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
            </div>
            <p className="text-gray-200 text-base leading-relaxed mb-6">"{selected.message}"</p>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
              {selected.avatarUrl ? (
                <img src={selected.avatarUrl} alt={selected.name} className="w-12 h-12 rounded-full object-cover" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
                  {selected.initials}
                </div>
              )}
              <div className="flex-1">
                <p className="text-white font-semibold">{selected.name}</p>
                <p className="text-gray-400 text-sm">{selected.roleWithCompany}</p>
              </div>
              {selected.linkedinUrl && (
                <a
                  href={selected.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  LinkedIn ↗
                </a>
              )}
            </div>

            <button
              onClick={closeModal}
              className="mt-6 w-full border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white text-sm font-medium py-2 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
