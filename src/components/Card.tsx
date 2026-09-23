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
 "bg-white border border-border rounded-lg shadow-card p-6",
 hover && "transition-colors duration-200 hover:border-border-strong hover:shadow-card-hover",
 className,
 )}
 {...props}
 >
 {children}
 </div>
 );
}
