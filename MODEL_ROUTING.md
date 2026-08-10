# MODEL_ROUTING.md — Authoritative Model Routing Policy

## 1. Authority

This file is the authoritative model-selection policy for OpenClaw.

Use the **Quick Routing Table** for ordinary model selection. Read a workflow-specific section only when the current task belongs to that workflow (e.g. website production, visual QA). Do not reread the entire file before every model selection — that defeats the point of a routing policy.

Routing decides **which model does the task**. Fallbacks decide **what happens if the selected provider/model is unavailable**. Do not confuse the two.

Do not choose a model solely because it is currently active or configured as default.

---

## 2. Quick Routing Table

Handles ~80-90% of routing decisions without reading further.

| Task Type | Default | Escalate to |
|---|---|---|
| Web research / factual extraction | Haiku | Sonnet |
| File/log/config reading, grep, search | Haiku | Luna |
| Routine shell / git / diagnostics / admin | Haiku | Mini/Luna |
| Simple code edit from exact spec | Mini or Haiku | Luna |
| Routine coding / debugging | Luna | Sonnet |
| Complex implementation / ambiguous requirements | Sonnet | Terra |
| Architecture / hard technical reasoning | Sonnet | Terra |
| Strategy / business analysis | Sonnet | Sol (if justified) |
| Nuanced client writing / persuasion | Sonnet | Sol (if justified) |
| Visual design implementation | Sonnet | Sol (review) |
| Screenshot / visual QA / final creative review | Sol | — |
| GIS metadata extraction / inventory | Haiku | Luna |
| GIS scripting / QGIS utilities | Mini/Luna | Sonnet/Terra |
| Construction quantity extraction | Haiku | Mini |
| Construction estimating / scope reasoning | Sonnet | Terra |
| Provider outage / infra fallback | GLM-5 | Luna |

---

## 3. Model Roles

**Haiku** — `codegate-claude/claude-haiku-4-5-20251001`
Research, file inspection, mechanical edits with explicit instructions, technical QA, cheap subagents. No independent design/visual judgment.

**Mini** — `openai/gpt-5.4-mini`
Cheapest Codex worker. Mechanical multi-file edits, explicit implementation, lint/type fixes, tests. No independent design/visual judgment.

**Luna** — `openai/gpt-5.6-luna`
Inexpensive Codex worker one step up from Mini. Routine coding/debugging that needs more judgment than pure mechanical edits, quick independent review.

**Sonnet** — `codegate-claude/claude-sonnet-5`
Primary production model. Architecture, ambiguous requirements, UX/design implementation, strategy synthesis, nuanced writing, substantial debugging. Default for anything requiring real judgment.

**Terra** — `openai/gpt-5.6-terra`
Strong independent technical reviewer. Difficult debugging after Sonnet/Luna struggle, architecture review, hard technical second opinions. Prefer over legacy GPT-5.4.

**Sol** — `openai/gpt-5.6-sol`
Premium expert reviewer. Screenshot-based visual critique, final creative/strategic approval, rare technical escalation after Sonnet/Terra fail. Reviews work more often than it builds it. Restricted — see §5.

**GLM-5** — `openrouter/z-ai/glm-5`
Infrastructure/provider-diversity fallback. Not a normal quality-escalation target.

**GPT-5.4 / GPT-5.5 (legacy)** — `openai/gpt-5.4`, `openai/gpt-5.5`, `codegate/gpt-5.5`
Not routine routing targets. Use only when explicitly requested or proven better than Terra/Sol for a specific task. Default equivalents: GPT-5.4 → Terra, GPT-5.5 → Sol.

**OpenRouter Auto** — `openrouter/auto`
Use cautiously; avoid for important production work where a deterministic assignment exists.

---

## 4. General Task Routing

**Research** — Haiku by default. Escalate to Sonnet when synthesis, interpretation, or conflicting evidence becomes the actual task. Cap at ~3 search rounds / ~10 sources unless clearly justified; produce a compact artifact (e.g. `RESEARCH.md`) so downstream work doesn't re-research.

**Coding** — Mechanical/explicit → Mini or Haiku. Routine coding/debugging → Luna. Complex/ambiguous implementation → Sonnet. Difficult independent review → Terra. Don't route a design problem through every coding tier first.

**Design / UX / Visual** — Implementation-level judgment → Sonnet. Independent visual critique / final approval → Sol. Haiku and Mini must never make independent visual design decisions; they may only implement explicit corrections.

**Strategy / Business Analysis** — Sonnet by default. Sol only for high-stakes, designated expert review, or final approval.

**Writing / Communication** — Formatting/extraction/basic rewrites → Haiku. Persuasive or nuanced writing → Sonnet. High-value final messaging review → Sol.

**GIS / Drone / Technical Data** — Metadata extraction, inventory, logs → Haiku. QGIS/Python utilities, batch scripts → Mini/Luna. Workflow design, complex GIS reasoning → Sonnet. Difficult technical validation → Terra.

**Construction / Estimating** — Quantity extraction, scope organization → Haiku. Calculation scripts, repetitive estimate logic → Mini/Luna. Estimating strategy, scope reasoning, proposal structure → Sonnet. Difficult estimate review, high-risk technical decision → Terra.

**Administrative / Mechanical** — Haiku by default. Never spend Codex quota on routine administration.

**Vision requirement** — Any task involving rendered screenshots, layout evaluation, color/icon judgment, or visual QA requires a vision-capable model. Do not route screenshot-based review to a model/runtime that can't see the image (this rules out Mini/Terra/Luna for that specific step even if they'd otherwise be the right tier).

---

## 5. Escalation & Quota Rules

