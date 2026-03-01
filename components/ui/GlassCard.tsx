interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  glow = false,
}: GlassCardProps) {
  const base = "glass-card rounded-2xl";
  const hoverClass = hover
    ? "transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/25 hover:bg-white/[0.04]"
    : "";
  const glowClass = glow ? "hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.2)]" : "";

  return (
    <div className={`${base} ${hoverClass} ${glowClass} ${className}`}>
      {children}
    </div>
  );
}
