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
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-burnt-orange/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-olive/18 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-soft/40 blur-3xl" />
    </div>
  );
}
