import type { Metadata } from "next";
import { CheckCircle2, Award, Trophy, ExternalLink, Users } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import SkillChip from "@/components/ui/SkillChip";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { timeline, skillGroups, certifications, accomplishments, communities } from "@/lib/data";

export const metadata: Metadata = {
  title: "About | Jordon Peters",
  description:
    "Background, experience timeline, skills, and certifications of Jordon Peters — Founder @ North Agent, AI deployment specialist in Toronto.",
  openGraph: {
    title: "About | Jordon Peters",
    description: "Background, experience, and certifications of Jordon Peters.",
    url: "https://jordonpeters.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="pt-24 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ── Bio ─────────────────────────────────────────── */}
        <section aria-labelledby="bio-heading" className="space-y-6 max-w-3xl">
          <SectionLabel>About Me</SectionLabel>
          <h1
            id="bio-heading"
            className="text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight"
          >
            Founder, operator,
            <br />
            <span className="text-gradient-amber">AI deployment lead.</span>
          </h1>
          <div className="space-y-4 text-[var(--color-text-muted)] text-base leading-relaxed">
            <p>
              I&rsquo;m Jordon Peters — Founder of North Agent, based in Toronto, Canada. I build and deploy AI agents and automation systems for service businesses across Voice, Chat, and SMS.
            </p>
            <p>
              My background spans AI-driven customer experience at Forethought AI, enterprise content management for Canadian federal agencies at Opentext, identity and access management at Wealthsimple, Python software development at Givex, and DevOps and security engineering across multiple co-op rotations at BlackBerry Limited.
            </p>
            <p>
              I bridge product, engineering, and go-to-market to ship reliable AI workflows with measurable business impact. North Agent&apos;s AI products are validated through the University of Waterloo&apos;s F25 Velocity Startup Incubator program.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="https://calendly.com/jordon-northagent" external variant="primary">
              Book a Call
            </Button>
            <Button href="/contact" variant="ghost">
              Send a Message
            </Button>
          </div>
        </section>

        {/* ── Skills ──────────────────────────────────────── */}
        <section aria-labelledby="skills-heading" className="space-y-8">
          <div className="space-y-3">
            <SectionLabel>Skills & Tools</SectionLabel>
            <h2
              id="skills-heading"
              className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] tracking-tight"
            >
              Full stack of AI deployment.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((group) => (
              <GlassCard key={group.category} className="p-5 space-y-4">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <SkillChip key={skill} label={skill} size="sm" />
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ── Certifications ──────────────────────────────── */}
        <section aria-labelledby="certs-heading" className="space-y-8">
          <div className="space-y-3">
            <SectionLabel>Certifications</SectionLabel>
            <h2
              id="certs-heading"
              className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] tracking-tight"
            >
              Verified credentials.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <GlassCard key={cert.name} className="p-5 flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/15 shrink-0 mt-0.5">
                  <Award size={16} className="text-[var(--color-accent)]" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-[var(--color-text-primary)] leading-snug">
                    {cert.name}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)]">{cert.issuer}</p>
                  <p className="text-xs text-[var(--color-text-dim)]">{cert.date}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ── Accomplishments ─────────────────────────────── */}
        <section aria-labelledby="accomplishments-heading" className="space-y-8">
          <div className="space-y-3">
            <SectionLabel>Accomplishments</SectionLabel>
            <h2
              id="accomplishments-heading"
              className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] tracking-tight"
            >
              Hackathon wins.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {accomplishments.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <GlassCard hover className="p-5 flex items-start gap-4 h-full">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/15 shrink-0 mt-0.5">
                    <Trophy size={16} className="text-[var(--color-accent)]" />
                  </div>
                  <div className="space-y-1.5 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-bold text-[var(--color-text-primary)]">
                        {item.title}
                      </p>
                      <ExternalLink
                        size={11}
                        className="text-[var(--color-text-dim)] group-hover:text-[var(--color-accent)] transition-colors shrink-0"
                      />
                    </div>
                    <p className="text-xs font-medium text-[var(--color-accent)] leading-snug">
                      {item.award}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </GlassCard>
              </a>
            ))}
          </div>
        </section>

        {/* ── Education ───────────────────────────────────── */}
        <section aria-labelledby="edu-heading" className="space-y-6">
          <SectionLabel>Education</SectionLabel>
          <div className="space-y-3 max-w-lg">
            <GlassCard className="p-5 flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.08] shrink-0 mt-0.5">
                <CheckCircle2 size={16} className="text-[var(--color-text-muted)]" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Advanced Diploma: Computer Systems Technology, Systems Analyst
                </p>
                <p className="text-xs text-[var(--color-accent)]">Sheridan College</p>
                <p className="text-xs text-[var(--color-text-dim)]">Oakville, Ontario</p>
              </div>
            </GlassCard>
            <GlassCard className="p-5 flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/15 shrink-0 mt-0.5">
                <CheckCircle2 size={16} className="text-[var(--color-accent)]" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Velocity, Cornerstone Program
                </p>
                <p className="text-xs text-[var(--color-accent)]">University of Waterloo</p>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* ── Community ───────────────────────────────────── */}
        <section aria-labelledby="community-heading" className="space-y-6">
          <SectionLabel>Community</SectionLabel>
          <h2
            id="community-heading"
            className="sr-only"
          >
            Community memberships
          </h2>
          <div className="flex flex-wrap gap-3">
            {communities.map((c) => (
              <GlassCard key={c.name} className="px-4 py-3 flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/[0.08] shrink-0">
                  <Users size={13} className="text-[var(--color-text-muted)]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-text-primary)]">{c.name}</p>
                  <p className="text-xs text-[var(--color-text-dim)]">{c.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* ── Full Timeline ────────────────────────────────── */}
        <section aria-labelledby="timeline-heading" className="space-y-10">
          <div className="space-y-3">
            <SectionLabel>Experience</SectionLabel>
            <h2
              id="timeline-heading"
              className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] tracking-tight"
            >
              Career timeline.
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden="true"
              className="absolute left-[7px] top-2 bottom-0 w-px timeline-line"
            />

            <div className="space-y-10">
              {timeline.map((role, i) => (
                <div key={`${role.company}-${i}`} className="pl-8 relative">
                  {/* Dot */}
                  <div
                    aria-hidden="true"
                    className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
                      role.current
                        ? "bg-[var(--color-accent)] border-[var(--color-accent)] shadow-[0_0_10px_2px_rgba(249,115,22,0.4)]"
                        : "bg-[var(--color-background)] border-[var(--color-border)]"
                    }`}
                  />

                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                      <div>
                        <h3 className="text-sm font-bold text-[var(--color-text-primary)]">
                          {role.title}
                        </h3>
                        <p className="text-sm text-[var(--color-accent)]">{role.company}</p>
                      </div>
                      <div className="sm:text-right shrink-0">
                        <p className="text-xs text-[var(--color-text-muted)]">{role.period}</p>
                        <p className="text-xs text-[var(--color-text-dim)]">{role.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {role.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-[var(--color-text-muted)] leading-relaxed">
                          <span className="text-[var(--color-accent)]/50 mt-1 shrink-0">—</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
