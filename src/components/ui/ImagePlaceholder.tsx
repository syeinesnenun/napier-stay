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
          "relative overflow-hidden border border-gold/30",
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
        "relative flex items-center justify-center overflow-hidden border border-gold/40 bg-ivory",
        aspectClasses[aspectRatio],
        className,
      )}
      role="img"
      aria-label={alt}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #B08D3E 0, #B08D3E 1px, transparent 1px, transparent 12px)",
        }}
      />
      <span className="relative z-10 font-headline text-sm tracking-[0.2em] text-deep-teal/70 uppercase">
        {label ?? "Photo"}
      </span>
    </div>
  );
}
