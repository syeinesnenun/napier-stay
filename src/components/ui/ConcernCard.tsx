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
        "rounded-2xl border border-olive/10 bg-cream p-6 shadow-sm transition-colors hover:border-lavender/40",
        className,
      )}
    >
      <h3 className="font-headline text-lg text-deep-teal">{title}</h3>
      <div className="mt-2 h-px w-8 bg-lavender/50" aria-hidden="true" />
      <p className="mt-3 text-sm font-medium leading-relaxed text-deep-teal md:text-base">
        {concern}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-deep-teal/75 md:text-base">
        {answer}
      </p>
    </article>
  );
}
