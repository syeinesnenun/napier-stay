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
        "vintage-card rounded-xl border p-6 transition-colors hover:border-burnt-orange/35",
        className,
      )}
    >
      <h3 className="font-headline text-lg text-deep-teal">{title}</h3>
      <div className="mt-2 h-px w-8 bg-burnt-orange/40" aria-hidden="true" />
      <p className="mt-3 text-sm leading-relaxed text-deep-teal/75 md:text-base">
        {description}
      </p>
    </article>
  );
}
