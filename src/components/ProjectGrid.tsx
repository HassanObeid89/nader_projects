import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";

type ProjectGridProps = {
  projects: Project[];
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
};

export function ProjectGrid({
  projects,
  id = "work",
  eyebrow = "Selected work",
  title = "Projects shaped in plan and light",
  description,
  viewAllHref,
  viewAllLabel = "View all projects",
}: ProjectGridProps) {
  return (
    <section id={id} className="scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-5 border-b border-line pb-8 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
            )}
          </div>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="btn-ghost shrink-0 self-start sm:self-auto"
            >
              {viewAllLabel} →
            </Link>
          )}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
