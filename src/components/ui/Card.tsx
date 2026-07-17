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
        "rounded-2xl border border-olive/10 bg-cream p-6 shadow-sm transition-colors hover:border-lavender/40",
        className,
      )}
    >
      <h3 className="font-headline text-lg text-deep-teal">{title}</h3>
      <div className="mt-2 h-px w-8 bg-lavender/50" aria-hidden="true" />
      <p className="mt-3 text-sm leading-relaxed text-deep-teal/75 md:text-base">
        {description}
      </p>
    </article>
  );
}
