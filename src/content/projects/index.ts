import { copyCenter } from "./copy-center";
import { gazeboZanzibar } from "./gazebo-zanzibar";
import { livsmedel } from "./livsmedel";
import { mkwawaConstruction } from "./mkwawa-construction";
import { obeid } from "./obeid";
import { sannan } from "./sannan";
import { tanzania } from "./tanzania";
import type { Project } from "./types";
import { villa } from "./villa";

/**
 * Project registry — add new projects here after creating a content file.
 *
 * To add a project:
 * 1. Put images in public/projects/{slug}/
 * 2. Create src/content/projects/{slug}.ts exporting a Project
 * 3. Import and append it to `projects` below
 */
const projects: Project[] = [
  mkwawaConstruction,
  gazeboZanzibar,
  tanzania,
  sannan,
  obeid,
  villa,
  copyCenter,
  livsmedel,
];

export type { Project } from "./types";

export function getProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

/** Featured projects for the home page (mark with `featured: true`, typically 3). */
export function getFeaturedProjects(limit = 3): Project[] {
  return getProjects()
    .filter((p) => p.featured)
    .slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
