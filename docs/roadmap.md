# AuditLinkTrail roadmap

This roadmap describes outcomes and dependencies; GitHub Issues are the actionable source of work. Dates and estimates are intentionally omitted while product and operating discovery is underway.

## Workflow discovery

All eight domains are first-class in the initial scope. Procurement remains the initial market entry. Their specific behavior, actors, controls, data boundaries, and integration needs are subject to discovery.

| Domain | Discovery issue |
| --- | --- |
| Procurement | [#5](https://github.com/YodHeVauHe/AuditLinkTrail/issues/5) |
| Financial reporting | [#6](https://github.com/YodHeVauHe/AuditLinkTrail/issues/6) |
| Compliance submissions | [#7](https://github.com/YodHeVauHe/AuditLinkTrail/issues/7) |
| Contracts | [#8](https://github.com/YodHeVauHe/AuditLinkTrail/issues/8) |
| Licensing | [#9](https://github.com/YodHeVauHe/AuditLinkTrail/issues/9) |
| Tax processes | [#10](https://github.com/YodHeVauHe/AuditLinkTrail/issues/10) |
| NGO funding | [#11](https://github.com/YodHeVauHe/AuditLinkTrail/issues/11) |
| Public expenditure | [#12](https://github.com/YodHeVauHe/AuditLinkTrail/issues/12) |

## Phases

| Phase | Outcome | Exit condition |
| --- | --- | --- |
| 0. Product and operating discovery | Actors, workflows, data boundaries, and system constraints documented for all eight domains | Domain and cross-domain discovery issues reviewed; unresolved assumptions visible |
| 1. Shared platform architecture | Validated contracts and architecture decisions for identity, authority, events, evidence, history, verification, and integration | Architecture synthesis issue resolved with ADRs and trade-offs |
| 2. Multi-workflow foundation | Shared capabilities and workflow modules support multiple validated domains through end-to-end slices | At least two distinct workflows use shared capabilities with independently reviewable acceptance evidence; remaining domains stay in the active roadmap |
| 3. Controlled institutional pilots | Pilot boundaries, governance, support, retention, security, and operational readiness validated | Explicit pilot-readiness criteria agreed; no production or compliance claim without evidence |
| 4. Cross-institution expansion | Governed shared verification and integrations extend across institutions | Governance, access, operational ownership, and verification model reviewed |

## Cross-domain discovery and architecture

- [#13 Shared event, evidence, and history model](https://github.com/YodHeVauHe/AuditLinkTrail/issues/13)
- [#14 Identity, authority, roles, and multi-writer governance](https://github.com/YodHeVauHe/AuditLinkTrail/issues/14)
- [#15 Independent verification and explainable findings](https://github.com/YodHeVauHe/AuditLinkTrail/issues/15)
- [#16 Integration and operating constraints](https://github.com/YodHeVauHe/AuditLinkTrail/issues/16)
- [#17 Architecture synthesis from validated cross-domain requirements](https://github.com/YodHeVauHe/AuditLinkTrail/issues/17)

Phase sequencing is subject to discovery outcomes. The platform should serve multiple validated workflows from the outset, while each domain's differences remain visible in product requirements and acceptance criteria. See the [product overview](product/overview.md) and [approved product and development design](superpowers/specs/2026-11-25-auditlinktrail-development-design.md).
