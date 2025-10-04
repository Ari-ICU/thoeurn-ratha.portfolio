import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import Crimson Text fonts
const crimsonText = localFont({
  src: [
    {
      path: "../fonts/CrimsonText-Bold.ttf",
      weight: "700", // Adjusted to standard weight (900 is rarely used)
      style: "normal",
    },
    {
      path: "../fonts/CrimsonText-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/CrimsonText-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/CrimsonText-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thoeurn Ratha – Portfolio",
  description:
    "I'm Thoeurn Ratha, a passionate web developer specializing in modern, responsive, and high-performance web applications. Explore my portfolio to see my projects and skills.",
  keywords: [
    "Thoeurn Ratha",
    "web developer portfolio",
    "Next.js portfolio",
    "responsive web design",
    "SEO optimization",
  ],
  openGraph: {
    title: "Thoeurn Ratha – Portfolio",
    description:
      "Portfolio of Thoeurn Ratha, showcasing modern web development projects built with Next.js and other technologies.",
    url: "https://yoursite.com", // Replace with your Vercel domain
    siteName: "Thoeurn Ratha Portfolio",
    images: [
      {
        url: "https://yoursite.com/og-image.jpg", // Add an OG image in /public
        width: 1200,
        height: 630,
        alt: "Thoeurn Ratha Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thoeurn Ratha – Portfolio",
    description:
      "Explore Thoeurn Ratha's web development portfolio with modern, responsive projects.",
    images: ["https://yoursite.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico", // Ensure favicon exists in /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Remove client-side notFound check; handle 404s in pages or middleware
  return (
    <html lang="en">
      <head>
        {/* Structured Data for Person (SEO boost) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Thoeurn Ratha",
              jobTitle: "Web Developer",
              url: "https://yoursite.com", // Replace with your domain
              sameAs: [
                "https://linkedin.com/in/your-profile", // Add your social links
                "https://github.com/your-profile",
              ],
            }),
          }}
        />
        {/* Google Analytics (optional, replace G-XXXXXX with your ID) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXX');
            `,
          }}
        />
      </head>
      <body className={`${crimsonText.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}