# Contributing to AuditLinkTrail

## Start with an issue

Open or identify a GitHub Issue before implementation. The issue should describe the user or operational problem, intended outcome, scope, observable acceptance criteria, dependencies, and verification steps. Use the workflow-discovery form for domain research. Keep sensitive or personal records out of issues, examples, and logs.

If the work is outside the issue's scope, create a follow-up issue instead of expanding the pull request silently.

## People, teams, and AI-assisted contributions

Contributions are welcome from individuals, teams, and workflows that use AI agents. An AI agent may help research, draft, or implement a change, but a human maintainer must open or own the pull request, review the result, and confirm that they have the authority to submit the contribution. Please describe material AI assistance when it helps reviewers understand how the change was produced.

If Foundation Stone Algorithms accepts an implementation contribution for inclusion and merges it into ALT, the contributor grants Foundation Stone Algorithms a perpetual, worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, modify, distribute, sublicense, and include that contribution in ALT and related proprietary products. The license grant takes effect upon merge. The contributor retains ownership and confirms they have the rights and authority to grant this license, including for any AI-assisted material. Do not submit material under terms that conflict with this grant.

This contribution license does not grant contributors a license to Foundation Stone Algorithms' proprietary algorithms or other ALT code. The repository's [LICENSE](LICENSE) describes the project's proprietary boundary. Third-party code must retain its applicable license and notices.

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
