# AuditLinkTrail (ALT) — Logo Guidelines (compact)

## 1. The logo
- **Idea**: An A drawn as an ascending trail with a diamond waypoint at the apex — every path leads up to the record. The trail, the link and the audit in one mark.
- **Versions**: primary (horizontal, symbol + "ALT") · stacked · symbol-only · small-size cut (≤32 px, merged silhouette)
- **Files**: `brand/logo/final/`
  - `alt-symbol.svg` — symbol, gold (primary, dark surfaces)
  - `alt-symbol-light.svg` — symbol, ink + gold waypoint (light surfaces)
  - `alt-symbol-mono-black.svg` / `alt-symbol-mono-white.svg` — one-colour (print, embroidery, stamps)
  - `alt-symbol-small.svg` — small-size cut for ≤32 px
  - `alt-lockup-horizontal.svg` (+ `-light`) · `alt-lockup-stacked.svg`
  - `alt-icon-tile.svg` — carbon app-icon tile · `favicon.ico`, `favicon.svg`, `site.webmanifest`, PNG icon set
- The system is **stroke-based**: legs and crossbar are 26-unit strokes (round caps) on a 256-unit canvas; the letterforms are 24-unit strokes of the same style. Keep any future icons in this language.

## 2. Clear space
Keep a clear zone of **1 × diamond height** (the waypoint, ~68 units of the 256 canvas) around the symbol and lockups on all sides. The zone scales with the logo — never use a fixed distance.

## 3. Minimum size
| Version | Screen | Print |
|---|---|---|
| Horizontal lockup | 120 px wide | 32 mm wide |
| Stacked lockup | 72 px wide | 20 mm wide |
| Symbol | 32 px (16 px: use `alt-symbol-small.svg`) | 6 mm |

## 4. Colour
| Name | HEX | RGB | CMYK (approx) | Pantone (approx) |
|---|---|---|---|---|
| Brand gold | #C9A45C | 201·164·92 | 0·26·66·14 | 4515 C |
| Carbon | #08080A | 8·8·10 | — (use rich black) | Black 6 C |
| Ink (light surfaces) | #14110C | 20·17·12 | 0·21·71·87 | Black 4 C |

**Approved pairs**: gold on carbon (primary) · gold on any dark ≥3:1 · ink+gold on white/light · mono black on white · mono white on dark or photos.
On photos, use mono white or mono black on a calm area; never gold over busy imagery.

## 5. Typography
- Wordmark "ALT" is custom-constructed (paths) — never retype it for a logo file.
- Deck/UI type: the existing deck families (display + mono kickers). Web fallback: system sans stack.

## 6. Don'ts
Don't stretch or squash · don't recolour outside the palette · don't rotate · don't add shadows, outlines, gradients or effects · don't rearrange or resize the parts of a lockup · don't place on busy backgrounds without a container · don't separate the diamond from the A or close the diamond–legs gap.

## 7. Handover notes
- Chosen at the concept checkpoint: **Waypoint A** (B). Rejected along the way: a 3-link "custody chain" crossbar (merged into a blob at small size) and the rectangular first Ledger cut (read as "B").
- Tests run: `svg_audit.py` (98–99/100), size ladder 96/64/32/16 px, one-colour, reversed, peer test vs Auth0/Dashlane/Tor, shelf test vs security-identity category (no shield/padlock/chain clichés used).
- Trademark clearance not verified — commission a professional search before registration.
- The gold (#C9A45C) reaches ~2.5:1 on white: on light surfaces use the `-light` ink version, not all-gold.
