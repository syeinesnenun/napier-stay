import Image from "next/image";
import { cn } from "@/lib/cn";

type ImagePlaceholderProps = {
  src?: string;
  alt: string;
  label?: string;
  aspectRatio?: "square" | "4/3" | "16/9" | "3/4";
  className?: string;
  priority?: boolean;
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
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border border-olive/10",
          aspectClasses[aspectRatio],
          className,
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-xl border border-olive/10 bg-lavender-soft/40",
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
