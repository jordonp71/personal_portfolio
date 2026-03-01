"use client";

import Link from "next/link";
import { forwardRef } from "react";

interface ButtonProps {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-light)] active:scale-[0.97] shadow-lg shadow-[var(--color-accent-dim)]",
  ghost:
    "border border-white/15 text-[var(--color-text-primary)] hover:border-[var(--color-accent)]/40 hover:bg-white/[0.03] active:scale-[0.97]",
  outline:
    "border border-[var(--color-accent)]/40 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 active:scale-[0.97]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      children,
      className = "",
      onClick,
      type = "button",
      disabled,
    },
    ref
  ) => {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      if (external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} type={type} onClick={onClick} disabled={disabled} className={classes}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
