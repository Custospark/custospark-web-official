import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
}

export function Card({ children, hover = true, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface-light/50 backdrop-blur-lg border border-white/10 rounded-lg p-6",
        hover && "transition-all duration-300 hover:scale-105 hover:shadow-card-hover",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
