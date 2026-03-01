"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { timeline } from "@/lib/data";

const previewRoles = timeline.slice(0, 3);

export default function TimelinePreview() {
  return (
    <section id="experience" className="py-24 px-6" aria-labelledby="timeline-heading">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-4 max-w-xl">
            <SectionLabel>Experience</SectionLabel>
            <h2
              id="timeline-heading"
              className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight"
            >
              5+ years across AI, cloud,
              <br />
              and enterprise tech.
            </h2>
          </div>
          <Link
            href="/about"
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors shrink-0"
          >
            Full timeline <ArrowRight size={14} />
          </Link>
        </div>

        {/* Timeline items */}
        <div className="relative">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-8 w-px timeline-line"
          />

          <div className="space-y-8">
            {previewRoles.map((role, i) => (
              <motion.div
                key={`${role.company}-${role.period}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="pl-8 relative"
              >
                {/* Dot */}
                <div
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                    role.current
                      ? "bg-[var(--color-accent)] border-[var(--color-accent)] shadow-[0_0_10px_2px_rgba(249,115,22,0.4)]"
                      : "bg-[var(--color-background)] border-[var(--color-border)]"
                  }`}
                />

                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {role.title}
                      </h3>
                      <p className="text-xs text-[var(--color-accent)]">{role.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[var(--color-text-muted)]">{role.period}</p>
                      <p className="text-xs text-[var(--color-text-dim)]">{role.location}</p>
                    </div>
                  </div>
                  {/* First bullet only for preview */}
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {role.bullets[0]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
