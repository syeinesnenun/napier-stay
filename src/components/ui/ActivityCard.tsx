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
        "flex h-full flex-col overflow-hidden rounded-2xl border border-olive/10 bg-cream shadow-sm transition-colors hover:border-lavender/40",
        className,
      )}
    >
      <ImagePlaceholder
        src={src}
        alt={alt}
        label={title}
        aspectRatio="4/3"
        className="border-0 rounded-none"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-headline text-sm leading-snug text-deep-teal md:text-base">
          {title}
        </h3>
        <div className="mt-2 h-px w-8 bg-lavender/50" aria-hidden="true" />
        <p className="mt-3 text-sm leading-relaxed text-deep-teal/75">
          {description}
        </p>
      </div>
    </article>
  );
}
