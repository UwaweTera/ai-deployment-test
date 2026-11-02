import { navLinks, site } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span aria-hidden className="size-3 rounded-full bg-signal" />
          {site.name}
        </a>
        <div className="flex items-center gap-5 sm:gap-8">
          <ul className="flex items-center gap-5 text-sm text-muted sm:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={site.repoUrl}
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-80 sm:block"
          >
            View on GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
