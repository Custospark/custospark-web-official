import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  variant?: "light" | "dark";
}

export function Card({ children, hover = true, variant = "light", className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg p-6",
        variant === "dark"
          ? "bg-white/20 backdrop-blur-md border border-white/10 shadow-card-dark text-white"
          : "bg-white border border-gray-200 shadow-card",
        hover && "transition-all duration-300 hover:scale-105",
        hover && variant === "dark" && "hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]",
        hover && variant === "light" && "hover:shadow-card-hover",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
