# Repository guidance

## Product naming and scope

- The canonical product name is AuditLinkTrail. Write **AuditLinkTrail (ALT)** at first mention where context needs the full name, then **ALT**.
- Keep all eight initial workflow domains visible: procurement, financial reporting, compliance submissions, contracts, licensing, tax processes, NGO funding, and public expenditure.
- Do not infer the ALT runtime stack or requirements from the superseded procurement-only design and plans.
- Do not put real confidential or personal records in code, fixtures, issues, logs, or examples.
- Record architecture decisions with the options considered, rationale, and evidence.

## Issue-to-PR workflow

- Start implementation from a GitHub Issue with a clear outcome, scope, acceptance criteria, dependencies, and verification steps.
- Use branches named `issue-<number>-<slug>`.
- Pull requests should include `Closes #<number>` when completing an issue and report the verification actually performed.
- Keep changes scoped to the issue; open follow-up issues for separate work.

## Source of truth

- The approved product design is `docs/superpowers/specs/2026-11-25-auditlinktrail-development-design.md`.
- The product overview and phase roadmap live in `docs/product/overview.md` and `docs/roadmap.md` once published.
- `PitchDeck/AGENTS.md` contains the Next.js-specific instructions for the presentation app; do not duplicate them here.

## graphify

- The `graphify` skill (`~/.Codex/skills/graphify/SKILL.md`) is for knowledge graph input. When the user types `/graphify`, invoke the `graphify` skill before doing anything else.

## GitHub commit writing standard

- Whenever creating or pushing a commit to GitHub, use a concise conventional subject (include the related issue number when known), followed by `Changes:` bullets and `Verification:` bullets.
- Use real newlines, never literal `\n` text. Include the body and do not add trailers.
