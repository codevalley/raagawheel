import Link from "next/link";

const LINKS = [
  { href: "/", label: "Wheel" },
  { href: "/ragas", label: "Ragas" },
  { href: "/learn/katapayadi", label: "Katapayadi" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-ink group-hover:text-accent transition-colors">
            RaagaWheel
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.18em] text-faint sm:inline">
            Melakarta systems
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-2.5 py-1.5 text-sm text-muted transition-colors hover:bg-bg-panel hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
