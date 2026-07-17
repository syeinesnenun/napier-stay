import { cn } from "@/lib/cn";

type SunburstPatternProps = {
  className?: string;
  opacity?: number;
};

export function SunburstPattern({
  className,
  opacity = 1,
}: SunburstPatternProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-lavender/25 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-burnt-orange/15 blur-3xl" />
      <div className="absolute top-1/3 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-lavender-soft/40 blur-2xl" />
    </div>
  );
}
