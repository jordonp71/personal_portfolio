"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section
      id="cta"
      className="py-24 px-6"
      aria-label="Call to action"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative glass-card rounded-3xl p-10 sm:p-16 text-center overflow-hidden"
        >
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 110%, rgba(249,115,22,0.12), transparent 70%)",
            }}
          />

          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                Ready to ship?
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight">
                Let&rsquo;s build your
                <br />
                <span className="text-gradient-amber">AI system.</span>
              </h2>
              <p className="max-w-lg mx-auto text-[var(--color-text-muted)] text-base leading-relaxed">
                Whether you need a voice agent, a support automation workflow, or a secure integration — I&rsquo;ll help you scope, build, and launch it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://calendly.com/jordon-northagent"
                external
                variant="primary"
                size="lg"
              >
                <Calendar size={16} />
                Book a Free Discovery Call
              </Button>
              <Button href="/work" variant="ghost" size="lg">
                See Case Studies <ArrowRight size={16} />
              </Button>
            </div>

            <p className="text-xs text-[var(--color-text-dim)]">
              jordon@northagent.ai · Toronto, Canada
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
