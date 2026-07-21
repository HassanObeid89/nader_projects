export type Project = {
  slug: string;
  title: string;
  style: string;
  tools: string[];
  summary: string;
  description: string;
  cover: string;
  images: string[];
  featured?: boolean;
  year?: number;
  order: number;
};
