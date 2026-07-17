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
      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-lavender/60" />
        <span className="h-1.5 w-1.5 rounded-full bg-burnt-orange/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-olive/40" />
      </div>
    </div>
  );
}
