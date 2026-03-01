"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import SkillChip from "@/components/ui/SkillChip";
import type { Project } from "@/lib/types";

interface CaseStudyCardProps {
  project: Project;
  index?: number;
}

export default function CaseStudyCard({ project, index = 0 }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/25 hover:bg-white/[0.04] hover:shadow-[0_0_30px_-8px_rgba(249,115,22,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        aria-label={`View case study: ${project.title}`}
      >
        <div className="flex flex-col h-full gap-5">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((tag) => (
              <SkillChip key={tag} label={tag} size="sm" />
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-3">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
            View Case Study
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
