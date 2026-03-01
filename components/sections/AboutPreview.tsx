"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SkillChip from "@/components/ui/SkillChip";
import SectionLabel from "@/components/ui/SectionLabel";
import { skillGroups } from "@/lib/data";

// Flatten top skills for the preview (first 2 categories)
const previewSkills = skillGroups.slice(0, 2).flatMap((g) => g.skills).slice(0, 16);

export default function AboutPreview() {
  return (
    <section id="about-preview" className="py-24 px-6 bg-[var(--color-surface-raised)]/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <SectionLabel>About</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
              Operator, builder, and
              <br />
              <span className="text-gradient-amber">AI deployment lead.</span>
            </h2>
            <div className="space-y-4 text-[var(--color-text-muted)] text-base leading-relaxed">
              <p>
                I&rsquo;m Jordon Peters — Founder of North Agent, based in Toronto. I build and deploy AI agents and automation systems for service businesses across Voice, Chat, and SMS channels.
              </p>
              <p>
                My background spans AI platform support at Forethought AI, cloud ECM for Canadian federal agencies at Opentext, and IAM operations at Wealthsimple. I bring both the technical depth and the client-facing delivery experience to get AI systems running in production.
              </p>
              <p>
                North Agent&apos;s AI products are validated through the University of Waterloo&apos;s Velocity Startup Incubator.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
            >
              Full background <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-dim)]">
              Core Tools & Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {previewSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                >
                  <SkillChip label={skill} accent={i < 5} />
                </motion.div>
              ))}
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              View all skills & certifications <ArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
