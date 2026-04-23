import { useProfile } from "../../../core/firebase/useFirestore";

export default function HeroSection() {
  const { data: profile, loading } = useProfile();

  if (loading) {
    return (
      <section className="min-h-screen flex items-center bg-gray-950 pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl animate-pulse space-y-4">
            <div className="h-4 w-32 bg-gray-800 rounded-full" />
            <div className="h-16 w-3/4 bg-gray-800 rounded-xl" />
            <div className="h-8 w-1/2 bg-gray-800 rounded-xl" />
            <div className="h-24 w-full bg-gray-800 rounded-xl" />
          </div>
        </div>
      </section>
    );
  }

  if (!profile) return null;

  const isAvailable     = profile.isAvailable;
  const availabilityText  = isAvailable ? "Open to Work" : "Currently Busy";
  const dotColor          = isAvailable ? "bg-green-400" : "bg-yellow-400";
  const textColor         = isAvailable ? "text-green-400" : "text-yellow-400";

  const hasSocialLinks = Object.keys(profile.socialLinks ?? {}).length > 0;

  return (
    <section className="min-h-screen flex items-center bg-gray-950 pt-16">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">

          {/* ── Availability badge ────────────── */}
          <div className="flex items-center gap-2 mb-6">
            <span className={`w-2 h-2 rounded-full ${dotColor} animate-pulse`} />
            <span className={`${textColor} text-sm font-medium`}>{availabilityText}</span>
          </div>

          {/* ── Name & Title ──────────────────── */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              {profile.name}
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6">
            {profile.title}
          </h2>

          {/* ── Bio ───────────────────────────── */}
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
            {profile.bio}
          </p>

          {/* ── CTA Buttons ───────────────────── */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#projects"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              View My Work →
            </a>
            <a
              href="#contact"
              className="border border-gray-700 hover:border-indigo-500 text-gray-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200"
            >
              Get In Touch
            </a>
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                className="text-indigo-400 hover:text-indigo-300 font-semibold px-2 py-3 flex items-center gap-2 transition-colors duration-200"
              >
                ↓ Download CV
              </a>
            )}
          </div>

          {/* ── Social Links ──────────────────── */}
          {hasSocialLinks && (
            <div className="flex items-center gap-2">
              <span className="text-gray-600 text-sm">Find me on</span>
              <span className="w-8 border-t border-gray-700" />
              {Object.entries(profile.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-indigo-400 text-sm font-medium capitalize transition-colors duration-200 ml-2"
                >
                  {platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
