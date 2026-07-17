"use client";

import { cn } from "@/lib/cn";

type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
};

export function NavLink({ href, label, isActive, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "relative px-2 py-1 text-sm transition-colors",
        isActive ? "text-burnt-orange" : "text-deep-teal/80 hover:text-deep-teal",
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
      {isActive ? (
        <span
          className="absolute -bottom-1 left-0 h-px w-full bg-burnt-orange/60"
          aria-hidden="true"
        />
      ) : null}
    </a>
  );
}
