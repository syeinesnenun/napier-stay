import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/cn";

type ActivityCardProps = {
  title: string;
  description: string;
  alt: string;
  src?: string;
  className?: string;
};

export function ActivityCard({
  title,
  description,
  alt,
  src,
  className,
}: ActivityCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden border border-gold/30 bg-ivory/60 transition-colors hover:border-gold/60",
        className,
      )}
    >
      <div
        className="h-1 bg-gradient-to-r from-gold via-coral to-deep-teal"
        aria-hidden="true"
      />
      <ImagePlaceholder
        src={src}
        alt={alt}
        label={title}
        aspectRatio="4/3"
        className="border-0"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-headline text-sm leading-snug tracking-wide text-deep-teal uppercase md:text-base">
          {title}
        </h3>
        <div className="mt-2 h-px w-8 bg-gold" aria-hidden="true" />
        <p className="mt-3 text-sm leading-relaxed text-deep-teal/80">
          {description}
        </p>
      </div>
    </article>
  );
}
