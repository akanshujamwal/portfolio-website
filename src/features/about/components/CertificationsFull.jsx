import { useCertifications } from "../../../core/firebase/useFirestore";
import SectionHeader from "../../../shared/components/SectionHeader";

export default function CertificationsFull() {
  const { data: certifications, loading } = useCertifications();

  if (loading) {
    return (
      <section className="bg-gray-950 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Credentials" title="Certifications" subtitle="Verified credentials from recognized platforms and organizations." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-pulse">
            {[...Array(4)].map((_, i) => <div key={i} className="h-52 bg-gray-800 rounded-xl" />)}
          </div>
        </div>
      </section>
    );
  }

  if (!certifications?.length) return null;

  return (
    <section className="bg-gray-950 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="Credentials"
          title="Certifications"
          subtitle="Verified credentials from recognized platforms and organizations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert) => {
            const CardWrapper = cert.credentialUrl ? "a" : "div";
            const wrapperProps = cert.credentialUrl
              ? { href: cert.credentialUrl, target: "_blank", rel: "noreferrer" }
              : {};

            return (
              <CardWrapper
                key={cert.id}
                {...wrapperProps}
                className="bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-xl p-6 flex flex-col gap-4 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/5 group"
              >
                <div className="flex items-start justify-between">
                  {cert.imageUrl ? (
                    <img src={cert.imageUrl} alt={cert.name} className="w-12 h-12 object-contain rounded-xl" />
                  ) : (
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-2xl">
                      🏅
                    </div>
                  )}
                  {cert.credentialUrl && (
                    <span className="text-indigo-400 text-xs font-semibold group-hover:translate-x-0.5 transition-transform">
                      Verify ↗
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-white text-sm font-semibold leading-snug mb-1 group-hover:text-indigo-400 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 text-xs">{cert.provider}</p>
                  {cert.isExpired && (
                    <span className="mt-1 inline-block text-xs bg-red-500/10 text-red-400 border border-red-500/20 px-2 py-0.5 rounded-full">
                      Expired
                    </span>
                  )}
                </div>

                {cert.issueDate && (
                  <p className="text-gray-600 text-xs border-t border-gray-800 pt-3">
                    Issued {cert.issueDate}
                    {cert.doesExpire && cert.expiryDate && ` · Expires ${cert.expiryDate}`}
                  </p>
                )}

                {cert.skills?.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((s) => (
                      <span key={s} className="text-xs bg-gray-800 text-gray-500 px-2 py-0.5 rounded">{s}</span>
                    ))}
                  </div>
                )}
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
