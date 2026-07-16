import { cn } from "@/lib/cn";

type FaqCardProps = {
  question: string;
  answer: string;
  className?: string;
};

export function FaqCard({ question, answer, className }: FaqCardProps) {
  return (
    <article
      className={cn(
        "border border-gold/30 bg-ivory/60 p-6 transition-colors hover:border-gold/60",
        className,
      )}
    >
      <h3 className="font-headline text-base leading-snug tracking-wide text-deep-teal md:text-lg">
        <span className="text-gold">Q.</span> {question}
      </h3>
      <div className="mt-2 h-px w-8 bg-gold" aria-hidden="true" />
      <p className="mt-3 text-sm leading-relaxed text-deep-teal/80 md:text-base">
        <span className="font-medium text-deep-teal">A.</span> {answer}
      </p>
    </article>
  );
}
