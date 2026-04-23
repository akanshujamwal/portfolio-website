import { Link } from "react-router-dom";
import { useTestimonials } from "../../../core/firebase/useFirestore";
import SectionHeader from "../../../shared/components/SectionHeader";

export default function TestimonialsPreview() {
  const { data: testimonials, loading } = useTestimonials();

  if (loading) {
    return (
      <section id="testimonials" className="bg-gray-900 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Kind Words"
            title="What People Say"
            subtitle="Feedback from clients and colleagues I've had the pleasure of working with."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 animate-pulse">
            {[...Array(3)].map((_, i) => <div key={i} className="h-52 bg-gray-800 rounded-xl" />)}
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials?.length) return null;

  const featured = testimonials.slice(0, 3);

  return (
    <section id="testimonials" className="bg-gray-900 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="Kind Words"
          title="What People Say"
          subtitle="Feedback from clients and colleagues I've had the pleasure of working with."
        />

        {/* ── Testimonial Cards ─────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((t) => (
            <div
              key={t.id}
              className="bg-gray-950 border border-gray-800 hover:border-indigo-500/30 rounded-xl p-6 flex flex-col gap-4 transition-all duration-200"
            >
              {/* Quote icon */}
              <span className="text-indigo-400/40 text-5xl font-serif leading-none select-none">"</span>

              {/* Message */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 -mt-4">
                {t.message}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                {t.avatarUrl ? (
                  <img src={t.avatarUrl} alt={t.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                )}
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.roleWithCompany}</p>
                </div>
                {t.linkedinUrl && (
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto text-gray-600 hover:text-indigo-400 transition-colors text-xs"
                  >
                    LinkedIn ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── View All Link ─────────────────── */}
        <div className="text-center">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-2 border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
          >
            View All Testimonials →
          </Link>
        </div>
      </div>
    </section>
  );
}
