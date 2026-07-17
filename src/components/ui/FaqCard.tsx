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
        "vintage-card rounded-xl border p-6 transition-colors hover:border-burnt-orange/35",
        className,
      )}
    >
      <h3 className="font-headline text-base leading-snug text-deep-teal md:text-lg">
        <span className="text-burnt-orange">Q.</span> {question}
      </h3>
      <div className="mt-2 h-px w-8 bg-burnt-orange/40" aria-hidden="true" />
      <p className="mt-3 text-sm leading-relaxed text-deep-teal/75 md:text-base">
        <span className="font-medium text-deep-teal">A.</span> {answer}
      </p>
    </article>
  );
}
