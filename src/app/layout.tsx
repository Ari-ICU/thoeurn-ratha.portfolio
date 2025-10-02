import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { notFound } from "next/navigation";

// Import your Bitcount fonts
const bitcount = localFont({
  src: [
    {
      path: "../fonts/CrimsonText-Bold.ttf",
      weight: "900",
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
    "I'm Thoeurn Ratha, a passionate web developer specializing in creating modern, responsive, and high-performance web applications. Explore my portfolio to see my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  if (!children) {
    notFound();
  }

  return (
    <html lang="en">
      {/* Apply font globally with className */}
      <body className={`${bitcount.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
