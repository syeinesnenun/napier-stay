import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-dark-teal px-4 py-10 text-ivory/80 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <p className="font-headline text-sm tracking-[0.15em] text-ivory">
          {siteConfig.name}
        </p>
        <p className="text-sm">Napier, New Zealand</p>
        <p className="text-xs text-ivory/60">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
