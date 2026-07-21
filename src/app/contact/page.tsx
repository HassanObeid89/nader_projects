import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} for interior design and visualization projects.`,
};

export default function ContactPage() {
  return (
    <div className="px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-4xl">
        <div className="grid items-start gap-10 sm:grid-cols-[140px_1fr] sm:gap-12">
          <div className="relative mx-auto aspect-[3/4] w-28 overflow-hidden bg-paper-deep sm:mx-0 sm:w-full">
            <Image
              src={site.portrait}
              alt={site.name}
              fill
              className="object-cover object-top"
              sizes="140px"
            />
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
              Get in touch
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
              For new commissions, collaborations, or questions about an
              existing project — reach out directly.
            </p>
          </div>
        </div>

        <dl className="mt-12 grid gap-8 border-t border-line pt-10 sm:grid-cols-3 sm:gap-6">
          <div>
            <dt className="eyebrow">Email</dt>
            <dd className="mt-3">
              <a
                href={`mailto:${site.email}`}
                className="font-display text-xl text-ink transition hover:text-sage-deep sm:text-2xl"
              >
                {site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Phone</dt>
            <dd className="mt-3">
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="font-display text-xl text-ink transition hover:text-sage-deep sm:text-2xl"
              >
                {site.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Location</dt>
            <dd className="mt-3 font-display text-xl text-ink sm:text-2xl">
              {site.location}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
