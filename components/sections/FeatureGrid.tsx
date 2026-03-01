"use client";

import { motion } from "framer-motion";
import {
  PhoneCall,
  Zap,
  Plug,
  Shield,
  Activity,
  BookOpen,
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { features } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  PhoneCall,
  Zap,
  Plug,
  Shield,
  Activity,
  BookOpen,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeatureGrid() {
  return (
    <section id="services" className="py-24 px-6" aria-labelledby="features-heading">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <SectionLabel>What I Build</SectionLabel>
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight"
          >
            End-to-end AI deployment,
            <br />
            not just prompts.
          </h2>
          <p className="text-[var(--color-text-muted)] text-base leading-relaxed">
            From voice agents to secure integrations — I handle the full stack of building AI systems that actually work in production.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div key={feature.title} variants={item}>
                <GlassCard hover glow className="p-6 h-full space-y-4">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/15">
                    {Icon && <Icon size={18} className="text-[var(--color-accent)]" />}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
