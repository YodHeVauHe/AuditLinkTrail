# AuditLinkTrail (ALT) Product and Development Workflow Design

Date: 2026-11-25
Status: Design approved in conversation; written spec pending user review

## Purpose

Prepare the repository and product roadmap so AuditLinkTrail (ALT) can be developed through GitHub Issues and issue-linked pull requests. The product direction is shared institutional audit infrastructure that works alongside existing systems and supports multiple institutional workflows from the outset.

This design replaces the procurement-only framing in the older MVP spec and implementation plans. Procurement remains a first-class workflow, but is no longer the whole product or the only workflow the platform is designed to support.

## Decisions from brainstorming

| Topic | Decision |
| --- | --- |
| Product name | AuditLinkTrail; use ALT as the short form after first mention |
| Product scope | Shared institutional audit infrastructure with multiple first-class workflows from the outset |
| Initial workflow domains | Procurement, financial reporting, compliance submissions, contracts, licensing, tax processes, NGO funding, and public expenditure |
| Product posture | Integrate alongside existing systems; keep source evidence in controlled systems and make integrity and history independently verifiable |
| Architecture approach | Shared platform capabilities with distinct workflow modules; avoid premature universal workflow-engine abstractions |
| Delivery | Phased GitHub Issues, implemented in `issue-<number>-<slug>` branches and delivered through PRs that close their issues |
| Development setup | Root-level project guidance, roadmap, issue/PR templates, and CI appropriate to the selected stack |
| Competitive input | IOTA Audit Trails is a reference for ordered shared histories, governed multi-writer access, lifecycle controls, and proofs that do not expose private source data; it is not an implementation specification |

## Product scope

ALT helps institutions and authorized counterparties create and verify trustworthy histories of important institutional events. It records what happened, when it happened, and which authorized actor or system attested to it. It supports verification of event order and evidence integrity across parties without requiring them to replace their operational systems.

The initial roadmap must account for all eight workflow domains named above. They are first-class product scope, not speculative future add-ons. Delivery can be sequenced in waves, but the shared architecture and backlog must capture each domain's actors, lifecycle, evidence, controls, permissions, verification needs, and acceptance criteria. Domain-specific distinctions should remain explicit where they materially differ.

### Shared platform capabilities to design and validate

- Institutional, human, and service identities, including attribution and authority for each action.
- Roles, capabilities, and scope boundaries for people, institutions, and integrations.
- A versioned event and evidence reference model that preserves ordering, origin, and context.
- Evidence intake and references to protected source material, with integrity proofs and verification paths.
- Append-only or otherwise tamper-evident history, independently checkable by authorized parties.
- Workflow lifecycle and policy rules, including who may submit, review, approve, amend, or close a record.
- Search, timelines, audit views, and explainable findings across relevant workflow records.
- APIs and integration adapters that allow ALT to operate alongside existing institutional systems.
- Operational controls for availability, retention, key management, access review, and incident response.

These are product capabilities to investigate and specify. This design does not select a ledger, database, consensus protocol, hosting model, identity provider, or specific frontend/backend stack. Those decisions belong in early architecture and validation issues, informed by cross-domain requirements and operating constraints.

### Workflow domains

The initial domain backlog covers:

1. Procurement, including approvals, supplier selection, contracts, and payments where applicable.
2. Financial reporting, including report preparation, attestation, submission, and subsequent verification.
3. Compliance submissions, including required evidence, responsible signatories, deadlines, and review outcomes.
4. Contracts, including creation, approval, execution, amendments, obligations, and completion evidence.
5. Licensing, including application, review, decision, issuance, renewal, and revocation events.
6. Tax processes, including declarations, supporting evidence, assessments, payments, and corrections.
7. NGO funding, including calls, applications, review, award, disbursement, and outcome reporting.
8. Public expenditure, including authorization, commitment, delivery evidence, payment, and oversight.

This list describes candidate workflow coverage based on the current pitch deck, not a claim that every domain has been validated with users or regulators. Discovery issues should establish actors, jurisdictional needs, data sensitivity, and existing-system integration points before a domain's detailed behavior is committed.

## Product principles and competitive context

- **Integrate alongside systems:** ALT should complement systems that create operational records, not assume they will be replaced.
- **Prove histories, not just files:** Preserve the relationship and order between events, the actor authority behind them, and evidence references.
- **Govern every writer:** Make permissions, delegation, lifecycle state, and authorized actions visible and enforceable.
- **Protect source data:** Keep confidential documents in controlled stores where possible; expose only the data needed to operate and verify a workflow.
- **Support independent verification:** A participant should be able to inspect the history and verify relevant proofs without relying solely on the party whose actions are under review.
- **Make findings explainable:** Distinguish process exceptions from cryptographic integrity failures and show the evidence behind each finding.
- **Avoid unsupported assurances:** Product documentation and demonstrations must not imply legal validity, regulatory compliance, or production readiness without appropriate validation.

The IOTA Audit Trails product page describes ordered records, shared verification, governed roles and capabilities, multiple writers, lifecycle controls, and keeping sensitive source data off-chain while anchoring proofs. These are useful competitive reference points for ALT's product requirements. ALT should assess these capabilities against its own institutional workflows and constraints; this design does not prescribe IOTA or any other underlying technology. Source: [IOTA Audit Trails](https://www.iota.org/products/audit-trails).

The current ALT materials position the product as an institutional integrity layer, initially grounded in African institutional use cases, and emphasize integration with existing systems. This is the product context for differentiating the roadmap; it does not claim feature superiority over the reference product.

## Architecture direction

