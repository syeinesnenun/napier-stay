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
  primary: "bg-coral text-ivory hover:bg-coral/90",
  secondary: "bg-deep-teal text-ivory hover:bg-deep-teal/90",
  outline:
    "border border-gold bg-transparent text-deep-teal hover:bg-gold/10",
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
    "inline-flex items-center justify-center px-6 py-3 font-body text-sm tracking-wide transition-colors",
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
