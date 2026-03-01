import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CaseStudyCard from "@/components/work/CaseStudyCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { projects } from "@/lib/data";

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 px-6" aria-labelledby="work-heading">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-4 max-w-xl">
            <SectionLabel>Selected Work</SectionLabel>
            <h2
              id="work-heading"
              className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight"
            >
              Projects built for production.
            </h2>
          </div>
          <Link
            href="/work"
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors shrink-0"
          >
            View all work <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <CaseStudyCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
