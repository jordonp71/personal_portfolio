import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import FeatureGrid from "@/components/sections/FeatureGrid";
import SelectedWork from "@/components/sections/SelectedWork";
import AboutPreview from "@/components/sections/AboutPreview";
import TimelinePreview from "@/components/sections/TimelinePreview";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Jordon Peters | AI Deployment & Automation",
  description:
    "Founder @ North Agent. I build and deploy AI agents and automation systems across Voice, Chat, and SMS for service businesses in Canada.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <FeatureGrid />
      <SelectedWork />
      <AboutPreview />
      <TimelinePreview />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
