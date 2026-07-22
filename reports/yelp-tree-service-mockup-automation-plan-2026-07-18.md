# Yelp-to-Mockup Automation Plan

Date: 2026-07-18

## Goal

Find tree service companies that appear to have no website or a weak website, generate a credible static mockup using their real business signals, then use the mockup as a sales opener.

## Practical Verdict

This is now very automatable, but it should be framed as an API-driven prospecting and mockup workflow, not Yelp page scraping.

Yelp Fusion / Places can provide:

- Business search by category and location
- Business name, Yelp URL, phone, rating, review count, categories, address/city, coordinates, hours
- Up to 12 business photos depending on plan
- Review excerpts, depending on plan

Yelp does not reliably provide:

- The business's own website URL
- Full review text
- Proof that a company has no website
- Permission to reuse every asset without following Yelp display/attribution requirements

So the workflow should be:

1. Use Yelp API to discover and enrich prospects.
2. Run a website-existence check separately.
3. Score the prospects.
4. Generate a static mockup.
5. Human-review the output before contacting the business.

## Best Starting Niche

Tree service is a strong starting vertical because:

- They are high-ticket local services.
- They often use offline lead gen already: door drops, flyers, cards, neighborhood canvassing.
- Many small operators have Yelp/Google presence but weak web presence.
- Real job photos matter more than polished branding.
- A one-page quote-focused site can be valuable immediately.

Recommended initial area:

- Santa Rosa
- Windsor
- Sebastopol
- Rohnert Park
- Cotati
- Healdsburg
- Petaluma
- Sonoma
- Napa

## Prospect Scoring

Prioritize businesses with:

- No obvious website from Google/search
- Yelp rating 4.5+
- 3+ reviews
- Real job photos
- Phone number present
- Active recent reviews
- Emergency/service-area/commercial signals
- Weak branding but obvious demand

Deprioritize:

- Companies with polished websites already
- Franchise/national brands
- Businesses with no photos and no recent reviews
- Businesses where the owner identity/contact path is unclear

## Data Fields To Save

For each business:

- `yelp_id`
- `alias`
- `name`
- `phone`
- `display_phone`
- `city`
- `state`
- `zip`
- `rating`
- `review_count`
- `categories`
- `hours`
- `photos`
- `review_snippets`
- `yelp_url`
- `website_candidate`
- `website_status`: `none_found`, `bad_site`, `good_site`, `unclear`
- `mockup_status`: `not_started`, `generated`, `reviewed`, `sent`
- `sales_angle`

## Mockup Generator Rules

Use:

- Their real logo if available from screenshots, Yelp photos, Google Business Profile, or owner-provided media
- Their actual Yelp/Google job photos when available and permitted
- Their real phone number
- Their real city/service area
- Yelp rating and short review excerpts with Yelp attribution
- Conservative service copy based on categories and profile highlights

Do not invent:

- Certified Arborist
- ISA credentials
- Bonded/insured claims unless sourced
- Years in business unless sourced
- Full-service claims not supported by the listing

## Mockup Page Structure

1. Hero
   - Business name
   - Main service category
   - City/service area
   - Phone CTA
   - Strong real job photo

2. Trust Bar
   - Rating
   - Free estimates if sourced
   - Emergency service if sourced
   - Family-owned if sourced
   - Licensed if sourced

3. Services
   - Tree trimming
   - Tree removal
   - Emergency cleanup
   - Yard cleanup/hauling
   - Commercial/property manager work where relevant

4. Real Work Photos
   - 4-8 real photos
   - Practical captions, not fake project claims

5. Reviews
   - Yelp API excerpts only
   - Attribution to Yelp/user first name/initial

6. Quote CTA
   - Call button
   - Text photos button
   - Simple quote form mockup

## Outreach Angle

The strongest opener is not "you do not have a website."

Use:

"I made a quick one-page site mockup using your real job photos and review highlights so you can see what a cleaner quote-focused web presence could look like."

This avoids insulting them and shows value before asking for money.

## Starter Message

Hi, I saw your tree service listing and put together a quick one-page website mockup using your real job photos, service info, and review highlights.

No obligation. I figured it would be easier to show than explain.

If you like the direction, I can turn it into a live mobile-friendly site with your phone number, quote form, service area, and photo gallery.

## Automation Architecture

Inputs:

- `YELP_API_KEY`
- category: `treeservices`
- location list
- max businesses per city

Pipeline:

1. Search Yelp businesses by category/location.
2. Fetch details for each business.
3. Fetch review snippets.
4. Download/select usable photos.
5. Check for existing website separately.
6. Score lead quality.
7. Generate static HTML from template.
8. Render screenshot/package.
9. Save prospect row to CSV/JSON.
10. Human approves before outreach.

## Guardrails

- Keep the Yelp API key in an environment variable, not a prompt or committed file.
- Respect Yelp display requirements and attribution.
- Do not claim ownership of business photos.
- Do not contact businesses automatically without human review.
- Do not use unsupported credentials/certifications.

## Useful Official Docs

- Yelp Places API overview: https://docs.developer.yelp.com/docs/places-intro
- Business Search endpoint: https://docs.developer.yelp.com/reference/v3_business_search
- Business Details endpoint: https://docs.developer.yelp.com/reference/v3_business_info
- Reviews endpoint: https://docs.developer.yelp.com/reference/v3_business_reviews
- Rate limits: https://docs.developer.yelp.com/docs/places-rate-limiting
- API terms: https://terms.yelp.com/developers/api_terms/20250113_en_us/
