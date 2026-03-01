"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      aria-label="Introduction"
    >
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(249,115,22,0.13), transparent 60%)",
        }}
      />

      {/* Grid dots */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-text-muted)] border border-white/10 rounded-full px-3 py-1.5 bg-white/[0.03]">
            <MapPin size={11} className="text-[var(--color-accent)]" />
            Toronto, Canada · Available for AI projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[var(--color-text-primary)]"
        >
          I deploy{" "}
          <span className="text-gradient-amber">AI agents</span>
          {" "}that work
          <br className="hidden sm:block" />
          while you{" "}
          <span className="relative">
            sleep
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent"
            />
          </span>
          .
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed"
        >
          I build and deploy AI agents and automation systems across Voice, Chat, and SMS for service businesses. I bridge product, engineering, and go-to-market to ship reliable AI workflows with measurable business impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-2"
        >
          <Button
            href="https://calendly.com/jordon-northagent"
            external
            variant="primary"
            size="lg"
          >
            Book a Call
            <ArrowRight size={16} />
          </Button>
          <Button href="/work" variant="ghost" size="lg">
            See Projects
          </Button>
        </motion.div>

        {/* Founder tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xs text-[var(--color-text-dim)]"
        >
          Founder @ North Agent · UWaterloo Velocity Incubator Alum
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[var(--color-text-dim)] tracking-wider uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--color-accent)]/40 to-transparent" />
      </motion.div>
    </section>
  );
}
