import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGallery } from "@/components/ProjectGallery";
import {
  getProjectBySlug,
  getProjectSlugs,
  getProjects,
} from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.cover],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const all = getProjects();
  const index = all.findIndex((p) => p.slug === slug);
  const prev = all[index - 1];
  const next = all[index + 1];

  return (
    <article className="px-5 pb-16 pt-24 sm:px-8 sm:pb-24 sm:pt-28">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/projects"
          className="text-xs tracking-wide text-ink-soft transition hover:text-ink"
        >
          ← All projects
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-14 xl:gap-16">
          <header className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">
              {project.style}
              <span className="mx-2 opacity-40">·</span>
              {project.tools.join(" · ")}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-soft sm:text-base">
              {project.description}
            </p>
            <p className="mt-6 text-sm text-ink-soft/80">{project.summary}</p>
          </header>

          <div className="min-w-0 max-w-full">
            <ProjectGallery images={project.images} title={project.title} />
          </div>
        </div>

        <nav className="mt-14 flex items-center justify-between border-t border-line pt-6 text-sm">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group max-w-[45%] text-ink-soft transition hover:text-ink"
            >
              <span className="block text-[10px] tracking-[0.18em] uppercase opacity-60">
                Previous
              </span>
              <span className="font-display text-lg sm:text-xl">
                ← {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group max-w-[45%] text-right text-ink-soft transition hover:text-ink"
            >
              <span className="block text-[10px] tracking-[0.18em] uppercase opacity-60">
                Next
              </span>
              <span className="font-display text-lg sm:text-xl">
                {next.title} →
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}
