import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
 variant?: "primary" | "secondary" | "ghost" | "outline";
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
 "inline-flex items-center justify-center font-semibold rounded-md transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",

 variant === "primary" && "bg-primary text-white hover:bg-primary-hover border border-primary",
 variant === "secondary" && "bg-white text-primary border border-border-strong hover:bg-primary-subtle",
 variant === "ghost" && "bg-transparent text-text-secondary hover:bg-surface-muted hover:text-ink border border-transparent",
 variant === "outline" && "bg-white text-primary border border-primary hover:bg-primary-soft",

 size === "sm" && "px-4 py-2 text-body-sm",
 size === "md" && "px-6 py-2.5 text-body-sm",
 size === "lg" && "px-8 py-3 text-body",

 className,
 )}
 {...props}
 >
 {children}
 </button>
 );
}
