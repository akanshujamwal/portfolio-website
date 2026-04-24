import { useCertifications } from "../../../core/firebase/useFirestore";
import SectionHeader from "../../../shared/components/SectionHeader";

export default function CertificationsPreview() {
  const { data: certifications, loading, error } = useCertifications();

  if (loading) {
    return (
      <section id="certifications" className="bg-gray-950 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Credentials"
            title="Certifications"
            subtitle="Verified credentials from recognized platforms and organizations."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 animate-pulse">
            {[...Array(4)].map((_, i) => <div key={i} className="h-44 bg-gray-800 rounded-xl" />)}
          </div>
        </div>
      </section>
    );
  }

  if (error || !certifications?.length) return null;

  return (
    <section id="certifications" className="bg-gray-950 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeader
          label="Credentials"
          title="Certifications"
          subtitle="Verified credentials from recognized platforms and organizations."
        />

        {/* ── Certification Cards ───────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {certifications.map((cert) => {
            const CardWrapper = cert.credentialUrl ? "a" : "div";
            const wrapperProps = cert.credentialUrl
              ? { href: cert.credentialUrl, target: "_blank", rel: "noreferrer" }
              : {};

            return (
              <CardWrapper
                key={cert.id}
                {...wrapperProps}
                className="bg-gray-900 border border-gray-800 hover:border-indigo-500/50 rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/5 group"
              >
                {/* Badge icon or image */}
                {cert.imageUrl ? (
                  <img src={cert.imageUrl} alt={cert.name} className="w-10 h-10 object-contain rounded-lg" />
                ) : (
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center text-xl">
                    🏅
                  </div>
                )}

                {/* Cert name */}
                <h3 className="text-white text-sm font-semibold leading-snug group-hover:text-indigo-400 transition-colors">
                  {cert.name}
                </h3>

                {/* Provider & date */}
                <div className="mt-auto">
                  <p className="text-gray-400 text-xs">{cert.provider}</p>
                  {cert.issueDate && (
                    <p className="text-gray-600 text-xs mt-1">Issued {cert.issueDate}</p>
                  )}
                </div>

                {cert.credentialUrl && (
                  <span className="text-indigo-400 text-xs font-medium mt-1">
                    Verify ↗
                  </span>
                )}
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
