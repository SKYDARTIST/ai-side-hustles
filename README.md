# AI Side Hustles

> Guides, reviews, and analysis on making money with AI tools.

[![Live Site](https://img.shields.io/badge/Live%20Site-ai--side--hustles.vercel.app-black?style=for-the-badge&logo=vercel)](https://ai-side-hustles.vercel.app)

---

## Overview

A content-driven blog covering practical strategies for generating income with AI — freelancing, automation, tool reviews, and industry analysis.

**Categories:** Guides · Tutorials · Reviews · Articles

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 + TypeScript |
| Styling | Tailwind CSS v4 |
| Content | MDX |
| Analytics | Google Analytics 4 |
| Monetization | Google AdSense |
| Deployment | Vercel |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Environment Variables

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Google Analytics measurement ID |
| `NEXT_PUBLIC_ADSENSE_ID` | Google AdSense publisher ID |

---

## Writing Posts

Add `.mdx` files to `content/posts/`:

```mdx
---
title: "Post Title"
description: "SEO meta description (under 160 chars)"
date: "2026-01-01"
category: "Tools"
---

Content here...
```

**Available categories:** `Tools` · `Guides` · `Tutorials` · `Reviews` · `Articles`

---

## Project Structure

```
├── app/
│   ├── page.tsx              # Homepage
│   ├── blog/
│   │   ├── page.tsx          # Blog listing with category filter
│   │   └── [slug]/page.tsx   # Individual post
│   └── sitemap.ts            # Dynamic sitemap
├── content/
│   └── posts/                # MDX blog posts
├── components/               # Shared React components
└── public/                   # Static assets
```

---

Built by [@AakashBuild](https://x.com/AakashBuild)
