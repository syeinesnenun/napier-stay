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
        "vintage-card flex h-full w-full flex-col overflow-hidden rounded-xl border transition-colors hover:border-burnt-orange/35",
        className,
      )}
    >
      <ImagePlaceholder
        src={src}
        alt={alt}
        label={title}
        aspectRatio="4/3"
        vintage
        className="w-full shrink-0 rounded-none border-0 border-b border-warm-brown/15"
      />
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <h3 className="font-headline text-sm leading-snug text-deep-teal md:text-base">
          {title}
        </h3>
        <div className="mt-2 h-px w-8 bg-burnt-orange/40" aria-hidden="true" />
        <p className="mt-3 text-sm leading-relaxed text-deep-teal/80">
          {description}
        </p>
      </div>
    </article>
  );
}
