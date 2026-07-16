import { cn } from "@/lib/cn";

type SunburstPatternProps = {
  className?: string;
  opacity?: number;
};

export function SunburstPattern({
  className,
  opacity = 0.08,
}: SunburstPatternProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <svg
        className="absolute top-1/2 left-1/2 h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <line
            key={i}
            x1="200"
            y1="200"
            x2="200"
            y2="0"
            stroke="#B08D3E"
            strokeWidth="1"
            transform={`rotate(${(360 / 24) * i} 200 200)`}
          />
        ))}
        <circle cx="200" cy="200" r="80" stroke="#1C5B54" strokeWidth="1" />
        <circle cx="200" cy="200" r="140" stroke="#1C5B54" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
