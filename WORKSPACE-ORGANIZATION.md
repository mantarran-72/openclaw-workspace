# Workspace Organization

Purpose: keep the `mantarran-72` GitHub account useful for more than AeroSpect while preserving the existing AeroSpect site history.

## Current Map

### AeroSpect Website Assets
- `aerospect-deployed-live/` - current protected production baseline for `aerospectinc.com`.
- `aerospect-homepage-preview-live-baseline/` - approved homepage preview/edit baseline preserved for later deployment work.
- `aerospect-drafts/` - old site drafts and archive references.
- `aerospectinc-ionos-backup-deployed-2026-03-21/` - extracted IONOS production backup.
- `aerospectinc-ionos-backup-deployed-2026-03-21.zip` - original IONOS backup archive.
- `README-AEROSPECT-STRUCTURE.md` - operational map for the AeroSpect site line.

### Data Center / Mission-Critical Work
- `reports/mission-critical-landing-2026-07-06/` - draft landing page for mission-critical/data-center drone services.
- `reports/nas-lemoore-data-center-outreach-2026-07-06.md` - outreach research and messaging for the NAS Lemoore data center / energy project.
- `reports/hitt-capability-statement-2026-05-29/` - AeroSpect capability statement with mission-critical construction positioning.

### Vineyard / GIS Tools
- `grape_pipeline/` - local vineyard/grape dataset and model pipeline work.
- `vineyard_row_leak_detection_tool_v2.py` - vineyard row/leak detection tool.
- `viticulture_specialist.md` - viticulture reference/persona material.

### Shared Agent / Workflow Material
- `memory/`, `MEMORY.md`, `SOUL.md`, `USER.md`, `TOOLS.md`, `AGENTS.md` - agent continuity and operating context.
- `skills/` - local OpenClaw skills.
- `reports/ai-handoffs-bootstrap-2026-02-27/` - cross-model handoff workflow docs.

## Recommended Target Layout

Use neutral top-level buckets so new projects do not inherit the AeroSpect naming problem:

```text
client-sites/
  aerospect/
    production-baseline/
    homepage-preview-baseline/
    drafts/
    backups/

business-development/
  data-center-drone-services/
  hitt-capability-statement/
  nas-lemoore-outreach/

tools/
  grape-pipeline/
  vineyard-row-leak-detection/

agent/
  memory/
  skills/
  handoffs/
```

## Dry-Run Migration Plan

Do not run these as live moves without approval. They are the proposed direction:

```bash
mkdir -p client-sites/aerospect business-development/data-center-drone-services business-development/nas-lemoore-outreach business-development/hitt-capability-statement tools agent

mv aerospect-deployed-live client-sites/aerospect/production-baseline
mv aerospect-homepage-preview-live-baseline client-sites/aerospect/homepage-preview-baseline
mv aerospect-drafts client-sites/aerospect/drafts
mv aerospectinc-ionos-backup-deployed-2026-03-21 client-sites/aerospect/backups/ionos-deployed-2026-03-21
mv aerospectinc-ionos-backup-deployed-2026-03-21.zip client-sites/aerospect/backups/

mv reports/mission-critical-landing-2026-07-06 business-development/data-center-drone-services/landing-page-2026-07-06
mv reports/nas-lemoore-data-center-outreach-2026-07-06.md business-development/nas-lemoore-outreach/
mv reports/hitt-capability-statement-2026-05-29 business-development/hitt-capability-statement/2026-05-29

mv grape_pipeline tools/grape-pipeline
mv vineyard_row_leak_detection_tool_v2.py tools/vineyard-row-leak-detection/
```

## Practical Recommendation

First pass should be documentation-only plus selective new folders for future work. Do not move the live AeroSpect baseline until the deployment docs and memory references are updated together, because several notes currently point to exact paths.

For the next data center website, create it under:

```text
business-development/data-center-drone-services/
```

or, if it becomes a deployable standalone site:

```text
client-sites/data-center-drone-services/
```

