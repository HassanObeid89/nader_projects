import { AboutPreview } from "@/components/AboutPreview";
import { ContactBlock } from "@/components/ContactBlock";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { getFeaturedProjects } from "@/content/projects";

export default function HomePage() {
  const featured = getFeaturedProjects(3);

  return (
    <>
      <Hero />
      <FeaturedWork projects={featured} />
      <AboutPreview />
      <ContactBlock />
    </>
  );
}
