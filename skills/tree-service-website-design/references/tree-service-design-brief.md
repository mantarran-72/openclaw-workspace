# Tree Service Website Design Brief

Source: Ethan-provided tree service website design instructions, added 2026-08-02.

Use the reference site `https://www.generationstreeexpertco.com/` only to understand content hierarchy and conversion strategy. Do not copy wording, branding, imagery, layouts, code, or distinctive visual elements.

## Primary Objective

The site must turn homeowners, property managers, commercial clients, HOAs, and landowners into qualified calls and estimate requests.

Every page should quickly answer:

- What services does the company provide?
- Does it serve my location?
- Is the company qualified and insured?
- Can it safely handle difficult tree work?
- Will it protect and clean up my property?
- How do I request an estimate?
- Who do I call in an emergency, if emergency service is verified?

The site should feel like a legitimate tree-care operation with real crews, real equipment, local knowledge, and professional operating standards. It should not feel like a generic landscaping template.

## Positioning

Use verified proof points first. Possible themes:

- Local and owner-operated
- Licensed and insured
- Certified arborist involvement
- Experienced climbing and rigging crew
- Crane-assisted removal
- Difficult-access tree specialists
- Residential and commercial tree care
- Emergency storm response
- Property protection and careful cleanup
- Honest written estimates
- Fire mitigation and defensible-space work
- Long-term tree health instead of unnecessary removal

Never invent certifications, licenses, experience, insurance coverage, equipment, warranties, emergency availability, reviews, or project history.

## Design Direction

The visual system should feel rugged but refined, professional, local, safe, established, direct, competent, modern, and premium without looking inaccessible.

Avoid:

- Cartoon trees
- Generic leaf graphics
- Cheap lawn-care templates
- Excessive gradients
- Neon green
- Fake forestry imagery
- Robot-sounding slogans
- Overused badges
- Cluttered service grids
- Stock photos of unrelated forests
- Corporate filler language
- Long text blocks without visual breaks
- Reusing the same layout, transitions, colors, and card treatments from prior previews
- Flat static pages with no visible polish, hover feedback, photo motion, fading imagery, sliding gallery treatments, or intentional transitions

Build each preview around a distinct concept. Examples:

- Operator-led field-service look: squared panels, utility bar, safety-gold action color, equipment-forward photography.
- Premium estate-care look: quiet editorial type, restrained stone/charcoal palette, large finished-property images.
- Storm-response look: urgent but calm, high-contrast phone path, hazard-assessment sections.
- Arborist/health look: diagnostic, educational, structured around assessments and preservation.
- Wildfire/land-clearing look: terrain, defensible space, practical process, county/service-area emphasis.

Use section-to-section layout differentiation. A tree-service site should not feel like one reusable card component repeated down the page. Mix the structure deliberately:

- utility/contact bar
- split hero or photo-led hero
- icon proof row
- narrative about block
- simple services list or service groups
- why-choose proof section
- reviews with platform attribution
- service-area panel
- final estimate CTA

Reference pattern: Alliance Tree Care uses clear color and layout differentiation across header, hero, proof row, about, services, reviews, service area, and CTA sections. Use this as a reminder to vary page rhythm only; do not copy its wording, branding, imagery, or specific layout.

## Motion and Interaction Polish

Modern tree-service previews should feel alive, not like static brochures. Use motion deliberately:

- Add clear hover states for buttons, cards, service links, photo tiles, and platform/logo links.
- Use subtle section entrance transitions, photo fades, sliding galleries, before/after interactions, or testimonial/review movement when appropriate.
- Keep motion restrained, fast, and professional. It should signal quality and craft without distracting from phone calls and estimate requests.
- Respect accessibility: support reduced-motion preferences and never hide critical content behind hover-only interactions.
- Verify interactive elements on desktop and mobile before delivery.

## Brand and Platform Marks

Use recognizable brand logos or icons whenever the site references a known platform, directory, social network, certification body, review source, or business authority. This includes Yelp, Google, Facebook, Instagram, TikTok, Nextdoor, Houzz, Angi, BBB, ISA, TCIA, CSLB, and similar sources.

For Yelp facts, do not stop at browser blocking. First check whether the Yelp API is available through `YELP_API_KEY` or the approved local secret workflow. Use Yelp API business details/reviews/photo URLs for rating, review count, excerpts, and public photo proof when available. Never print the key, commit it, or store it in memory. If API access is not available in the current runtime, say that specifically instead of saying only that Yelp was blocked.

Do not render those sources as plain bordered text buttons when a logo/icon exists. Use the brand mark, icon, or a compact approved-style wordmark treatment so the element reads as real social proof instead of a placeholder.

