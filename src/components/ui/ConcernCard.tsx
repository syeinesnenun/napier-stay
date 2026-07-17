import { cn } from "@/lib/cn";

type ConcernCardProps = {
  title: string;
  concern: string;
  answer: string;
  className?: string;
};

export function ConcernCard({
  title,
  concern,
  answer,
  className,
}: ConcernCardProps) {
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
      <p className="mt-3 text-sm font-medium leading-relaxed text-deep-teal md:text-base">
        {concern}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-deep-teal/80 md:text-base">
        {answer}
      </p>
    </article>
  );
}
