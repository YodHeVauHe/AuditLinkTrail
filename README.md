# AuditLinkTrail (ALT)

AuditLinkTrail is shared institutional audit infrastructure for creating and independently verifying trustworthy histories of important events across institutional workflows. ALT is designed to integrate alongside existing systems. Its initial product scope includes procurement, financial reporting, compliance submissions, contracts, licensing, tax processes, NGO funding, and public expenditure.

**Status:** planning and development foundation. The product workflows and application architecture are being validated; the ALT runtime stack has not been selected. Nothing in this repository should be treated as production-ready or as a claim of legal or regulatory compliance.

## Project documents

- [Product overview](docs/product/overview.md)
- [Roadmap](docs/roadmap.md)
- [Approved product and development design](docs/superpowers/specs/2026-11-25-auditlinktrail-development-design.md)
- [GitHub Issues](https://github.com/YodHeVauHe/AuditLinkTrail/issues)
- [Contributing](CONTRIBUTING.md)

## Repository layout

- `PitchDeck/` — the existing Next.js presentation app; this is not the ALT product runtime.
- `brand/` — approved brand assets.
- `docs/` — product design, development plans, and roadmap.
- `.github/` — issue forms, pull request template, and CI workflows.

## Local development

The PitchDeck app is the only runnable app at this stage. From the repository root:

```bash
cd PitchDeck
npm ci
npm run dev
```

Other available checks from `PitchDeck/`:

```bash
npm run lint
npm run typecheck
npm run build
```

## Work tracking

Development work starts from a GitHub Issue with an outcome, scope, acceptance criteria, dependencies, and verification steps. Use an `issue-<number>-<slug>` branch and open a pull request that references the issue with `Closes #<number>`. The issue templates and [contribution guide](CONTRIBUTING.md) describe the expected details.
