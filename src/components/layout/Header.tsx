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

    const timeoutId = window.setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);

    document.addEventListener("keydown", handleEscape);
    return () => {
      window.clearTimeout(timeoutId);
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-warm-brown/25 bg-orange-wash/95 backdrop-blur-sm">
      <div ref={menuRef}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <a
            href="#home"
            className="font-headline text-lg text-deep-teal"
            onClick={() => setMenuOpen(false)}
          >
            {siteConfig.name}
          </a>

          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-olive/20 bg-ivory px-4 py-2 text-deep-teal transition-colors hover:border-burnt-orange/30 hover:bg-lavender-soft/30"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="text-sm">메뉴</span>
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
        </div>

        {menuOpen ? (
          <nav
            id="site-menu"
            className="border-t border-warm-brown/20 bg-paper shadow-sm"
            aria-label="사이트 메뉴"
          >
            <ul className="mx-auto flex max-w-6xl flex-col py-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 text-sm transition-colors md:px-6",
                      activeSection === item.href.slice(1)
                        ? "bg-lavender-soft/50 text-burnt-orange"
                        : "text-deep-teal/80 hover:bg-lavender-soft/30 hover:text-deep-teal",
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
        ) : null}
      </div>
    </header>
  );
}
