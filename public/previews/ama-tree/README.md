# Local Business Multi-page Website Template

Reusable starter for Bay Area Design Lab prospect previews.

## What It Includes

- `index.html` - conversion-first homepage
- `services.html` - service overview page
- `about.html` - credibility, license, crew, and process page
- `work.html` - gallery / proof page
- `reviews.html` - testimonial proof page
- `contact.html` - call, text, service area, and estimate request page
- `assets/styles.css` - shared responsive design system
- `assets/site.js` - mobile menu, phone/SMS config, chat widget, and no-backend lead form

## Fast Customization

1. Update `siteConfig` in `assets/site.js`:
   - `phoneDisplay`
   - `phoneHref`
   - `smsIntro`
2. Update the business name, service area, license copy, and review excerpts as better source material is provided.
3. Add more client-specific project photos as they come in.
4. For production, swap the SMS-only form in `contact.html` for the desired form endpoint.

## Design Rationale

The reference site at `https://treetlc.com/` is useful because it has both the right content buckets and a credible service-business feel: dark green contact bar, clean white navigation, full-width tree hero image, centered editorial headings, large rounded service blocks, subtle iconography, generous whitespace, proof/review sections, and a simple quote path.

This template keeps those design cues while making the structure cleaner and easier to reuse for tree companies, contractors, landscapers, handyman businesses, clinics, salons, and other local operators.

## Preview Locally

From this folder:

```bash
python3 -m http.server 4180
```

Then open:

```text
http://127.0.0.1:4180/
```
