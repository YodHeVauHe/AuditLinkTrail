# Contributing to AuditLinkTrail

## Start with an issue

Open or identify a GitHub Issue before implementation. The issue should describe the user or operational problem, intended outcome, scope, observable acceptance criteria, dependencies, and verification steps. Use the workflow-discovery form for domain research. Keep sensitive or personal records out of issues, examples, and logs.

If the work is outside the issue's scope, create a follow-up issue instead of expanding the pull request silently.

## Branches and pull requests

- Name a branch `issue-<number>-<slug>`.
- Keep a pull request focused on the issue's acceptance criteria.
- Include `Closes #<number>` in the pull request description when it completes the issue.
- Explain the change, list the acceptance criteria addressed, and report the verification commands and results.
- Link a follow-up issue for work intentionally left out.

## Naming and product decisions

Use **AuditLinkTrail (ALT)** at a document's first product reference when context needs the full name, and **ALT** thereafter. Keep workflow and domain language explicit; do not describe ALT as procurement-only.

The current product source of truth is the approved design in `docs/superpowers/specs/2026-11-25-auditlinktrail-development-design.md`. The procurement-only plans are superseded and must not be used to infer the ALT runtime stack or current product requirements. Record architecture decisions with their rationale, alternatives, and evidence.

## Local verification

The current runnable app is `PitchDeck/`. Run its checks from that directory:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

For documentation or configuration changes, run `git diff --check` and inspect the affected links, forms, or workflow. There is no ALT application test suite yet; do not invent a test command for it.

## Commit messages

Use a concise conventional subject, including the related issue number when known, followed by these sections using real newlines:

```text
docs: describe a concrete change (#123)

Changes:
- Describe the first concrete change.
- Describe another meaningful change.

Verification:
- `command`: result.
```

Do not add trailers.
