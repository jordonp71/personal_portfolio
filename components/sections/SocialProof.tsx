"use client";

import { motion } from "framer-motion";
import { badges } from "@/lib/data";

export default function SocialProof() {
  return (
    <section
      aria-label="Experience and tools"
      className="py-12 border-y border-[var(--color-border)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-medium tracking-widest uppercase text-[var(--color-text-dim)] mb-8">
          Experience across
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-white/[0.07] bg-white/[0.03] text-[var(--color-text-muted)]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/60" />
              {badge}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
