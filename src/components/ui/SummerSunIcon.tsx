import { cn } from "@/lib/cn";

type SummerSunIconProps = {
  className?: string;
};

export function SummerSunIcon({ className }: SummerSunIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <circle cx="8" cy="8" r="3.25" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
        <line x1="8" y1="1.5" x2="8" y2="3.25" />
        <line x1="8" y1="12.75" x2="8" y2="14.5" />
        <line x1="1.5" y1="8" x2="3.25" y2="8" />
        <line x1="12.75" y1="8" x2="14.5" y2="8" />
        <line x1="3.4" y1="3.4" x2="4.65" y2="4.65" />
        <line x1="11.35" y1="11.35" x2="12.6" y2="12.6" />
        <line x1="3.4" y1="12.6" x2="4.65" y2="11.35" />
        <line x1="11.35" y1="4.65" x2="12.6" y2="3.4" />
      </g>
    </svg>
  );
}
