import type { Metadata } from "next";
import CaseStudyCard from "@/components/work/CaseStudyCard";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work | Jordon Peters",
  description:
    "Case studies: AI voice receptionist, support automation, and secure integrations built by Jordon Peters.",
  openGraph: {
    title: "Work | Jordon Peters",
    description: "Case studies: AI voice receptionist, support automation, and secure integrations.",
    url: "https://jordonpeters.com/work",
  },
};

export default function WorkPage() {
  return (
    <main className="pt-24 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <div className="space-y-5 max-w-2xl">
          <SectionLabel>Case Studies</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight">
            Projects built for production.
          </h1>
          <p className="text-[var(--color-text-muted)] text-base leading-relaxed">
            Each project represents a real deployment challenge — solved with AI agents, automation, and secure integrations. No invented metrics; honest results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <CaseStudyCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button href="https://calendly.com/jordon-northagent" external variant="primary">
            Start a Project
          </Button>
          <Button href="/about" variant="ghost">
            View My Background
          </Button>
        </div>
      </div>
    </main>
  );
}
