import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Md Rejawanul | Freelance Video Editor & Content Strategist — Reja Studio",
  description: "Independent sports and high-retention video editor. Specializing in NBA, NFL, UFC, and Soccer YouTube long-forms, and viral TikTok / Instagram reels for content creators and athletes.",
  keywords: [
    "Video Editor",
    "Sports Video Editor",
    "NBA Highlights Editor",
    "YouTube Video Editor",
    "Shorts & Reels Editor",
    "Freelance Video Editor",
    "Fiverr Video Editor",
    "Upwork Video Editor",
  ],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
