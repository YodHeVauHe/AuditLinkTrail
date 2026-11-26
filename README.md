# AuditLinkTrail (ALT)

**Shared institutional audit infrastructure for trustworthy, independently verifiable histories.**

AuditLinkTrail (ALT) is being developed to help institutions and authorized counterparties record important events, preserve their order and attribution, and verify evidence integrity across workflows. ALT is designed to work alongside existing systems: operational records and source evidence can remain in the systems that already control them.

> **Project status:** Product and architecture discovery. The eight initial workflow domains are in scope, but their detailed requirements and ALT's runtime stack are still being validated. This repository is not a production service and makes no claim of legal validity or regulatory compliance.

## What ALT is being designed to support

- Attributable events with clear ordering, authority, and workflow context.
- References to source evidence with integrity checks and independent verification paths.
- Governed workflows that make it clear who may submit, review, approve, amend, or close a record.
- Explainable findings that distinguish workflow exceptions from integrity failures.
- APIs and integrations that complement existing institutional systems.

These are product goals under discovery, not claims that the capabilities are implemented today. ALT does not yet have a selected ledger, database, consensus protocol, identity provider, or application stack.

## Initial workflow domains

All eight domains are represented in the initial discovery roadmap:

1. Procurement
2. Financial reporting
3. Compliance submissions
4. Contracts
5. Licensing
6. Tax processes
7. NGO funding
8. Public expenditure

Procurement is the initial market entry, not the full product scope. Domain requirements, actors, jurisdictional needs, data sensitivity, and integration points are subject to validation.

## Repository contents

| Path | Purpose |
| --- | --- |
| `PitchDeck/` | Existing Next.js product presentation; not the ALT runtime application |
| `brand/` | Approved ALT brand assets |
| `docs/product/overview.md` | Product direction and shared capabilities |
| `docs/roadmap.md` | Phases, outcomes, and discovery issues |
| `docs/superpowers/specs/` | Product and development design records |
| `.github/ISSUE_TEMPLATE/` | Work and workflow discovery issue forms |
| `.github/PULL_REQUEST_TEMPLATE.md` | Pull request checklist |

GitHub Issues are the actionable work tracker. Start with the [roadmap](docs/roadmap.md), [product overview](docs/product/overview.md), or [open issues](https://github.com/YodHeVauHe/AuditLinkTrail/issues).

## Run the presentation locally

The presentation is currently the only runnable application in this repository. It requires Node.js 20.9 or newer and npm.

```bash
cd PitchDeck
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). To run the available checks, from `PitchDeck/`:

```bash
npm run lint
npm run typecheck
npm run build
```

These commands validate the presentation app; they do not test an ALT backend or production deployment.

## Contributing

Contributions are welcome from people and teams, including work created with AI agents. Each pull request must have a human maintainer responsible for the change, its provenance, and the right to submit it. Start from a GitHub Issue, use an `issue-<number>-<slug>` branch, and include `Closes #<number>` when the PR completes that issue.

Before implementation contributions are merged, contributors must grant Foundation Stone Algorithms the rights described in [CONTRIBUTING.md](CONTRIBUTING.md). That allows accepted work to be maintained as part of proprietary ALT. See the [contribution guide](CONTRIBUTING.md) for scope, review, verification, and agent-assisted contribution details.

## Security and sensitive information

ALT is intended for institutional records and evidence, but this repository is not a secure evidence store. Do not add real personal, confidential, financial, or procurement records to source files, examples, fixtures, logs, or public GitHub issues. Use synthetic data for development and discussion.

## License and proprietary algorithms

The Foundation Stone Algorithms that form ALT's core functionality are proprietary to **Foundation Stone Algorithms**. No open-source license is granted to those algorithms by making this repository publicly viewable. See [LICENSE](LICENSE) for the repository's current terms. Third-party components remain subject to their respective licenses.

Contributing to ALT does not make the core algorithms open source. Contribution terms permit Foundation Stone Algorithms to use accepted contributions in ALT and related proprietary work; the contributor retains ownership of their contribution as described in [CONTRIBUTING.md](CONTRIBUTING.md).
