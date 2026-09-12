# Firefly Entertainment — Bilingual Site Plan

## Approved logo asset

- Use the uploaded black-and-white Firefly logo exactly as provided.
- Place the black logo on the white website background; no recoloring, redrawing, distortion, cropping, or background added.
- The logo is stored as the project's primary brand asset and referenced directly; no placeholder is needed.
- Do not sample colors from this black-and-white logo.

## Sitemap

```text
/            Landing: logo + tagline + English / 中文
/en          English home (About, What We Do, Our Approach, Contact)
/en/team     English team page
/zh          Simplified Chinese home (same sections as /en)
/zh/team     Simplified Chinese team page
```

Home per language uses in-page anchored sections so each language version is one fast, quiet scroll. A small language switcher (EN / 中文) sits top-right on /en and /zh, plus a "Team" link in the navigation on both /en and /zh.

## Taglines (final, no alternatives)

- Landing page (before language selection): **The Show Must Go On**
- English version (/en and /en/team): **The Show Must Go On**
- Simplified Chinese version (/zh and /zh/team): **好戏，必须上演**

"FUN AND BRANDED" stays as an existing brand descriptor, used once in the About copy, not as the tagline.

## Landing page

- White background, nothing else on screen but centered content
- Black-and-white Firefly logo, centered, generous space around it
- Tagline "The Show Must Go On" below, small caps-ish, wide letter spacing, dark charcoal
- Below that, two plain text choices: `English` and `中文`, separated by a thin divider
- Hover on a language: a fine 1px line under it fades in using the restrained violet-purple accent
- No menu, no imagery, no footer clutter

## Team page (/en/team, /zh/team)

- Simple grid of team member cards: photo, name, role, short biography
- No real people, titles, biographies, or achievements until you provide approved information — every card is a clearly marked placeholder (gray portrait box labeled "Photo — awaiting approval", name/role/bio marked as placeholders)
- Same visual system and navigation as the home pages

## Internal page sections

- **About Firefly Entertainment** — short positioning paragraph, no claims, no numbers; "FUN AND BRANDED" appears once as an existing brand descriptor
- **What We Do** — three or four service areas as plain text cards; I will draft neutral wording for you to correct
- **Our Approach** — three short principles
- **Contact** — david@fireflyentertainment.net as a mailto link, nothing more

No clients, artists, awards, stats, testimonials, offices, or certifications anywhere. Any copy I draft is marked as draft for your review.

## Visual system

- Palette: mostly black, white, light gray, and dark charcoal; one restrained violet-purple accent only for links, small marks, focus rings, and fine details
- No colorful logo, no large color gradients, no gradient panels or backgrounds
- Surfaces: white primary, very light gray for alternating section bands
- Text: dark charcoal; muted gray for secondary lines
- Accent usage: links, focus rings, small marks, and the 1px language hover underline only
- Type: one refined sans for both languages, with a Chinese-capable fallback stack; generous line height, restrained sizes
- Layout: mobile-first, wide margins on desktop, comfortable spacing on small screens, generous vertical rhythm
- Light theme only; no dark mode toggle
- Overall feel: restrained, minimal, modern, editorial, premium

## Responsive behavior

- One responsive web experience for desktop, tablet, and mobile — no separate mobile app or mobile site
- Mobile-first layout, wide margins on desktop, comfortable spacing on small screens
- Verified at 375px, 390px, and 430px widths: readable typography, touch targets at least 44px, navigation collapses cleanly on small screens, zero horizontal scrolling

## Technical notes

- Routes as separate files: `/` (landing, replaces the placeholder index), `/en`, `/en/team`, `/zh`, `/zh/team`
- Static pages, prerendered at build for fast first paint
- Per-route SEO: unique title, description, og:title, og:description, og:type; `hreflang` links between /en and /zh (and team pages); canonical per route
- Shared React components for section layout, language copy held in a typed content module so the two languages stay in sync
- Colors added as semantic design tokens in the global stylesheet, no hardcoded color classes