Ethan's correction: a small monochrome vertical list such as generic TikTok, Yelp, and Instagram icons beside plain text is the wrong direction. Prefer a more intentional branded treatment: full-color platform marks, clear button/badge boundaries, enough visual weight, and immediately recognizable Yelp/Instagram/TikTok identity. Social proof should look like clickable branded credibility, not a settings menu.

## Service Containers

- Do not default to numbered service cards. Numbers imply a sequence; tree-service offerings usually need clear categories.
- If using a featured service tile with smaller companion cards, make the grid balance completely. Add a verified missing service such as crown reduction, stump grinding, cleanup, or service-area work, or change the sizing so there is no empty leftover cell.
- Prefer category labels, icons, image hierarchy, and varied card sizing over `01 / 02 / 03` unless the section is a real process.

Only include third-party marks for verified public profiles, real awards, real review sources, or legitimate credentials. Do not create fake badges, fake ratings, fake review counts, fake certifications, or implied partnerships.

## Color and Type

Start from the client logo when available.

Recommended palette roles:

- Primary dark: deep forest green, charcoal green, or near-black for header, footer, strong text, buttons, and trust sections.
- Light neutral: warm white, cream, light stone, or soft gray for main backgrounds and content areas.
- Natural midtone: muted sage, moss, bark brown, or slate green for labels, dividers, icons, and restrained accents.
- Action color: one high-visibility accent, such as safety orange, golden yellow, warm copper, or a natural bright green.

Do not use multiple competing button colors.

Use strong readable typography:

- Headings: sturdy sans serif or restrained slab-style, medium to heavy weight, no script or futuristic styling.
- Body: clean sans serif, 17-19px desktop, at least 16px mobile, short paragraphs.
- Avoid centered paragraphs longer than three lines.

## Image Direction

Real company photography is strongly preferred. Prioritize:

- Crew members performing real tree work
- Climbers in mature trees
- Rigging operations
- Crane-assisted removals
- Bucket truck operations
- Stump grinding
- Before-and-after projects
- Equipment staged professionally
- Crew portraits
- Finished properties after cleanup
- Local terrain and recognizable service-area environments

The hero image should show real work in progress, not a generic forest. It should communicate height, skill, risk management, equipment capability, local environment, and professionalism.

Avoid unsafe-looking imagery and workers without proper protective equipment unless the client explicitly approves the image.

Use descriptive alt text based on service and location when known. Avoid empty alt text like `tree image`, `photo 1`, or `arborist`.

## Core Site Structure

Recommended pages:

- Home
- About
- Services overview
- Individual service pages
- Service areas
- Individual location pages
- Reviews or projects
- Contact and estimate request
- Frequently asked questions
- Privacy policy
- Terms and conditions

Add an emergency service page only when urgent or 24-hour response is verified.

## Header and Mobile Navigation

Desktop header should include:

- Company logo
- Services dropdown or link
- Service Areas
- About
- Reviews or Projects
- Contact
- Visible phone number
- High-contrast `Free Estimate` button

Mobile header should include:

- Logo
- Tap-to-call phone icon or number
- Menu icon
- Persistent estimate button when practical

The mobile menu must make the phone number and estimate request easy to find.

Use a slim utility bar only when it communicates verified strong information, such as phone, emergency availability, licensed and insured, certified arborist, service area, or hours.

## Homepage Structure

Hero:

- State what the company does, where it works, why it is credible, and how to contact it.
- Use a clear local-service headline like `Professional Tree Care for [SERVICE AREA]` or `Safe, Reliable Tree Service in [PRIMARY REGION]`.
- Avoid vague slogans such as `Growing Excellence Together`, `Where Nature Meets Care`, or `Your Trees, Our Passion`.
- Primary CTA: `Request a Free Estimate`.
- Secondary CTA: `Call [PHONE NUMBER]`.
- Add `Emergency Tree Service` only if verified.

Trust and credentials:

- Reinforce credibility immediately with verified items only.
- Possible items include licensed and insured, certified arborist, locally owned, free written estimates, residential and commercial work, specialized equipment, safety-first planning, and strong public ratings.

Main services:

- Present six to nine core services.
- Common categories: Tree Removal, Tree Pruning and Trimming, Stump Grinding, Emergency Tree Service, Storm Damage Cleanup, Arborist Consultations, Tree Cabling and Bracing, Tree Health and Disease Management, Tree Planting, Lot and Land Clearing, Fire Mitigation, Defensible Space, Commercial Tree Care.
- Feature the four most important or profitable services more prominently.

Major capability feature:

- Focus on a differentiator such as difficult/hazardous removals, crane-assisted removals, certified arborist oversight, fire mitigation, large-tree work, storm response, or careful work around homes.
- Explain the challenge, planning, property protection, equipment/expertise, and risk of hiring an inexperienced operator.

Service area:

- Write natural local copy before listing communities.
- Link important locations eventually, but avoid thin duplicated city pages.

