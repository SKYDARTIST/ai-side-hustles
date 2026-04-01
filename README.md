# AI Side Hustles

A blog about making money with AI tools — guides, reviews, and analysis.

**[Live Site →](https://ai-side-hustles.vercel.app)**

---

## Tech Stack

- Next.js 15 + TypeScript
- Tailwind CSS v4
- MDX (blog posts)
- Google Analytics + AdSense
- Vercel

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Posts

Create `.mdx` files in `content/posts/`:

```mdx
---
title: "Your Post Title"
description: "SEO description"
date: "2026-02-13"
category: "Tools"
---

Your content here...
```

## Environment Variables

```bash
cp .env.example .env.local
```

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXXXXXXXX
```

## Project Structure

```
app/
  page.tsx              # Homepage
  blog/
    page.tsx            # Blog listing
    [slug]/page.tsx     # Blog post
content/posts/          # MDX blog posts
components/             # React components
```

---

Built by [@AakashBuild](https://x.com/AakashBuild)
