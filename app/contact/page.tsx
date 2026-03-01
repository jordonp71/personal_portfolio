"use client";

import { useState } from "react";
import { Mail, Linkedin, Calendar, Send, CheckCircle2 } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";

const contactMethods = [
  {
    icon: Calendar,
    label: "Book a Call",
    value: "Schedule a 30-min discovery call",
    href: "https://calendly.com/jordon-northagent",
    external: true,
    accent: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "jordon@northagent.ai",
    href: "mailto:jordon@northagent.ai",
    external: false,
    accent: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jordon-peters",
    href: "https://linkedin.com/in/jordon-peters",
    external: true,
    accent: false,
  },
];

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject || "Portfolio Inquiry");
    window.location.href = `mailto:jordon@northagent.ai?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-accent)]/50 focus:bg-[var(--color-surface-raised)] transition-colors duration-200";

  return (
    <main className="pt-24 pb-24 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto space-y-14">
        {/* Header */}
        <div className="space-y-5 max-w-2xl">
          <SectionLabel>Get in Touch</SectionLabel>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight">
            Let&rsquo;s build something
            <br />
            <span className="text-gradient-amber">together.</span>
          </h1>
          <p className="text-[var(--color-text-muted)] text-base leading-relaxed">
            Whether you have a project in mind, want to explore what AI can do for your operations, or just want to connect — I&rsquo;m happy to chat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact methods */}
          <div className="lg:col-span-2 space-y-4">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.external ? "_blank" : undefined}
                rel={method.external ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <GlassCard
                  hover
                  className={`p-5 flex items-center gap-4 ${
                    method.accent ? "border-[var(--color-accent)]/20" : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${
                      method.accent
                        ? "bg-[var(--color-accent)]/10 border-[var(--color-accent)]/20"
                        : "bg-white/[0.04] border-white/[0.08]"
                    }`}
                  >
                    <method.icon
                      size={17}
                      className={
                        method.accent ? "text-[var(--color-accent)]" : "text-[var(--color-text-muted)]"
                      }
                    />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-semibold ${
                        method.accent ? "text-[var(--color-accent)]" : "text-[var(--color-text-dim)]"
                      }`}
                    >
                      {method.label}
                    </p>
                    <p className="text-sm text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)] transition-colors">
                      {method.value}
                    </p>
                  </div>
                </GlassCard>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <GlassCard className="p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircle2 size={36} className="text-[var(--color-accent)]" />
                  <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    Opening your email app…
                  </h2>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Your message has been pre-filled. Hit send when ready.
                  </p>
                  <Button variant="ghost" onClick={() => setSubmitted(false)}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-medium text-[var(--color-text-muted)]">
                        Name <span className="text-[var(--color-accent)]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-medium text-[var(--color-text-muted)]">
                        Email <span className="text-[var(--color-accent)]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-medium text-[var(--color-text-muted)]">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Voice agent for my business"
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-medium text-[var(--color-text-muted)]">
                      Message <span className="text-[var(--color-accent)]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or what you're trying to automate…"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full gap-2">
                    <Send size={15} />
                    Send Message
                  </Button>

                  <p className="text-xs text-center text-[var(--color-text-dim)]">
                    Opens your email app with a pre-filled draft.
                  </p>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </main>
  );
}
