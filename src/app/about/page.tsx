import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: site.about.bio.slice(0, 160),
};

export default function AboutPage() {
  return (
    <div className="px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)] lg:gap-16">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden bg-paper-deep lg:mx-0 lg:sticky lg:top-28">
            <Image
              src={site.portrait}
              alt={site.name}
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 1024px) 384px, 36vw"
            />
          </div>

          <div>
            <p className="eyebrow">About</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
              {site.about.headline}
            </h1>
            <p className="mt-4 text-lg text-ink-soft">{site.name}</p>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-ink-soft sm:text-base">
              {site.about.bio.split("\n\n").map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <h2 className="mt-14 font-display text-3xl tracking-tight text-ink">
              Approach
            </h2>
            <ol className="mt-8 space-y-7">
              {site.about.approach.map((step, i) => (
                <li
                  key={step.title}
                  className="grid gap-2 border-t border-line pt-6 sm:grid-cols-[3.5rem_1fr]"
                >
                  <span className="font-display text-2xl text-sage">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-medium text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Link href="/contact" className="btn-primary mt-12">
              Start a conversation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
