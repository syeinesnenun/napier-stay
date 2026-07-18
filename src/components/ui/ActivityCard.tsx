import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SummerSunIcon } from "@/components/ui/SummerSunIcon";
import { cn } from "@/lib/cn";

type ActivityCardProps = {
  title: string;
  description: string;
  alt: string;
  src?: string;
  summerOnly?: boolean;
  className?: string;
};

export function ActivityCard({
  title,
  description,
  alt,
  src,
  summerOnly = false,
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
        {summerOnly ? (
          <p className="mt-2 inline-flex items-center gap-1 text-xs text-burnt-orange">
            <SummerSunIcon className="h-3.5 w-3.5" />
            <span>여름 시즌 한정</span>
          </p>
        ) : null}
      </div>
    </article>
  );
}
