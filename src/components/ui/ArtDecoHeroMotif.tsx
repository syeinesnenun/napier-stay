import { cn } from "@/lib/cn";

type ArtDecoHeroMotifProps = {
  className?: string;
};

export function ArtDecoHeroMotif({ className }: ArtDecoHeroMotifProps) {
  return (
    <svg
      viewBox="0 0 360 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none text-olive", className)}
      aria-hidden="true"
    >
      {/* Stepped parapet — classic Art Deco skyline */}
      <path
        d="M130 28 H230 M118 40 H242 M106 52 H254"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
      />

      {/* Sunburst above central arch */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="180" y1="62" x2="180" y2="38" />
        <line x1="180" y1="62" x2="168" y2="42" />
        <line x1="180" y1="62" x2="192" y2="42" />
        <line x1="180" y1="62" x2="158" y2="48" />
        <line x1="180" y1="62" x2="202" y2="48" />
        <line x1="180" y1="62" x2="150" y2="58" />
        <line x1="180" y1="62" x2="210" y2="58" />
      </g>

      {/* Chevron frieze */}
      <path
        d="M108 68 L128 82 L148 68 L168 82 L188 68 L208 82 L228 68 L248 82 L268 68"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />

      {/* Main facade */}
      <rect
        x="78"
        y="52"
        width="204"
        height="148"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* Vertical piers */}
      <line x1="138" y1="52" x2="138" y2="200" stroke="currentColor" strokeWidth="2.5" />
      <line x1="222" y1="52" x2="222" y2="200" stroke="currentColor" strokeWidth="2.5" />

      {/* Three chunky arches — center taller */}
      <path
        d="M98 200 V138 Q98 112 118 112 Q138 112 138 138 V200"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M138 200 V118 Q138 82 180 82 Q222 82 222 118 V200"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M222 200 V138 Q222 112 242 112 Q262 112 262 138 V200"
        stroke="currentColor"
        strokeWidth="3"
      />

      {/* Base plinth */}
      <rect
        x="68"
        y="200"
        width="224"
        height="12"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}
