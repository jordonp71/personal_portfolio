interface SkillChipProps {
  label: string;
  accent?: boolean;
  size?: "sm" | "md";
}

export default function SkillChip({ label, accent = false, size = "md" }: SkillChipProps) {
  const base = "inline-flex items-center rounded-full font-medium border transition-colors duration-200";
  const sizeClass = size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-xs";
  const colorClass = accent
    ? "bg-[var(--color-accent)]/10 border-[var(--color-accent)]/30 text-[var(--color-accent-light)]"
    : "bg-white/[0.04] border-white/[0.08] text-[var(--color-text-muted)] hover:border-white/20 hover:text-[var(--color-text-primary)]";

  return <span className={`${base} ${sizeClass} ${colorClass}`}>{label}</span>;
}
