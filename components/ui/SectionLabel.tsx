interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)] ${className}`}
    >
      <span className="w-4 h-px bg-[var(--color-accent)]" />
      {children}
    </span>
  );
}
