import logoLight from "../shared/images/custospark-logo-light.png";
import logoDark from "../shared/images/custospark-logo.png";
import { cn } from "@/lib/cn";

interface LogoImageProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
}

const sizeClasses = {
  sm: "h-8",
  md: "h-10",
  lg: "h-18",
};

export function LogoImage({
  className,
  size = "md",
  variant = "dark",
}: LogoImageProps) {
  const logoSrc = variant === "light" ? logoLight : logoDark;

  return (
    <img
      src={logoSrc}
      alt="Custospark"
      className={cn(
        sizeClasses[size],
        "w-auto cursor-pointer rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-sm active:scale-95",
        className,
      )}
      title="Custospark"
      loading="lazy"
      aria-label="Custospark Logo"
    />
  );
}
