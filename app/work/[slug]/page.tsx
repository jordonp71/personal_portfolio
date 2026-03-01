import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { projects } from "@/lib/data";
import ArchitectureDiagram from "@/components/work/ArchitectureDiagram";
import SkillChip from "@/components/ui/SkillChip";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Jordon Peters`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} | Jordon Peters`,
      description: project.tagline,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const sections = [
    { label: "The Problem", content: project.problem },
    { label: "My Approach", content: project.approach },
    { label: "The Solution", content: project.solution },
  ];

  return (
    <main className="pt-24 pb-24 px-6 min-h-screen">
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Back */}
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Work
        </Link>

        {/* Header */}
        <div className="space-y-5">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <SkillChip key={tag} label={tag} size="sm" />
            ))}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight">
            {project.title}
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
            {project.tagline}
          </p>
        </div>

        <hr className="border-[var(--color-border)]" />

        {/* Architecture diagram */}
        <div className="space-y-3">
          <ArchitectureDiagram variant={project.diagram} />
        </div>

        {/* Problem / Approach / Solution */}
        <div className="space-y-8">
          {sections.map(({ label, content }) => (
            <GlassCard key={label} className="p-6 space-y-3">
              <h2 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                {label}
              </h2>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {content}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Results */}
        <div className="space-y-5">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">
            Results
          </h2>
          <ul className="space-y-3">
            {project.results.map((result, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                <CheckCircle2
                  size={16}
                  className="text-[var(--color-accent)] mt-0.5 shrink-0"
                />
                {result}
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-[var(--color-border)]" />

        {/* CTA */}
        <div className="space-y-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            Interested in a similar system for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="https://calendly.com/jordon-northagent" external variant="primary">
              Book a Discovery Call
            </Button>
            <Button href="/work" variant="ghost">
              View Other Projects
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
