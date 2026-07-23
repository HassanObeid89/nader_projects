export const site = {
  name: "Nader Obeid",
  role: "Interior Design & Architectural Visualization",
  tagline: "Spaces shaped with clarity, craft, and quiet luxury.",
  description:
    "Portfolio of Nader Obeid — interior designer and architectural visualizer creating contemporary and traditional living spaces through AutoCAD and 3D Max.",
  url: "https://naderobeidprojects.web.app",
  /** Update these when you have the real contact details */
  email: "hello@naderobeid.com",
  phone: "+46 XXX XXX XXX",
  location: "Sweden",
  portrait: "/about/nader-obeid.jpg",
  nav: [
    { label: "Work", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [] as { label: string; href: string }[],
  about: {
    headline: "Designing rooms people want to stay in",
    bio: `I'm an interior designer and architectural visualizer with a focus on residential and commercial spaces that feel both intentional and livable. My work spans contemporary interiors, traditional Lebanese-inspired kitchens and salons, urban modern apartments, and technical planning for commercial fit-outs.

Working primarily in AutoCAD and 3D Max, I move from measured drawings and sections to photoreal visualizations — so clients can see material, light, and proportion before construction begins. My projects range from villa renovations and kitchen redesigns to industrial copy-center planning and Scandinavian retail interiors.

Whether the brief calls for warm traditional detailing or clean contemporary lines, my approach stays the same: clear spatial logic, careful finishes, and visuals that communicate the finished space with confidence.`,
    approach: [
      {
        title: "Listen & measure",
        body: "Every project starts with the site, the brief, and how people actually move through the room.",
      },
      {
        title: "Draw & refine",
        body: "Plans, sections, and elevations in AutoCAD lock in structure before finishes are chosen.",
      },
      {
        title: "Visualize & deliver",
        body: "3D Max renders bring materials and light to life so decisions feel grounded, not speculative.",
      },
    ],
  },
} as const;
