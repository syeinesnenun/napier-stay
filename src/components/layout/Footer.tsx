import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-olive/15 bg-olive-wash px-4 py-10 text-deep-teal/75 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center">
        <p className="font-headline text-base text-deep-teal">
          {siteConfig.name}
        </p>
        <p className="text-sm">Napier, New Zealand</p>
        <p className="text-xs text-deep-teal/50">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
