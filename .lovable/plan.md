# Firefly Entertainment — Bilingual Site Plan

## Note before building

No Firefly logo file exists in the project yet. Please upload the logo (PNG with transparency, or SVG). Until it arrives, the landing page will show a clearly marked placeholder box in the logo's place. The exact accent purple will be sampled from the uploaded file; until then a close violet stand-in is used.

## Sitemap

```text
/            Landing: logo + tagline + English / 中文
/en          English home (About, What We Do, Our Approach, Contact)
/zh          Simplified Chinese home (same sections)
```

Single-page-per-language, with in-page anchored sections so each language version is one fast, quiet scroll. A small language switcher (EN / 中文) sits top-right on /en and /zh.

## Landing page

- White background, nothing else on screen but centered content
- Logo, centered, generous space around it
- One line of tagline below, small caps-ish, wide letter spacing, dark charcoal
- Below that, two plain text choices: `English` and `中文`, separated by a thin divider
- Hover on a language: a fine 1px line under it fades in using the logo's blue → violet → magenta gradient
- No menu, no imagery, no footer clutter

## Three tagline options

1. **Fun, By Design** — 有趣，是设计出来的
2. **Entertainment, Made Memorable** — 让娱乐被记住
3. **Where Brands Come To Play** — 让品牌玩起来

"FUN AND BRANDED" stays as an existing brand descriptor, used once in the About copy, not as the tagline. Pick one option (or ask for another round) before I build.

## Internal page sections

- **About Firefly Entertainment** — short positioning paragraph, no claims, no numbers
- **What We Do** — three or four service areas as plain text cards; I will draft neutral wording for you to correct
- **Our Approach** — three short principles
- **Contact** — david@fireflyentertainment.net as a mailto link, nothing more

No clients, artists, awards, stats, testimonials, offices, or certifications anywhere. Any copy I draft is marked as draft for your review.

## Visual system

- Surfaces: white primary, very light gray for alternating section bands
- Text: dark charcoal; muted gray for secondary lines
- Accent: single violet-purple sampled from the logo — used on links, small marks, focus rings
- Gradient (blue → violet → magenta): only hairline accents and hover underlines
- Type: one refined sans for both languages, with a Chinese-capable fallback stack; generous line height, restrained sizes
- Layout: mobile-first, wide margins, large vertical rhythm, no shadows or gradients on panels
- Light theme only; no dark mode toggle

## Technical notes

- Routes as separate files: `/` (landing, replaces the placeholder index), `/en`, `/zh`
- Static pages, prerendered at build for fast first paint
- Per-route SEO: unique title, description, og:title, og:description, og:type; `hreflang` links between /en and /zh; canonical per route
- Shared React components for section layout, language copy held in a typed content module so the two languages stay in sync
- Colors added as semantic design tokens in the global stylesheet, no hardcoded color classes
