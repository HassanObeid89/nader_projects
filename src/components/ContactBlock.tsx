import Link from "next/link";
import { site } from "@/content/site";

export function ContactBlock() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden bg-ink px-6 py-12 text-paper sm:px-10 sm:py-16 md:px-14">
        <p className="text-[0.7rem] tracking-[0.22em] uppercase text-paper/55">
          Contact
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Let’s shape your next space
        </h2>
        <p className="mt-4 max-w-md text-sm text-paper/65 sm:text-base">
          Available for residential and commercial interior design, planning,
          and 3D visualization.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}`}
            className="bg-paper px-5 py-3 text-xs tracking-[0.08em] text-ink transition hover:bg-blush-soft"
          >
            Email {site.name.split(" ")[0]}
          </a>
          <Link
            href="/contact"
            className="border border-paper/35 px-5 py-3 text-xs tracking-[0.08em] text-paper transition hover:bg-paper/10"
          >
            Contact details
          </Link>
        </div>
      </div>
    </section>
  );
}
