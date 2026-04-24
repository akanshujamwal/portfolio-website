import { useProfile, useContact } from "../../../core/firebase/useFirestore";

export default function AboutHero() {
  const { data: profile, loading: profileLoading, error: profileError } = useProfile();
  const { data: contact, loading: contactLoading  } = useContact();

  if (profileLoading || contactLoading) {
    return (
      <section className="bg-gray-950 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 animate-pulse">
            <div className="w-44 h-44 rounded-2xl bg-gray-800 flex-shrink-0" />
            <div className="space-y-4 flex-1">
              <div className="h-4 w-24 bg-gray-800 rounded-full" />
              <div className="h-10 w-64 bg-gray-800 rounded-xl" />
              <div className="h-6 w-48 bg-gray-800 rounded-xl" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (profileError || !profile) return null;

  const isAvailable     = profile.isAvailable;
  const availabilityText = isAvailable ? "Open to Work" : "Currently Busy";
  const dotColor         = isAvailable ? "bg-green-400" : "bg-yellow-400";
  const textColor        = isAvailable ? "text-green-400" : "text-yellow-400";

  // Social links: prefer contact (array) over profile (object)
  const socialLinks = Array.isArray(contact?.socialLinks) && contact.socialLinks.length > 0
    ? contact.socialLinks.map((s) => ({ platform: s.platform, url: s.url, label: s.displayName || s.platform }))
    : Object.entries(profile.socialLinks ?? {}).map(([platform, url]) => ({ platform, url, label: platform }));

  return (
    <section className="bg-gray-950 pt-32 pb-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">

          {/* ── Avatar ────────────────────────── */}
          <div className="flex-shrink-0">
            {profile.profileImageUrl ? (
              <img
                src={profile.profileImageUrl}
                alt={profile.name}
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover shadow-2xl shadow-indigo-500/20"
              />
            ) : (
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-2xl shadow-indigo-500/20">
                {profile.name.charAt(0)}
              </div>
            )}
          </div>

          {/* ── Info ──────────────────────────── */}
          <div className="text-center lg:text-left">
            {/* Availability */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <span className={`w-2 h-2 rounded-full ${dotColor} animate-pulse`} />
              <span className={`${textColor} text-sm font-medium`}>{availabilityText}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">{profile.name}</h1>
            <p className="text-indigo-400 text-xl font-medium mb-4">{profile.title}</p>

            {/* Meta info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-gray-400 text-sm mb-6">
              {profile.location && <span className="flex items-center gap-1">📍 {profile.location}</span>}
              {profile.email    && <span className="flex items-center gap-1">✉ {profile.email}</span>}
              {profile.phone    && <span className="flex items-center gap-1">📞 {profile.phone}</span>}
            </div>

            {/* Social + CTA */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-indigo-500/50 text-gray-300 hover:text-white text-xs font-semibold px-4 py-2 rounded-lg capitalize transition-all duration-200"
                >
                  {link.label} ↗
                </a>
              ))}
              {profile.cvUrl && (
                <a
                  href={profile.cvUrl}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  ↓ Download CV
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
