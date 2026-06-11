import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "ghost" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 cursor-pointer",

        variant === "primary" && "bg-primary text-white hover:bg-primary-hover hover:shadow-glow",
        variant === "accent" && "bg-accent text-white hover:bg-accent-hover hover:shadow-glow",
        variant === "ghost" && "bg-transparent text-text-primary hover:bg-surface-light",
        variant === "outline" && "border border-primary-light text-primary-light hover:bg-primary-light hover:text-primary",
        variant === "white" && "bg-white text-primary hover:bg-white/90 hover:shadow-glow",

        size === "sm" && "px-4 py-2 text-body-sm",
        size === "md" && "px-6 py-3 text-body",
        size === "lg" && "px-8 py-4 text-body-lg",

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
