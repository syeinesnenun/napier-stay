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
        className="font-headline text-3xl tracking-[0.15em] text-deep-teal uppercase md:text-4xl"
      >
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 flex items-center gap-2",
          align === "center" ? "justify-center" : "justify-start",
        )}
        aria-hidden="true"
      >
        <span className="h-px w-12 bg-gold" />
        <span className="text-gold">◆</span>
        <span className="h-px w-12 bg-gold" />
      </div>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-2xl text-base text-deep-teal/80 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
