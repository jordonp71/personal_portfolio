import Link from "next/link";
import { Mail, Linkedin, Calendar } from "lucide-react";

const links = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const social = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/jordon-peters",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:jordon@northagent.ai",
    icon: Mail,
  },
  {
    label: "Book a Call",
    href: "https://calendly.com/jordon-northagent",
    icon: Calendar,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div className="space-y-3 max-w-xs">
            <p className="text-sm font-bold text-[var(--color-text-primary)]">
              <span className="text-[var(--color-accent)]">J</span>ordon Peters
            </p>
            <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
              Founder @ North Agent. Building AI agents and automation systems for service businesses across Canada.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-wider uppercase text-[var(--color-text-dim)] mb-1">
              Navigate
            </p>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold tracking-wider uppercase text-[var(--color-text-dim)] mb-1">
              Connect
            </p>
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              >
                <s.icon size={13} />
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-xs text-[var(--color-text-dim)]">
            © {new Date().getFullYear()} Jordon Peters · North Agent
          </p>
          <p className="text-xs text-[var(--color-text-dim)]">
            Built with Next.js · Toronto, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