**Automatic — no approval needed:**
- Haiku → Mini/Luna when work becomes coding-oriented.
- Haiku → Sonnet when ambiguity, design, architecture, strategy, or complex reasoning appears.
- Mini → Luna when Mini fails or the task needs more reasoning.
- Luna → Sonnet when implementation becomes substantial or involves UX/architecture.
- Sonnet → Terra when a documented hard technical issue needs independent validation.

**Sol restriction:** Use Sol automatically only when this policy explicitly assigns it to a stage (visual QA, final creative review, designated high-value strategic review). Outside those stages, Sol requires explicit user approval. GPT-5.5 follows the same restricted policy.

**Retry limit:** If a model fails twice on the same underlying problem, stop, reclassify, and route to a stronger model. Don't repeatedly ask a weak model to solve a higher-tier problem, and don't jump straight to Sol just because a cheaper model failed once.

**Codex quota awareness:** Codex allowance is limited. Before routing large work to Mini/Luna/Terra/Sol/legacy models: prefer CodeGate when comparable quality is available; check `openclaw status --usage` when quota matters; never spend Codex quota on mechanical work. If quota is low/exhausted: keep using Haiku (research/mechanical) and Sonnet (production) normally, use CodeGate GPT-5.5 or OpenRouter only for a needed second opinion, and don't repeatedly retry unavailable Codex models.

---

## 6. Fallbacks

Fallbacks are infrastructure recovery only — a different problem from routing.

Global chain: `codegate-claude/claude-sonnet-5` → `codegate-claude/claude-haiku-4-5-20251001` → `openrouter/z-ai/glm-5` → `openai/gpt-5.6-luna` (emergency).

Never place Terra, Sol, GPT-5.4, or GPT-5.5 in the automatic global fallback chain — a provider outage must not silently burn premium Codex allowance or route a mechanical task to an expensive model.

---

## 7. Subagents

Assign every subagent a model based on its delegated task. Do not blindly inherit the parent model.

- Research / file-inspection subagent → Haiku
- Mechanical coding subagent → Mini
- Routine coding/debugging subagent → Luna
- Implementation subagent → Sonnet
- Complex technical-review subagent → Terra
- Visual-review subagent → Sol, only when explicitly designated by this policy

Don't spawn multiple premium-model subagents when one focused review is sufficient. Give each subagent only the files/context it needs — not full project history.

---

## 8. Website Production Workflow

Sequence: **Research → Strategy → Design → Build → Technical QA → Visual QA → Corrections → Final Review**

| Stage | Model | Output |
|---|---|---|
| 1. Research (company, existing site, services, reviews, competitors) | Haiku | `RESEARCH.md` |
| 2. Strategy (audience, goals, sitemap, IA, proof sections) | Sonnet | `SITE_STRATEGY.md` |
| 3. Creative direction (typography, color, spacing, imagery, component philosophy) | Sonnet (Sol reviews if justified) | `DESIGN_SYSTEM.md` |
| 4. Homepage skeleton (header, hero, one content section, services, proof, CTA, footer only) | Sonnet | — |
| 5. First visual checkpoint (desktop 1440px / tablet 1024px / mobile 390px screenshots) | Sonnet (Sol if design quality is critical) | — |
| 6. Full implementation of remaining pages | Sonnet (Mini/Luna for isolated mechanical components) | — |
| 7. Technical QA (links, console errors, overflow, a11y basics, forms) | Haiku (Mini/Luna if runtime help needed) | `TECHNICAL_QA.md` |
| 8. Visual QA — **required**, see §9 checklist | Sol (Sonnet as lower-cost intermediate pass) | `VISUAL_QA.md` |
| 9. Visual corrections (mechanical fixes → Haiku/Mini/Luna; recomposition → Sonnet) | Sonnet | — |
| 10. Final review — concise, no re-research or rebuild | Sonnet (Sol if client-facing/portfolio, major visual changes, or Sonnet uncertain) | — |

Don't build every page before Stage 5 validates the design system. Don't spend Sol on mechanical QA (Stage 7). Sol should review Stage 8/10 rather than build the site.

---

## 9. Visual QA Checklist (Stage 8 — keep detailed)

Review rendered screenshots of full desktop homepage, full mobile homepage, key internal pages, and unusual sections/components.

**Composition** — page rhythm, whitespace, section proportions, balance, alignment, density.

**Typography** — hierarchy, font sizing, line lengths, weights, contrast, readability.

**Color** — palette consistency, excessive accent colors, weak contrast, cheap-looking gradients, arbitrary color changes, brand coherence.

**Containers and cards** — excessive cards, unnecessary boxes, excessive rounded rectangles, repetitive card grids, nested containers, excessive borders/shadows.

**Icons** — generic icons, mixed icon families, inconsistent stroke weight, oversized icon badges, cheap-looking decorative icons, unnecessary icon use.

**Layout** — generic template patterns, monotonous section structure, poor responsive behavior, awkward empty space, cramped sections, excessive symmetry, poor container widths, weak grid alignment.

**Imagery** — weak image selection, poor crops, repetitive imagery, low-quality imagery, images used only to fill space, inconsistent aspect ratios, real client work displayed too small.

**Overall quality** — Ask: "Does this look intentionally designed for this specific business, or does it look like a generic AI-generated website template?"

Every issue logged in `VISUAL_QA.md` must include severity, location, problem, required correction, and reason. No vague feedback like "make it more polished."

---

## 10. User Overrides

Explicit user instructions always win over this policy.

Examples: "use Sol", "use Terra", "use Luna", "use Mini", "use Sonnet", "stick with Haiku", "don't use Codex", "don't spend OpenAI quota", "use CodeGate only".

Manual overrides don't need justification and don't count against the retry/escalation rules above.