Why choose us:

- Use four to six specific differentiators.
- Good categories: qualified tree care, property protection, professional equipment, clear estimates, complete cleanup, local knowledge.
- Prove claims with operating practices, not generic quality language.

Process:

- Keep it simple: Request an Estimate, On-Site Evaluation, Written Scope and Scheduling, Safe Completion and Cleanup.

Reviews:

- Use genuine customer reviews only.
- Include rating/count/platform only if verified.
- Favor reviews mentioning safety, difficult removals, communication, punctuality, property protection, cleanup, fair pricing, arborist knowledge, or emergency response.

Projects or before-and-after:

- Use real work.
- Include location, service type, challenge, short explanation, before image, work-in-progress when available, and completed result.
- Do not publish customer addresses.

FAQ:

- Include five to eight high-value questions.
- Useful topics: cost, free estimates, license/insurance, removal timing, damaged trees, permits, debris, emergency service, power lines, trimming vs pruning, stump grinding depth, insurance work.
- Do not give definitive legal/permit advice without verifying jurisdiction.

Final CTA:

- Explain the estimate process, who visits, whether it is written, what happens next, phone number, and urgent-contact instruction when applicable.

Footer:

- Include logo, short company description, phone, email, address or general service area, hours, emergency availability when verified, primary services, service areas, About, Reviews, Contact, Privacy, Terms, license number when appropriate, and copyright.
- Keep it useful but not excessively tall.

## Service Page Template

Every major service page should include:

- Localized title
- Clear explanation of the service
- Common reasons customers need it
- Warning signs or problems to watch for
- How the company performs the work
- Safety and property-protection methods
- Relevant equipment or expertise
- Cleanup scope
- Related services
- FAQs
- Service-area references
- Estimate CTA

Avoid repetitive SEO padding.

For a simple services overview page, especially when the company already has strong public credibility, use a lighter pattern:

- Prominent logo/header and visible license or credential proof when verified.
- A plain `Our Services` section with the full service list easy to scan.
- Short labels instead of long paragraphs when the goal is quick qualification.
- Direct phone/email/contact CTA close to the services list.
- Branded social/review links with recognizable icons.
- Supporting work photos and review proof below the list, not mixed into every service item.

Reference pattern: Valley Falls Tree Care's services page uses a simple service list, license number, contact details, social icons, supporting photos, and customer-proof section. Use it as a structural cue only; do not copy its wording, layout, branding, or imagery.

Recommended titles:

- `Tree Removal in [PRIMARY SERVICE AREA]`
- `Tree Pruning and Trimming Services`
- `Emergency Tree Service in [REGION]`
- `Certified Arborist Services in [COUNTY]`

## Service-Specific Guidance

Tree removal:

- Address dead, hazardous, diseased, leaning, storm-damaged, structure-adjacent, construction-conflict, root-damage, view/access, crane-assisted, sectional dismantling, controlled lowering, debris removal, and stump-grinding options.
- Do not imply every damaged tree needs removal.

Pruning:

- Address deadwood removal, structural pruning, crown cleaning, crown reduction, clearance pruning, young-tree training, hazard reduction, fruit-tree pruning when offered, seasonal maintenance, and ANSI-compliant practices only when verified.
- Do not promote topping. Explain that indiscriminate topping can damage tree health and create future hazards.

Stump grinding:

- Address grinding depth, surface roots, grindings/mulch, restoration, access width, underground utilities, replanting, trip hazards, pests, and regrowth.
- Clarify whether hauling is included.

Emergency tree service:

- Only create when verified.
- Include fallen trees, split trunks, hanging limbs, trees on structures, blocked access, storm damage, immediate hazard evaluation, temporary stabilization, insurance documentation, and emergency contact procedure.
- Tell customers to contact emergency services or the utility provider for energized lines. Never suggest unqualified people approach downed electrical lines.

Arborist services:

- Only use when a qualified arborist is actually involved.
- Possible services: tree-risk assessment, tree-health evaluation, disease/insect diagnosis, cabling/bracing, construction impact planning, root-zone protection, inventories, maintenance plans, preservation recommendations, permit support, species selection, planting recommendations.

Fire mitigation:

- Include defensible-space clearing, deadwood removal, ladder-fuel reduction, canopy separation, hazardous dead-tree removal, access-road clearance, structure clearance, vegetation management coordination, property assessment, and maintenance.
- Do not guarantee fire protection.
- Verify local rules before publishing exact measurements or legal requirements.

## About Page

Make the company feel human and credible. Include founder/owner story, local connection, why the company started, experience/training, crew approach, safety philosophy, equipment capability, customer-service philosophy, property-protection standards, service area, certifications/memberships, and community involvement when relevant.

Use actual team photos. Avoid inflated claims like `number-one`, `unmatched`, or `best in the industry`.

