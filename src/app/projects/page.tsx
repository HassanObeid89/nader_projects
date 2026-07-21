import type { Metadata } from "next";
import { ProjectGrid } from "@/components/ProjectGrid";
import { getProjects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `All interior design and visualization projects by ${site.name}.`,
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="pt-20 sm:pt-24">
      <ProjectGrid
        projects={projects}
        id="projects"
        eyebrow="Archive"
        title="All projects"
        description="Residential, commercial, and retail interiors — from traditional kitchens to contemporary living spaces and technical documentation."
      />
    </div>
  );
}
