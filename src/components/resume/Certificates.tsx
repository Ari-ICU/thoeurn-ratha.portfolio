import { Certificate } from "@/types";

interface CertificatesProps {
  certificates: Certificate[];
}

export default function Certificates({ certificates }: CertificatesProps) {
  return (
    <section className="mb-10">
      <ul className="space-y-3">
        {certificates.map((cert, idx) => (
          <li key={idx} className="border-l-4 border-blue-500 pl-4">
            <p className="font-semibold">{cert.title}</p>
            <p className="text-gray-600 dark:text-gray-400">
              {cert.issuer} — {cert.date}
            </p>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm"
              >
                View Credential
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
