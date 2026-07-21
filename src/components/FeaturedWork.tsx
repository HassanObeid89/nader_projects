"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { ContainedImage } from "./ContainedImage";

/**
 * Featured work: equal-weight tiles, labels under images.
 * Easier to scan and compare than overlays or asymmetric mega-tiles.
 */
export function FeaturedWork({ projects }: { projects: Project[] }) {
  return (
    <section id="featured" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 border-b border-line pb-8 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-lg">
            <p className="eyebrow">Featured</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Selected interiors
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              A quick look at the range — open the archive for the full set.
            </p>
          </div>
          <Link href="/projects" className="btn-ghost self-start sm:self-auto">
            View all projects →
          </Link>
        </div>

        <ul className="grid gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.li
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="relative aspect-[3/2] overflow-hidden bg-paper-deep">
                  <ContainedImage
                    src={project.cover}
                    alt={project.title}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="transition duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] tracking-[0.16em] uppercase text-sage-deep">
                      {String(index + 1).padStart(2, "0")}
                      <span className="mx-2 text-line">/</span>
                      {project.style}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl tracking-tight text-ink transition group-hover:text-sage-deep">
                      {project.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink-soft">
                      {project.summary}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-sm text-ink-soft transition group-hover:translate-x-0.5 group-hover:text-ink"
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
