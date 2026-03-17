import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudX Cafe | Gwalior's Favorite Hangout Spot",
  description:
    "CloudX Cafe in Govindpuri, Gwalior – a modern social café offering specialty coffee, signature mocktails, fast food, and an Instagram-worthy ambience. Open daily till 11:30 PM. ₹200–₹400 per person.",
  keywords: [
    "CloudX Cafe",
    "cafe in Gwalior",
    "college cafe Gwalior",
    "best café Gwalior",
    "mocktails Gwalior",
    "Govindpuri cafe",
    "University Road Gwalior",
    "youth hangout Gwalior",
    "neon cafe Gwalior",
  ],
  openGraph: {
    title: "CloudX Cafe | Gwalior's Favorite Hangout Spot",
    description:
      "Modern social café with colorful interiors, signature mocktails & cozy seating. Govindpuri, Gwalior.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
