import Link from "next/link";

const NAV = [
  { href: "/melakarta", label: "Wheel" },
  { href: "/ragas", label: "Ragas" },
  { href: "/janya", label: "Janyas" },
  { href: "/swaras", label: "Swaras" },
  { href: "/katapayadi", label: "Katapayadi" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-night/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4">
        <Link href="/" className="display text-xl tracking-tight text-ivory">
          Raga<span className="text-zari-hi">Wheel</span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-3 text-sm text-ivory-mut sm:gap-5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
