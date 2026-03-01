"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[var(--color-surface-raised)]/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 max-w-xl">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] tracking-tight">
            What clients say.
          </h2>
          <p className="text-sm text-[var(--color-text-muted)]">
            ⚠️ Placeholder — to be replaced with real client quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="p-6 h-full flex flex-col gap-5">
                <Quote size={16} className="text-[var(--color-accent)]/60" />
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed flex-1 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text-primary)]">{t.name}</p>
                  <p className="text-xs text-[var(--color-text-dim)]">{t.title}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
