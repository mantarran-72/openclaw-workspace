# MODEL_ROUTING.md — Smart model selection rules

## Goals
- Reserve GPT-5.5 and Claude Sonnet for reasoning, decision-making, and complex analysis
- Use Claude Haiku for research, data gathering, reading, and mechanical tasks
- Minimize token burn on cheap work

## Auto-Route to Haiku (no approval needed)
These tasks are mechanical enough that Haiku handles them fine:

- **Web research & fetching** — `web_search`, `web_fetch`, pulling URLs
- **File operations** — Reading code, logs, configs; basic edits; grepping patterns
- **Data gathering** — Listing files, checking status, running diagnostic commands
- **Simple scripts** — Bash, Python utilities that don't require design decisions
- **Memory/documentation** — Reading/updating MEMORY.md, HEARTBEAT.md, daily notes
- **Routine git ops** — Status, log, pull, branch listing (not complex merges)
- **Subagent spawning** — Delegation prep; coordinating background work
- **Code generation from specs** — If you've given clear requirements, Haiku can write it

## Flag or Ask for GPT/Sonnet
Use expensive models for:

- **Architecture decisions** — Comparing approaches, trade-offs, design patterns
- **Bug diagnosis** — Root-cause analysis after simple steps fail
- **Optimization** — Performance tuning, refactoring, improving existing code
- **Complex rewrites** — Multi-file refactors, language migrations
- **Strategic analysis** — Market positioning, pricing, positioning (e.g., Bay Area Design Lab messaging)
- **Anything creative or nuanced** — Copy, positioning, storytelling
- **First-time implementation** — New feature design (after that, Haiku can maintain it)

## Hand-offs Between Models
If Haiku hits a wall:
- Haiku escalates by flagging the blocker in its response
- You decide if it needs GPT/Sonnet, or if Haiku should try a different angle
- I don't auto-escalate without your say-so

## Example Workflow

**You:** "Debug why the Vercel deployment is failing"
→ **Haiku:** Gathers logs, checks config, reads error traces
→ **If it's simple:** Haiku proposes a fix
→ **If it's tangled:** Haiku flags ("Looks like a build pipeline interaction issue; worth a second opinion?")
→ **You decide:** Point me to GPT or ask Haiku to dig deeper

**You:** "Rewrite the contact form to use a different validation library"
→ **Haiku:** Reads the current form, checks the library API, writes new code
→ **You test it:** Works? Done. Broken? Escalate reasoning to GPT

**You:** "Should we position as 'AI-powered local websites' or 'smart web design for local businesses'?"
→ **GPT/Sonnet:** Analyze messaging, market fit, brand coherence
→ Haiku doesn't do this; it's pure strategy

## Cost Estimates (rough)
- Haiku: ~1:50 vs GPT (input), 1:30 vs GPT (output)
- Sonnet: ~1:3 vs GPT (input), similar output cost
- For research-heavy sessions, Haiku could save 80%+ token spend

## Rules
1. You can always override — say "use GPT" or "stick with Haiku"
2. I default to Haiku for anything ambiguous (better to undershoot than overspend)
3. If a task straddles both (e.g., "write + decide"), I'll use GPT/Sonnet to keep coherence
4. Subagents default to Haiku unless you specify otherwise
5. This file is live — update it as we find edge cases
