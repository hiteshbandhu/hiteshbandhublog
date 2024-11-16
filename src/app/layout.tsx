import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleAnalytics } from 'nextjs-google-analytics';
import "./globals.css";


export const metadata: Metadata = {
  title: "Hitesh Bandhu | AI Engineer & Consultant",
  description: "Enterprise AI solutions specialist helping businesses leverage custom RAG implementations, AI safety guardrails, and practical automation tools.",
  keywords: ["AI Engineer", "Enterprise AI", "RAG Implementation", "AI Consultant", "AI Safety", "Business Automation"],
  authors: [{ name: "Hitesh Bandhu" }],
  openGraph: {
    title: "Hitesh Bandhu | AI Engineer & Consultant",
    description: "Enterprise AI solutions specialist helping businesses leverage custom RAG implementations, AI safety guardrails, and practical automation tools.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hitesh Bandhu | AI Engineer & Consultant",
    description: "Enterprise AI solutions specialist helping businesses leverage custom RAG implementations, AI safety guardrails, and practical automation tools.",
    creator: "@_hiteshbandhu"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        {children}
      </body>
    </html>
  );
}
