"use client";

import { useState } from "react";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NavLink } from "@/components/layout/NavLink";
import { cn } from "@/lib/cn";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  return (
    <header className="sticky top-0 z-50 bg-dark-teal">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a
          href="#home"
          className="font-headline text-lg tracking-[0.2em] text-ivory uppercase"
        >
          {siteConfig.name}
        </a>

        <nav
          className="hidden items-center gap-4 md:flex"
          aria-label="메인 메뉴"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={activeSection === item.href.slice(1)}
            />
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-ivory md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "메뉴 닫기" : "메뉴 열기"}</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6 L18 18 M18 6 L6 18" />
            ) : (
              <>
                <path d="M4 7 H20" />
                <path d="M4 12 H20" />
                <path d="M4 17 H20" />
              </>
            )}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={cn(
          "border-t border-gold/20 bg-dark-teal md:hidden",
          menuOpen ? "block" : "hidden",
        )}
        aria-label="모바일 메뉴"
      >
        <ul className="flex flex-col px-4 py-3">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "block py-3 text-sm tracking-wide",
                  activeSection === item.href.slice(1)
                    ? "text-gold"
                    : "text-ivory/80",
                )}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
