import { cn } from "@/lib/cn";

type CardProps = {
  title: string;
  description: string;
  className?: string;
};

export function Card({ title, description, className }: CardProps) {
  return (
    <article
      className={cn(
        "border border-gold/30 bg-ivory/60 p-6 transition-colors hover:border-gold/60",
        className,
      )}
    >
      <h3 className="font-headline text-lg tracking-wide text-deep-teal uppercase">
        {title}
      </h3>
      <div className="mt-2 h-px w-8 bg-gold" aria-hidden="true" />
      <p className="mt-3 text-sm leading-relaxed text-deep-teal/80 md:text-base">
        {description}
      </p>
    </article>
  );
}
