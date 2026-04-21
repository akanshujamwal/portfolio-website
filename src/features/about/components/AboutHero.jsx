// AboutHero — top banner of the About page.
// Shows name, title, location, availability and quick social links.

import { profileData } from "../../home/data/mockData";

export default function AboutHero() {
  return (
    <section className="bg-gray-950 pt-32 pb-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

          {/* ── Avatar placeholder ────────────── */}
          <div className="flex-shrink-0">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl shadow-indigo-500/20">
              {profileData.name.charAt(0)}
            </div>
          </div>

          {/* ── Info ──────────────────────────── */}
          <div className="text-center lg:text-left">
            {/* Availability */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">{profileData.availability}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
              {profileData.name}
            </h1>
            <p className="text-indigo-400 text-xl font-medium mb-4">{profileData.title}</p>

            {/* Meta info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-gray-400 text-sm mb-6">
              <span className="flex items-center gap-1">📍 {profileData.location}</span>
              <span className="flex items-center gap-1">✉ {profileData.email}</span>
              {profileData.phone && (
                <span className="flex items-center gap-1">📞 {profileData.phone}</span>
              )}
            </div>

            {/* Social + CTA */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {Object.entries(profileData.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-indigo-500/50 text-gray-300 hover:text-white text-xs font-semibold px-4 py-2 rounded-lg capitalize transition-all duration-200"
                >
                  {platform} ↗
                </a>
              ))}
              <a
                href={profileData.cvUrl}
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                ↓ Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}