import { cn } from "@/lib/cn";

type ChevronDividerProps = {
  className?: string;
};

export function ChevronDivider({ className }: ChevronDividerProps) {
  return (
    <div
      className={cn("flex justify-center py-6", className)}
      aria-hidden="true"
    >
      <svg
        width="120"
        height="16"
        viewBox="0 0 120 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-gold"
      >
        <path
          d="M0 8 L20 2 L40 8 L60 2 L80 8 L100 2 L120 8"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
}