Use a shared platform with domain workflow modules. Each shared capability should have a clear contract and be independently understandable. A workflow module should express domain-specific participants, transitions, evidence requirements, permissions, and findings while using shared identity, event, evidence, and verification services.

The intended conceptual flow is:

1. An existing system or authorized participant submits a versioned workflow event and evidence references.
2. ALT checks identity, authority, schema, and workflow rules, then records an attributable event in an ordered history.
3. Authorized parties inspect the current state and history through APIs or user interfaces.
4. Verification recomputes or checks integrity proofs and reports history, evidence, and workflow findings with their reasons.
5. Integrations can return verification results or event references to systems already used by the institution.

The implementation plan should break this into architecture and product decisions before committing to specific storage, cryptography, distribution, or consensus choices. The previous procurement MVP's fixed three-node quorum, local SQLite, Rust node, and Next.js console remain historical proposals until those choices are revalidated against the full product.

## Roadmap and GitHub delivery model

`docs/roadmap.md` will be the human-readable map of phases, outcomes, workflow coverage, and dependencies. GitHub Issues will be the actionable source of work. The roadmap should link to issues once they exist and should not become a second detailed task tracker.

### Issue shape

Each implementation issue should state:

- The user or operational problem and intended outcome.
- The relevant shared capability or workflow domain.
- In-scope behavior and explicit exclusions.
- Acceptance criteria observable by a reviewer or user.
- Dependencies and decisions that must be resolved first.
- Verification steps appropriate to the change.
- Documentation or compatibility impacts, where relevant.

Early issues should cover product discovery across the eight domains, threat and trust boundaries, architecture decisions, data classification, integration constraints, and development foundation. Later issues should deliver reusable capabilities and workflow-specific slices. Each domain should appear in the initial backlog, even if detailed implementation follows discovery.

### Branch and PR flow

- Branch names use `issue-<number>-<slug>`.
- A PR references and closes its issue with `Closes #<number>` when it completes the issue.
- PR descriptions summarize the behavior, acceptance criteria addressed, verification performed, and any follow-up issue needed.
- Work should normally stay scoped to one issue per PR; a genuinely inseparable change can be documented in the issue and PR.
- Issue forms, labels, and PR templates should make this format easy to follow without requiring contributors to memorize policy.

The workflow should be modeled on the [TokenWork repository](https://github.com/FoundationStoneAlgorithms/TokenWork)'s phased roadmap, GitHub Issues, and issue-number branch practice, not copy its domain-specific phase names or issue content.

## Repository preparation

The repository should provide a clear entry point for contributors and agents:

- A root `README.md` that explains ALT, repo layout, current status, prerequisites, local setup, and where roadmap/specs/issues live.
- A root contribution guide describing issue-first work, branch naming, PR closure, review expectations, and local verification.
- GitHub issue forms for product/feature work and defects, plus a PR template with issue linkage and verification prompts.
- A phase-based roadmap linked to a coherent product/architecture overview.
- Repository-level agent instructions with naming, workflow, documentation, and verification conventions; app-specific instructions can remain local to their app.
- CI checks added after the first product stack decisions, covering formatting, static checks, builds, and relevant automated tests for changed components.
- Clear handling for secrets, local environment files, generated outputs, and sample/demo data.

Avoid adding broad tooling before a stack decision establishes a need. Keep workflows and checks proportionate to the repository's actual components.

## Naming and legacy material

AuditLinkTrail is the canonical product name. Use **AuditLinkTrail (ALT)** at a document's first product reference where context needs the full name, and **ALT** thereafter. Product-facing package names, CLI names, environment-variable prefixes, service names, and examples should use an agreed `alt`/`auditlinktrail` form once implementation names are selected.

Tracked materials should be audited so the old product name does not remain in current guidance, plans, examples, configuration, or UI copy. Technical uses of “audit chain,” “blockchain,” or “chain” remain when they accurately describe a concept. Historical decisions may be retained only when clearly labeled as superseded context and necessary to explain why a current decision changed.

The procurement-only design and plans should be replaced or rewritten as ALT-wide artifacts rather than mechanically renamed. Keep the pitch deck, but update any content that presents procurement as the entire product or contradicts the agreed multi-workflow direction. Preserve procurement as one of the initial domains.

## Non-goals and boundaries

- This design does not specify or implement the eight workflows in detail.
- It does not choose the ledger or database technology, consensus design, cloud provider, cryptographic scheme, identity standard, or application stack.
- It does not assert that all domains have the same legal, regulatory, retention, or access requirements.
- It does not imply that every domain must ship simultaneously; it requires all to be represented in the initial product architecture and roadmap, with sequencing based on validation and dependencies.
- It does not authorize a production deployment, public launch, or claims of legal/regulatory compliance.
- It does not create the GitHub backlog in this design stage; the backlog is planned after the written spec and implementation plan are approved.

## Success criteria

The development foundation is ready when:

1. Current repo guidance presents a consistent AuditLinkTrail (ALT) identity and product direction.
2. The product roadmap includes the shared platform and all eight initial workflow domains, with transparent dependencies and validation work.
3. The roadmap and issue templates make each unit of work actionable and reviewable.
4. Contributors can follow an issue → branch → PR → closed issue path using the documented naming and templates.
5. CI provides relevant automated checks for the stack selected by the early architecture issues.
6. Legacy procurement-only assumptions are either reconciled with the full product or clearly marked as superseded.
7. Technology choices are traceable to validated product, operational, and cross-domain requirements.

## Next stage

After user review and approval of this written spec, create a detailed implementation plan that sequences repository preparation, product and architecture discovery, GitHub workflow setup, and issue backlog creation. That plan must preserve all eight workflow domains and identify where evidence from discovery gates later implementation decisions.
