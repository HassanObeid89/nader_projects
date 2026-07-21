import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-ink text-paper">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-14">
        <div>
          <p className="font-display text-3xl tracking-tight">{site.name}</p>
          <p className="mt-2 max-w-xs text-sm text-paper/65">{site.role}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-paper/75 sm:items-end">
          <div className="flex flex-wrap gap-5 text-xs tracking-[0.14em] uppercase">
            {site.nav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-paper">
                {item.label}
              </Link>
            ))}
          </div>
          <a href={`mailto:${site.email}`} className="mt-2 hover:text-paper">
            {site.email}
          </a>
          <p className="text-xs text-paper/45">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
