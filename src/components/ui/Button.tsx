import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary: "bg-burnt-orange text-cream hover:bg-burnt-orange/90",
  secondary: "bg-olive text-cream hover:bg-olive/90",
  outline:
    "border border-olive/30 bg-cream text-deep-teal hover:border-burnt-orange/40 hover:bg-lavender-soft/30",
};

export function Button({
  href,
  variant = "primary",
  children,
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-body text-sm transition-colors",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
