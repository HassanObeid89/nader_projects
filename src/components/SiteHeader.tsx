import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 pt-4 sm:px-8">
        <div className="flex h-14 items-center justify-between border border-line/80 bg-paper/85 px-4 shadow-[0_8px_30px_rgba(20,18,16,0.06)] backdrop-blur-xl sm:px-5">
          <Link
            href="/"
            aria-label={site.name}
            className="group inline-flex h-12 w-12 shrink-0 items-center justify-center sm:h-12 sm:w-12"
          >
            <Logo className="h-11 w-11 sm:h-12 sm:w-12" variant="light" />
          </Link>
          <nav className="flex items-center gap-5 text-xs tracking-[0.12em] uppercase text-ink-soft sm:gap-7">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
