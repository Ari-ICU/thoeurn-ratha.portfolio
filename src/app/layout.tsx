import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Footer"; // Import the Footer component

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
  title: "Thoeurn Ratha – Contact & Portfolio",
  description:
    "Get in touch with Thoeurn Ratha. Find email, phone, location, website, and working hours for inquiries and collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply font globally with className */}
      <body className={`${bitcount.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