## Service Area Strategy

Create one main service-area page explaining the operating region.

Create substantive location pages only for important cities. Each should include city/community specifics, commonly requested services, relevant species or property types, terrain/climate, wildfire/wind/drought/storm considerations, permit/protected-tree issues when verified, nearby communities, a local project example when available, and estimate CTA.

Do not create thin pages that only swap city names.

## Contact and Estimate Form

Recommended fields:

- Name
- Phone
- Email
- Property address or city
- Service needed
- Brief description
- Preferred contact method
- Photo upload
- Urgency
- Consent checkbox

Do not require unnecessary information before contact.

After submit, show confirmation, expected response process, urgent phone number, and emergency instructions when applicable.

## Mobile Conversion Requirements

Every mobile page needs:

- Tap-to-call
- Large buttons
- Short paragraphs
- Readable text
- Fast-loading images
- Simple forms
- No intrusive full-screen popups
- No tiny service links
- No horizontal overflow
- No hover-only interactions

Consider a restrained sticky mobile bar with `Call Now` and `Free Estimate`, but do not let it cover content.

## Copy Style

Use clear, plain English. Voice: knowledgeable, direct, reassuring, local, professional, specific, and calm.

Avoid empty slogans, excessive exclamation points, marketing cliches, long introductions, fake urgency, overpromising, keyword stuffing, and overusing `experts`, `premier`, or `top-rated`.

Weak:

> We offer exceptional tree services with unmatched quality.

Better:

> Our crew uses controlled rigging and sectional removal to take down trees safely around roofs, fences, landscaping, and other structures.

Preferred CTAs:

- Request a Free Estimate
- Schedule an On-Site Evaluation
- Call for Tree Service
- Get a Written Estimate
- Speak With an Arborist
- Request Emergency Service
- Upload Photos of Your Tree
- Schedule a Property Assessment

Avoid vague CTAs like `Explore`, `Discover`, or `Start Your Journey`.

## Local SEO and Technical Requirements

For every page, plan:

- SEO title
- Meta description
- H1
- Logical H2/H3 structure
- Internal links
- Image alt text
- Breadcrumbs
- Canonical URL
- LocalBusiness or relevant schema recommendations
- Service schema where appropriate
- FAQ schema where appropriate

Use geographic terms naturally.

Technical expectations:

- Fast load
- Fully responsive
- Semantic HTML
- WCAG fundamentals
- Compressed WebP/AVIF images when possible
- Lazy-loaded below-the-fold media
- Reserved image dimensions to prevent layout shift
- Focus states
- Strong color contrast
- No autoplay video
- Minimal JavaScript
- Descriptive form labels
- Spam protection
- Analytics/conversion hooks when requested
- Click-to-call and form submission tracking when requested
- Sitemap
- Robots.txt
- Open Graph metadata
- Favicon/app icons
- Structured data
- Custom 404
- HTTPS deployment

## Components to Reuse

Build reusable components for:

- Utility bar
- Desktop header
- Mobile navigation
- Hero
- Trust badge row
- Service card
- Featured service section
- Service-area grid
- Why-choose item
- Process step
- Review card
- Project card
- Before-and-after gallery
- FAQ accordion
- Estimate form
- Emergency callout
- Final CTA
- Footer
- Mobile sticky contact bar

Components should be reusable without making every client look the same.

## Content Collection Checklist

Business information:

- Legal business name
- Public-facing business name
- Phone
- Email
- Address
- Hours
- Emergency number
- Service area
- Year established
- Owner names
- Team information

Credentials:

- Contractor license
- Arborist certification
- Insurance
- Workers' compensation
- TCIA membership
- ISA membership
- Other training
- Utility-line clearance qualifications

Services:

- Main services
- Highest-value services
- Services not offered
- Emergency availability
- Residential work
- Commercial work
- Municipal work
- HOA work
- Insurance-related work

Equipment:

- Crane
- Bucket truck
- Chipper
- Stump grinder
- Loader
- Mini skid steer
- Grapple truck
- Climbing systems
- Specialized rigging equipment

Proof:

- Google review link
- Rating
- Review count
- Testimonials
- Project photos
- Before-and-after photos
- Crew photos
- Certificates
- Awards
- Community affiliations

Lead handling:

- Estimate process
- Response time
- Free or paid consultations
- Financing
- Payment methods
- Minimum project size
- Scheduling process

## Quality Review

Before delivery, check:

- All links
- Phone numbers
- Email addresses
- Forms
- Mobile navigation
- Responsive breakpoints
- Image quality
- Alt text
- Page speed
- Contrast
- Spelling and grammar
- Location accuracy
- Service accuracy
- Certification/insurance/license claims
- Review accuracy
- Repeated content
- Placeholder text
- Originality against recent BADL/tree-service previews
