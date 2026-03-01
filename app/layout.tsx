import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jordonpeters.com"),
  title: {
    default: "Jordon Peters | AI Deployment & Automation",
    template: "%s | Jordon Peters",
  },
  description:
    "Founder @ North Agent. I build and deploy AI agents and automation systems across Voice, Chat, and SMS for service businesses in Canada.",
  keywords: [
    "AI agents",
    "voice AI",
    "automation",
    "North Agent",
    "Jordon Peters",
    "AI deployment",
    "n8n",
    "Retell AI",
    "Toronto",
  ],
  authors: [{ name: "Jordon Peters" }],
  creator: "Jordon Peters",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://jordonpeters.com",
    siteName: "Jordon Peters",
    title: "Jordon Peters | AI Deployment & Automation",
    description:
      "Founder @ North Agent. Building AI agents and automation systems for service businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jordon Peters – AI Deployment & Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordon Peters | AI Deployment & Automation",
    description: "Building AI agents and automation systems for service businesses.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="noise-bg min-h-screen flex flex-col antialiased">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
