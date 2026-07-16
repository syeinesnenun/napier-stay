"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-dark-teal">
      <div
        ref={menuRef}
        className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6"
      >
        <a
          href="#home"
          className="font-headline text-lg tracking-[0.2em] text-ivory uppercase"
          onClick={() => setMenuOpen(false)}
        >
          {siteConfig.name}
        </a>

        <button
          type="button"
          className="flex items-center gap-2 rounded border border-gold/30 px-3 py-2 text-ivory transition-colors hover:border-gold/60"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-sm tracking-wide">메뉴</span>
          <svg
            width="20"
            height="20"
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

        <nav
          id="site-menu"
          className={cn(
            "absolute top-full right-4 left-4 mt-2 border border-gold/30 bg-dark-teal shadow-lg md:right-6 md:left-auto md:w-56",
            menuOpen ? "block" : "hidden",
          )}
          aria-label="사이트 메뉴"
        >
          <ul className="flex flex-col py-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 text-sm tracking-wide transition-colors",
                    activeSection === item.href.slice(1)
                      ? "bg-gold/10 text-gold"
                      : "text-ivory/80 hover:bg-ivory/5 hover:text-ivory",
                  )}
                  aria-current={
                    activeSection === item.href.slice(1) ? "page" : undefined
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
