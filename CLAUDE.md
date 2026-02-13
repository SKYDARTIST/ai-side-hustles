# AI Side Hustles - Development Notes

## What We Learned (February 14, 2026)

### Google AdSense Integration
- **Created**: `public/ads.txt` file with publisher ID `ca-pub-9599392402518869`
- **Key Learning**: AdSense verification requires the script to be server-rendered in the HTML head, not client-only
- **Verification URL**: https://ai-side-hustles.vercel.app/ads.txt
- **Status**: Awaiting approval from Google AdSense

### SEO Optimization
Implemented comprehensive SEO across the site:

#### Metadata Enhancements
- **Added metadataBase**: `https://ai-side-hustles.vercel.app` for proper URL resolution
- **Title templates**: Dynamic titles with `%s | AI Side Hustles` format
- **Canonical URLs**: Proper canonical tags for duplicate content prevention
- **Keywords array**: Target keywords for SEO ranking

#### Social Media Integration
- **Open Graph Protocol**: Full OG tags for Facebook/LinkedIn sharing
  - Type, locale, URL, siteName, title, description, images (1200x630)
- **Twitter Cards**: Summary large image cards with proper metadata
  - Card type, creator (@Cryptobullaaa), images
- **JSON-LD Structured Data**: Schema.org Article markup for rich snippets
  - Headline, description, author, publisher, dates, images

#### Robots & Crawlers
- **robots.txt**: Created for crawler guidance
- **sitemap.ts**: Dynamic sitemap generation for all blog posts
- **Google Bot directives**: Max video preview, image preview, snippet settings

### Content Creation - The Jio Article
Created comprehensive article: "The Jio Moment of AI: How 2026 Became the Year Intelligence Turned Into a Commodity"

#### Research Process
- Conducted deep web research for 2026 pricing data
- Verified all pricing: DeepSeek ($0.27), GPT-5 ($1.25), Claude Opus 4.6 ($5), Gemini Flash-Lite ($0.10)
- Found 10+ authoritative sources (Epoch AI, Stanford AI Index, industry reports)
- 2,500+ words with data-driven analysis

#### Article Structure
- **Category**: "articles" (for long-form analysis pieces)
- **Format**: MDX with embedded links and formatting
- **Image**: `/images/jio-moment-ai.png`
- **Publishing**: February 14, 2026

### Articles Section Architecture
- **Created new category**: "articles" for in-depth analysis (separate from guides, tutorials, reviews)
- **Navigation placement**: Added to both main layout.tsx and homepage page.tsx
- **URL structure**: `/blog?category=articles`
- **Category grid**: Added to "CHOOSE YOUR PATH" section with custom description

### MDX Syntax Debugging
Fixed critical MDX parsing errors:

#### Issue 1: Numbered Headings
- **Error**: `Unexpected character '5' (U+0035) before name`
- **Cause**: MDX cannot parse headings starting with numbers like `### 1. Title`
- **Solution**: Removed numbers from headings, used descriptive titles instead

#### Issue 2: Less Than Symbol
- **Error**: Same parsing error
- **Cause**: `<5%` interpreted as HTML tag opening (tags can't start with numbers)
- **Solution**: Changed to "less than 5%" in plain text

#### Issue 3: Em Dashes
- **Problem**: Em dashes (—) in content caused formatting issues
- **Solution**: Replaced with colons, commas, or removed entirely
- **Locations fixed**: 4 instances in the Jio article

### Navigation Implementation
Added Articles links to:
1. **app/layout.tsx** (line 52): Global navigation across all pages
2. **app/page.tsx** (line 26): Homepage-specific navigation

**Order**: GUIDES → ARTICLES → TOOLS → START NOW

### Git Workflow
All changes committed with proper messages:
```bash
git add <files>
git commit -m "Descriptive message

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
git push
```

### Key Technical Learnings

#### Next.js Metadata API
- Use `metadataBase` for absolute URL resolution
- Title templates for consistent branding
- Per-page metadata overrides via `generateMetadata()`

#### MDX Best Practices
- Avoid starting headings with numbers
- Be careful with `<` symbol (escape or use words)
- Em dashes (—) can cause issues, prefer regular punctuation
- Always test MDX locally before deploying

#### SEO Checklist
✅ Metadata (title, description, keywords)
✅ Open Graph tags
✅ Twitter Cards
✅ JSON-LD structured data
✅ Canonical URLs
✅ robots.txt
✅ sitemap.xml
✅ Alt text for images
✅ Semantic HTML

#### Content Strategy
- **Guides**: How-to tutorials and step-by-step instructions
- **Tutorials**: Detailed learning resources
- **Reviews**: Tool comparisons and honest assessments
- **Articles**: Long-form analysis and industry insights

### File Structure
```
ai-side-hustles/
├── app/
│   ├── layout.tsx (global nav + metadata)
│   ├── page.tsx (homepage with local nav)
│   ├── blog/
│   │   ├── page.tsx (blog listing with category filter)
│   │   └── [slug]/page.tsx (individual posts)
│   └── sitemap.ts (dynamic sitemap)
├── content/
│   └── posts/
│       └── jio-moment-ai-2026.mdx
├── public/
│   ├── ads.txt (AdSense verification)
│   ├── robots.txt
│   └── images/
└── components/
    ├── GoogleAnalytics.tsx
    └── GoogleAdSense.tsx
```

### Performance Considerations
- Images: Using Next.js Image component with proper sizing
- Font loading: Inter font with swap display strategy
- CSS: Tailwind with JIT compilation
- Build: Next.js 16 with Turbopack for faster builds

### Deployment
- **Platform**: Vercel
- **Auto-deploy**: Every push to main branch
- **Build time**: ~2-3 minutes
- **Domain**: https://ai-side-hustles.vercel.app

### Next Steps
- [ ] Wait for AdSense approval
- [ ] Monitor SEO rankings with Google Search Console
- [ ] Test social media sharing (OG images)
- [ ] Create more articles for the Articles section
- [ ] Generate actual jio-moment-ai.png image

### Commands Reference
```bash
# Development
npm run dev

# Build
npm run build

# Git workflow
git status
git add .
git commit -m "message"
git push

# Stop terminals
# (use TaskStop tool in Claude Code)
```

### Important Notes
- Always verify pricing data with multiple sources
- Check MDX syntax locally before pushing
- Articles section is for long-form analysis (1500+ words)
- Keep navigation consistent across all pages
- Use semantic commit messages with co-author attribution

---

**Last Updated**: February 14, 2026
**Author**: Aakash (Cryptobulla)
**AI Assistant**: Claude Sonnet 4.5
