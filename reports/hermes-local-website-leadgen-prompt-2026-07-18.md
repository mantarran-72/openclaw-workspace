# Hermes Prompt: Local Website Leadgen + Mockup Pipeline

Use this prompt with Hermes when you want a practical prospect list and mockup-ready data.

## Prompt

Goal: Find local businesses in Napa/Sonoma/North Bay that may benefit from a better owned website, quote flow, booking flow, or local SEO presence. Start with tree service companies.

Use only public information and approved APIs. If `YELP_API_KEY` is available in the environment, use Yelp Fusion/Places API for Yelp business discovery, business details, photos, ratings, hours, categories, and review excerpts. Do not scrape Yelp pages directly.

Target geography:

- Santa Rosa, CA
- Windsor, CA
- Sebastopol, CA
- Rohnert Park, CA
- Cotati, CA
- Petaluma, CA
- Healdsburg, CA
- Sonoma, CA
- Napa, CA
- Calistoga, CA
- St. Helena, CA
- Yountville, CA

Primary category:

- Tree Services / `treeservices`

Secondary categories for later batches:

- landscapers
- fence contractors
- pressure washing
- painters
- junk removal
- garage door services
- roofers
- pest control
- small restaurants/cafes
- beauty salons
- health practices
- tourism/hospitality
- local B2B services

For each candidate, check whether they show one or more lead signals:

- No official website found
- Social-only presence, such as Facebook/Instagram/Yelp/Google profile only
- Website exists but appears outdated, thin, broken, slow, non-mobile-friendly, or hard to use
- Missing HTTPS
- Broken pages or dead links
- Old copyright year, stale news, or outdated hours
- No clear contact path
- No quote/request form where it would make sense
- No booking/reservation flow where it would make sense
- No clear service pages
- No pricing/service explanation where helpful
- Weak local SEO: poor title, unclear city/service area, no service pages
- Missing trust basics: phone, service area, map, photos, reviews/testimonials, business info

Important judgment rule:

Do not judge only by visual design. A simple website is fine if it works well. Prioritize businesses where a better website could plausibly create more calls, bookings, reservations, quote requests, or trust.

Before marking `no official website found`, verify with at least these searches:

- `[business name] [town]`
- `[business category] [town]`
- `[business name]`
- business name without legal suffix
- any short name visible from Yelp/Google listing

For each lead, return:

- Business name
- Category
- Location
- Website status: `missing`, `weak`, `outdated`, `broken`, `social-only`, or `unknown`
- Official website, if found
- Yelp URL
- Google Maps or directory URL, if found
- Public contact details
- Yelp rating
- Yelp review count
- Yelp photo count / available photo URLs
- Recent review snippets, if API allows
- Current website features:
  - appointment booking / reservation
  - contact form
  - quote/request form
  - online ordering / ecommerce
  - menu / pricing
  - reviews/testimonials
  - service pages
  - social links
  - map/location
- Missing or weak features
- Evidence, with URLs
- Website improvement angle
- Respectful outreach angle
- Opportunity score 1-5
- Mockup readiness score 1-5
- Recommended mockup angle

Scoring:

- 5 = strong fit: missing or clearly weak website, active business, clear contact info, good photos/reviews, obvious upside
- 4 = good fit: website exists but has visible usability/trust/conversion gaps
- 3 = possible fit: some signs, needs validation
- 2 = weak fit: minor issues only
- 1 = do not prioritize

Tone:

Be respectful. Do not call the website "bad" in notes meant for outreach.

Use phrases like:

- appears to rely mainly on directory listings
- no owned quote flow was visible
- mobile contact path could be clearer
- service-area information was hard to find
- photos and reviews are strong but the owned web presence is limited
- a simple quote-focused page could make it easier for customers to call or send job photos

Output:

Find `[NUMBER]` unique businesses. Avoid duplicates.

Return two sections:

1. Ranked lead table
2. Mockup-ready briefs for the top 3

For each top-3 mockup brief, include:

- Suggested headline
- Subheadline
- Primary CTA
- Secondary CTA
- Trust badges, using only sourced claims
- Service list
- Photo choices
- Review snippets
- Colors inferred from logo/photos/category
- Sections to include
- Claims to avoid

Never invent certifications, licenses, years in business, insurance status, or awards. If a claim is not sourced, write `not sourced`.

## Follow-Up Mockup Prompt

Use this after selecting one lead:

Build a static one-page website mockup for `[BUSINESS NAME]`.

Use the mockup-ready brief and only sourced public facts. Use real business photos from approved API/public sources where allowed. If using Yelp-sourced review snippets or photos, include Yelp attribution where appropriate. Do not invent credentials or claims.

The page should be mobile-friendly and designed to drive phone calls, quote requests, and photo-based job inquiries.

Required sections:

- Hero with real business name, niche, city/service area, phone CTA, and strong job photo
- Trust bar with sourced signals only
- Services
- Real work/photo gallery
- Reviews or review highlights with source labels
- Service area
- Quote/contact CTA

Return:

- `index.html`
- `index-standalone.html` with embedded images
- README with source notes and claims avoided
- screenshot/preview if a browser is available

## Operational Notes

- Store `YELP_API_KEY` as an environment variable, not in prompts, files, or git.
- Keep a CSV/JSON prospect database so the same company is not targeted twice.
- Human approval is required before any outreach.
- Start with 10 tree service mockups, track replies, then decide whether to broaden categories.
