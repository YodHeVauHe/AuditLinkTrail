# ALT Brand Icon Exports Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add upload-ready PNG versions of the existing ALT mark for X, web, desktop, and mobile contexts.

**Architecture:** Keep `brand/logo/alt.svg` as the editable source. Commit raster exports under `brand/exports/`, all with a consistent opaque warm-light background so the dark-and-gold mark remains visible on profile and device surfaces.

**Tech Stack:** Existing SVG source; PNG raster exports; Python Pillow for format and dimension inspection.

**Spec:** GitHub issue #25, “Add upload-ready ALT brand icon exports” (acceptance criteria and verification steps).

## Global Constraints

- Preserve the existing ALT mark and brand colors.
- X profile PNG must be 400×400 and below 2 MB.
- Keep this PR scoped to the brand exports and their implementation plan.
- Leave unrelated workspace changes out of the branch.

## Review Focus

- X profile upload compatibility: 400×400 square PNG, opaque, and below 2 MB.
- Icon visibility: dark mark and gold accent remain clear against the light background.
- Export consistency: device and web assets are square, correctly named, and valid PNG files.

---

### Task 1: Add and verify the brand export set

**Files:**
- Create: `brand/exports/x-profile-400.png`
- Create: `brand/exports/app-icon-1024.png`
- Create: `brand/exports/desktop-icon-512.png`
- Create: `brand/exports/mobile-icon-512.png`
- Create: `brand/exports/apple-touch-icon-180.png`
- Create: `brand/exports/favicon-48.png`
- Create: `brand/exports/favicon-32.png`
- Create: `docs/superpowers/plans/2026-11-26-alt-brand-icon-exports.md`

**Interfaces:**
- Consumes: `brand/logo/alt.svg`, the approved vector mark.
- Produces: Square PNG assets for profile and application surfaces.

- [ ] Confirm `brand/logo/alt.svg` on the issue base branch matches the source used to render the exports.
- [ ] Inspect every PNG's format and square dimensions; confirm the X asset is exactly 400×400 and below 2 MB.
- [ ] Review the 400×400 render for mark visibility at avatar size.
- [ ] Stage only `brand/exports/` and this plan, then commit with an issue-referencing conventional subject and `Changes:` / `Verification:` sections.
