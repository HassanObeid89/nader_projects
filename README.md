# Nader Obeid — Interior Design Portfolio

Modern Next.js portfolio for **Nader Obeid** (interior design & architectural visualization).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- Motion (`motion`)
- Content-driven projects (no CMS required)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a new project

1. Add images under `public/projects/{slug}/` (include a `cover.jpg`)
2. Create `src/content/projects/{slug}.ts` exporting a `Project`
3. Import and append it in `src/content/projects/index.ts`

Home shows up to 3 projects with `featured: true`. `/projects` lists the full archive; `/projects/{slug}` is the detail page (via `generateStaticParams`).

## Editing brand & contact

Update `src/content/site.ts` — name, bio, email, phone, and nav live there.
