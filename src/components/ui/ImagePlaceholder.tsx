import Image from "next/image";
import { cn } from "@/lib/cn";

type ImagePlaceholderProps = {
  src?: string;
  alt: string;
  label?: string;
  aspectRatio?: "square" | "4/3" | "16/9" | "3/4";
  className?: string;
  priority?: boolean;
  vintage?: boolean;
};

const aspectClasses = {
  square: "aspect-square",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-video",
  "3/4": "aspect-[3/4]",
};

export function ImagePlaceholder({
  src,
  alt,
  label,
  aspectRatio = "4/3",
  className,
  priority = false,
  vintage = false,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div
        className={cn(
          "relative w-full overflow-hidden bg-warm-brown/10",
          aspectClasses[aspectRatio],
          vintage && "vintage-photo",
          className,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden border border-warm-brown/20 bg-paper/60",
        aspectClasses[aspectRatio],
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <span className="relative z-10 text-sm text-deep-teal/60">
        {label ?? "Photo"}
      </span>
    </div>
  );
}
