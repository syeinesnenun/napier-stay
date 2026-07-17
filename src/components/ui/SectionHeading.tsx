import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      <h2
        id={id}
        className="font-headline text-2xl leading-snug text-deep-teal md:text-3xl"
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-3 flex items-center gap-2",
          align === "center" ? "justify-center" : "justify-start",
        )}
        aria-hidden="true"
      >
        <span className="h-px w-8 bg-lavender/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-burnt-orange/70" />
        <span className="h-px w-8 bg-lavender/50" />
      </div>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-deep-teal/75 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
