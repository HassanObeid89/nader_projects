"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { Project } from "@/content/projects";
import { ContainedImage } from "./ContainedImage";

/** Archive / listing card — image above, readable meta below. */
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="relative aspect-[3/2] overflow-hidden bg-paper-deep">
          <ContainedImage
            src={project.cover}
            alt={project.title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="transition duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-4">
          <p className="text-[11px] tracking-[0.16em] uppercase text-sage-deep">
            {project.style}
            <span className="mx-2 text-line">·</span>
            {project.tools.join(" · ")}
          </p>
          <h3 className="mt-1.5 font-display text-2xl tracking-tight text-ink transition group-hover:text-sage-deep">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.article>
  );
}
