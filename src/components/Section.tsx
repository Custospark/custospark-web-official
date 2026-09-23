import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
 children: ReactNode;
 variant?: "default" | "alt";
 id?: string;
}

export function Section({ children, variant = "default", id, className, ...props }: SectionProps) {
 return (
 <section
 id={id}
 className={cn(
 "py-section",
 variant === "default" && "bg-white",
 variant === "alt" && "bg-surface-muted",
 className,
 )}
 {...props}
 >
 <div className="max-w-7xl mx-auto px-4 md:px-8">
 {children}
 </div>
 </section>
 );
}
