# AuditLinkTrail product overview

AuditLinkTrail (ALT) is planned as shared institutional audit infrastructure that helps participants create and independently verify trustworthy histories of important events. ALT is intended to integrate alongside existing systems, so institutions can retain their operational tools and keep source evidence in controlled systems while sharing the event history and evidence references needed for review.

## Shared platform

The platform direction brings together capabilities that can serve distinct institutional workflows:

- Identity, authority, roles, and governance for institutions, people, services, and other authorized writers.
- Attributable, ordered events and references to source evidence, with integrity checks and verification paths.
- Governed workflow lifecycles that express who may submit, review, approve, amend, or close records.
- Tamper-evident histories, timelines, and views that authorized parties can inspect and verify independently.
- Explainable findings that distinguish workflow exceptions from integrity failures and show their supporting evidence.
- APIs and integration adapters for systems already used by participating institutions.

These capabilities are product requirements to validate, not a commitment to a particular ledger, database, consensus protocol, identity provider, or application stack.

## Initial workflow domains

All eight domains are first-class in ALT's initial product scope and discovery backlog:

1. [Procurement](https://github.com/YodHeVauHe/AuditLinkTrail/issues/5) — approvals, supplier selection, contracts, and payments where applicable.
2. [Financial reporting](https://github.com/YodHeVauHe/AuditLinkTrail/issues/6) — preparation, attestation, submission, and subsequent verification.
3. [Compliance submissions](https://github.com/YodHeVauHe/AuditLinkTrail/issues/7) — evidence, responsible signatories, deadlines, and review outcomes.
4. [Contracts](https://github.com/YodHeVauHe/AuditLinkTrail/issues/8) — creation, approval, execution, amendments, obligations, and completion evidence.
5. [Licensing](https://github.com/YodHeVauHe/AuditLinkTrail/issues/9) — application, review, decision, issuance, renewal, and revocation.
6. [Tax processes](https://github.com/YodHeVauHe/AuditLinkTrail/issues/10) — declarations, supporting evidence, assessments, payments, and corrections.
7. [NGO funding](https://github.com/YodHeVauHe/AuditLinkTrail/issues/11) — calls, applications, review, awards, disbursements, and outcome reporting.
8. [Public expenditure](https://github.com/YodHeVauHe/AuditLinkTrail/issues/12) — authorization, commitment, delivery evidence, payment, and oversight.

The details above are discovery prompts, not final domain specifications. Actors, jurisdictional needs, data sensitivity, controls, and integration points remain subject to discovery. Domain differences should remain explicit where they matter.

## Product principles

- Integrate alongside existing systems and preserve appropriate institutional control over source records.
- Represent actors, authority, event order, workflow state, and evidence references clearly.
- Govern every writer and make permissions and delegated actions reviewable.
- Support independent verification without exposing source material unnecessarily.
- Make findings explainable and distinguish process exceptions from integrity failures.
- Avoid claims of legal validity, regulatory compliance, superiority, or production readiness without evidence.

## Context and planning status

[IOTA Audit Trails](https://www.iota.org/products/audit-trails) is a competitive reference for ordered shared histories, governed multi-writer access, lifecycle controls, and proofs that can avoid exposing private source data. It informs product discovery; it does not prescribe ALT's implementation.

[TokenWork](https://github.com/FoundationStoneAlgorithms/TokenWork) is the reference for phased planning through GitHub Issues and issue-linked pull requests.

ALT is in product and architecture discovery. Its eight workflow domains are represented in the initial roadmap, while detailed requirements and the runtime technology choices remain open. Procurement is an initial market entry, not the full product scope.

See the [roadmap](../roadmap.md), [GitHub Issues](https://github.com/YodHeVauHe/AuditLinkTrail/issues), and [approved product and development design](../superpowers/specs/2026-11-25-auditlinktrail-development-design.md).
