import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Karatina University Geniuslab Hackathon 2026",
  description:
    "A sleek, creative landing page for the Karatina University Geniuslab Hackathon 2026.",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  openGraph: {
    title: "Karatina University Geniuslab Hackathon 2026",
    description:
      "Join the Geniuslab Hackathon for two days of innovation, mentorship, and awards.",
    type: "website",
    images: [
      {
        url: "/karatina-hackathon-poster.jpg",
        width: 1200,
        height: 1200,
        alt: "Karatina University Geniuslab Hackathon poster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karatina University Geniuslab Hackathon 2026",
    description:
      "Join the Geniuslab Hackathon for two days of innovation, mentorship, and awards.",
    images: ["/karatina-hackathon-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
