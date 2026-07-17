import { cn } from "@/lib/cn";

type ArtDecoHeroMotifProps = {
  className?: string;
};

const RAYS = [-72, -48, -24, 0, 24, 48, 72] as const;

function rayPath(deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  const cx = 100;
  const cy = 128;
  const len = 78;
  return `M${cx} ${cy} L${(cx + len * Math.cos(rad)).toFixed(1)} ${(cy + len * Math.sin(rad)).toFixed(1)}`;
}

export function ArtDecoHeroMotif({ className }: ArtDecoHeroMotifProps) {
  return (
    <svg
      viewBox="0 0 200 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
    >
      <path
        d="M88 28h24M80 36h40M72 44h56"
        stroke="#3a3428"
        strokeWidth="4"
        strokeLinecap="square"
      />

      <circle
        cx="100"
        cy="112"
        r="82"
        stroke="#3a3428"
        strokeWidth="3"
        opacity="0.55"
      />

      <path
        d="M38 128A62 62 0 0 1 162 128"
        fill="#b85c32"
        fillOpacity="0.24"
      />
      <path
        d="M38 128A62 62 0 0 1 162 128"
        stroke="#3a3428"
        strokeWidth="4"
      />
      <line
        x1="38"
        y1="128"
        x2="162"
        y2="128"
        stroke="#3a3428"
        strokeWidth="4"
      />

      <g stroke="#964a28" strokeWidth="3.5" strokeLinecap="round">
        {RAYS.map((deg) => (
          <path key={deg} d={rayPath(deg)} />
        ))}
      </g>

      <path
        d="M86 196h28M78 204h44M70 212h60"
        stroke="#3a3428"
        strokeWidth="3.5"
        strokeLinecap="square"
        opacity="0.6"
      />
    </svg>
  );
}
