import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden border-y border-line px-5 py-16 sm:px-8 sm:py-24">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
        <div className="relative mx-auto aspect-[3/4] w-44 overflow-hidden bg-paper-deep sm:w-52 lg:mx-0 lg:w-full">
          <Image
            src={site.portrait}
            alt={site.name}
            fill
            className="object-cover object-top"
            sizes="220px"
          />
        </div>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-12">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
              {site.about.headline}
            </h2>
          </div>
          <div>
            <p className="text-sm leading-relaxed text-ink-soft sm:text-base">
              {site.about.bio.slice(0, 260).trim()}…
            </p>
            <Link href="/about" className="btn-ghost mt-6">
              Read the full story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
