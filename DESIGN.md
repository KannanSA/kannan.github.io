---
name: Kannan
description: "A personal record in product-site grammar: a centered claim, round pills, and large work panels."
colors:
  sunset: "#ff6308"
  sunset-wash: "rgba(255, 99, 8, 0.14)"
  field: "#0a0a0a"
  ink: "#ffffff"
  stone: "#b7b1a8"
  panel: "#1a1a1a"
  panel-hover: "#222"
  recess: "#141414"
  chip: "#202020"
  chip-hover: "#2c2c2c"
  pill-hover: "#e6e1d8"
  hairline: "rgba(255, 255, 255, 0.08)"
typography:
  display:
    fontFamily: '"Geist", "Noto Sans Tamil", "Segoe UI", sans-serif'
    fontSize: "clamp(2.75rem, 6.2vw, 4.75rem)"
    fontWeight: 450
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: '"Geist", "Noto Sans Tamil", "Segoe UI", sans-serif'
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"Geist", "Noto Sans Tamil", "Segoe UI", sans-serif'
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Geist", "Noto Sans Tamil", "Segoe UI", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: '"Geist", "Noto Sans Tamil", "Segoe UI", sans-serif'
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  mono:
    fontFamily: '"Geist Mono", ui-monospace, "Segoe UI Mono", monospace'
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
rounded:
  pill: "999px"
  panel: "16px"
  field: "12px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  gutter: "20px"
  inset: "22px"
  lg: "32px"
  block: "36px"
  header: "64px"
  section: "112px"
  section-compact: "80px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.field}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.pill-hover}"
    textColor: "{colors.field}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-ghost:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-ghost-hover:
    backgroundColor: "{colors.chip-hover}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  button-primary-sm:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.field}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "36px"
  button-primary-sm-hover:
    backgroundColor: "{colors.pill-hover}"
    textColor: "{colors.field}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "36px"
  button-ghost-sm:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "36px"
  button-ghost-sm-hover:
    backgroundColor: "{colors.chip-hover}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "36px"
  button-menu:
    backgroundColor: "{colors.chip}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "40px"
    width: "40px"
  button-menu-hover:
    backgroundColor: "{colors.chip-hover}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "40px"
    width: "40px"
  chip-announce:
    backgroundColor: "{colors.recess}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 10px 0 6px"
    height: "32px"
  chip-sunset:
    backgroundColor: "{colors.sunset-wash}"
    textColor: "{colors.sunset}"
    rounded: "{rounded.pill}"
    padding: "0 8px"
    height: "20px"
  card-work:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
  card-work-hover:
    backgroundColor: "{colors.panel-hover}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
  input-composer:
    backgroundColor: "{colors.recess}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "14px 16px"
---

# Design System: Kannan

## Overview

**Creative North Star: "The Product Record"**

Kannan's site is a personal record set in product-site grammar. A fixed wordmark and text navigation sit on a near-black field. The opening view is a centered claim, the bio, and two pills. Under that, the work is a set of large panels, then hairline bands for figures, experience, education, skills, and contact.

The material is flat and tonal. Field, recess, panel, and chip are steps of the same black. Ink carries the claim and the primary pill. Warm stone carries dates, contexts, and footer links. Sunset colors a single announcement chip and the text selection. Geist carries the voice: weight 450 for the claim, weight 500 for structure, and weight 400 for prose. Geist Mono is for the spec plates inside work panels.

The layout grammar follows the live x.ai homepage as of 24 Nov 2026. The identity stays Kannan's. The favicon is the white K at `public/mark.svg`, drawn on a field square with an 8px corner.

**Key Characteristics:**

- Near-black tonal field, panels stepped lighter, no drop shadows
- Centered claim, then a left-aligned record in a 1120px column
- Geist 450 for the claim and 500 for titles, pills, and labels
- Fully round pills and 16px work panels
- Sunset on one chip, warm stone for meta
- Hairline dividers at 8% white
- Six-column work grid with a four-span lead panel

## Colors

The page is a dark tonal stack with one orange. `color-scheme` is dark, and the theme color is the field. Sunset is the only accent. The main action is still the white pill; that white is ink, a neutral.

### Primary

- **Sunset** (`#ff6308`): The Physics tag on the hero announcement, and the text-selection background. Selected text returns to the field color.
- **Sunset Wash** (`rgba(255, 99, 8, 0.14)`): The fill behind that Physics tag. It is the only sunset surface.

### Neutral

- **Field** (`#0a0a0a`): Page background, fixed header, mobile menu, favicon ground, and the text on a white pill.
- **Ink** (`#ffffff`): Claim, prose, links, the solid pill fill, and the focus outline.
- **Warm Stone** (`#b7b1a8`): Meta. Dates, kickers, card context, organisations, placeholders, composer notes, and footer links.
- **Panel** (`#1a1a1a`): Work panels.
- **Panel Hover** (`#222`): Work panel hover.
- **Recess** (`#141414`): Announcement chip and the message composer.
- **Chip** (`#202020`): Ghost pills, the menu button, and the desktop nav-link hover.
- **Chip Hover** (`#2c2c2c`): Ghost pill and menu-button hover.
- **Warm Paper** (`#e6e1d8`): Solid white pill hover.
- **Hairline** (`rgba(255, 255, 255, 0.08)`): Row dividers, the plate rules, the figure band, the footer edge, the composer stroke, and the scrolled header line.

### Named Rules

**The One Sunset Rule.** Sunset and its wash are the announcement tag and the text-selection highlight. Buttons, panels, links, and figures stay in the neutral stack.

**The Tonal Step Rule.** Surfaces step field, then recess, then panel, then chip. Hover advances one step: warm paper on the white pill, panel hover on a work panel, chip hover on a ghost pill.

## Typography

**Display Font:** Geist (with Noto Sans Tamil, Segoe UI, sans-serif)

**Body Font:** Geist (with Noto Sans Tamil, Segoe UI, sans-serif)

**Label/Mono Font:** Geist Mono (with ui-monospace, Segoe UI Mono, monospace), used on type plates

**Character:** One sans family, tightly tracked on the claim and easy at reading size. Geist is loaded as a variable font from 400 to 600, which is what makes weight 450 real. Geist Mono is loaded at 400 and 500. Noto Sans Tamil is in the text stack; the footer word வணக்கம் sets it explicitly.

### Hierarchy

- **Display** (450, `clamp(2.75rem, 6.2vw, 4.75rem)`, line-height 0.98, tracking `-0.03em`): The hero claim only, centered, max 16ch. Motion shows “Software for” and a cycling word. Reduced motion shows the full still sentence.
- **Headline** (500, `clamp(2rem, 4vw, 3rem)`, line-height 1, tracking `-0.03em`): Section titles for Experience, Education, Technical skills, and Contact. The figure band uses the same weight and tracking at `clamp(1.6rem, 2.4vw, 2rem)`, line-height 1.1.
- **Title** (500, 20px, line-height 1.25, tracking `-0.02em`): Record titles. Card foot titles are 16px at the same weight and tracking. The footer name is 28px, weight 500, tracking `-0.04em`, line-height 1. The header wordmark is 15px, weight 500, tracking `-0.03em`.
- **Body** (400, 16px, line-height 1.65): The bio (max 40rem), section copy (max 38rem), and record detail (max 62ch). The document root is 16px at weight 400 and line-height 1.5; this token is the prose measure. Meta lines inherit the root.
- **Label** (500, 13px): Nav links, the announcement, kickers, small pills, and footer column headings. Default pills are 14px at weight 500. Organisations, deltas, and footer links are 14px warm stone at weight 400. The sunset tag is 11px at weight 500, local to that chip.
- **Mono plate** (400, 12.5px, Geist Mono): Key/value rows inside a work panel. The label is warm stone, the value is ink.

Inside a panel, a large figure uses weight 500, tracking `-0.04em`, and line-height 0.9. Its size is set in container query units so it fills that panel.

### Named Rules

**The 450 Claim Rule.** Weight 450 is the hero claim. Titles, navigation, pills, kickers, and the footer name are 500. Prose and meta are 400.

**The Plate Rule.** Geist Mono sets the key/value plate inside a work panel. Prose, titles, and pills stay in Geist.

## Layout

The page is one centered column, `min(1120px, calc(100% - 40px))`, so the gutter is 20px on each side. The header is fixed, 64px tall, field-colored, padded 28px on the left and 22px on the right. Scroll padding is 84px so in-page links clear the bar. The header gains its hairline after 8px of scroll.

The hero is centered. Its top padding is 128px (108px below 720px) and its bottom padding is 36px. The claim, the bio, and the pills stack in that column. From the work grid down, type is left-aligned. Work has no visible section title; the panels follow the hero.

Featured work is a six-column grid with a 12px gap. The lead panel spans four columns. The panel beside it, and each featured panel after that, spans two. Under the grid, a three-column text index uses a hairline along the top, 18px of vertical padding, a 16px title at weight 500, and a 13px warm-stone line. Hover underlines the title with a 3px offset. A small ghost pill sits at the end of the block.

A four-column figure band follows, with a hairline on the top and bottom, 28px of vertical padding, and a 24px gap. Later sections use 112px of space before the title (80px below 720px). The footer uses that same 112px as its top margin (80px below 720px), then 48px of padding.

Records and skill rows share a 180px rail and a fluid second column. Records gap 20px by 32px with 26px of vertical padding. Skill rows gap 16px by 32px with 18px of vertical padding. Contact is `1.35fr` / `0.65fr` with a 48px by 64px gap. The footer is `1.4fr` plus three link columns, gapped 32px by 24px.

Below 900px the desktop nav and the header GitHub pill hide, the round menu button shows, and every work panel spans the full row. The footer becomes two columns, with the name spanning both. Below 720px the index, figures, and contact stack to one column, and the record and skill rails stack with a 6px gap.

**The Single Column Rule.** Readable content sits in the 1120px column with 20px gutters. The hero is centered in that column. From the work grid down, the record is left-aligned.

**The Lead Panel Rule.** Featured work is a six-column grid. The lead panel spans four columns and the panel beside it spans two. Later featured panels span two. Below 900px each panel spans the full row.

## Elevation & Depth

Depth is tonal. Field, recess, panel, and chip are successively lighter near-blacks, and hover moves to the next step. Nothing casts a drop shadow. Focus is a 2px ink outline, 3px outside the control. Text selection fills with sunset and sets the text in the field color.

### Shadow Vocabulary

- **Header hairline** (`box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.08)`): Drawn on the header after the page has scrolled. It is a 1px divider. The header and the field are the same color, so the line is an inset shadow rather than a border on a separate surface.

### Named Rules

**The Flat Field Rule.** Surfaces do not lift. Hover changes a background step. The scrolled header’s inset hairline is the only box-shadow, and it is a divider.

## Shapes

Two silhouettes run the interface. Actions, chips, nav links, the skip link, and the menu button are fully round (999px, written as 50% on the 40px menu square). Work panels are 16px. The composer is 12px, the only field radius. The favicon square uses an 8px corner; the layout does not take that radius.

Pills and panels have no stroke. Records, plates, the figure band, the footer, the contact column, and the composer use a 1px hairline. On focus, the composer’s stroke becomes 40% white.

**The Two Silhouette Rule.** Actions, chips, and nav links are fully round. Work panels use a 16px radius. The composer is the 12px field.

## Components

### Buttons

Pills are filled, weight 500, with no stroke. The background changes in 160ms ease. A disabled pill drops to 40% opacity.

- **Shape:** Fully round (999px).
- **Solid:** Ink fill, field text, 44px tall, padding 0 20px, 14px type. Hover fills with warm paper. This is Get in touch, Open email draft, and Email Kannan.
- **Ghost:** Chip fill, ink text, the same 44px size. Hover moves to chip hover. This is Download CV and Go back.
- **Small:** Header actions are 36px tall, 13px type, padding 0 14px. Contact is solid. GitHub is ghost.
- **Menu:** A 40px circle, chip fill, 16px icon, shown below 900px. Hover moves to chip hover. The stylesheet writes the radius as 50%.
- **Focus:** 2px ink outline, 3px offset.
- **Skip:** The solid pill at 14px type with padding 8px 14px, parked above the page until focused.

### Chips

- **Announcement:** Recess fill, 32px tall, 13px type at weight 500, padding 0 10px 0 6px, a 10px gap, fully round. A 14px chevron follows the label at 72% opacity. Hover lightens this one control to `#1c1c1c`.
- **Sunset tag:** Nested in the announcement. 20px tall, padding 0 8px, sunset wash fill, sunset text, 11px type at weight 500.

### Cards / Containers

Work panels are the page’s containers. They have no border and no shadow.

- **Corner Style:** 16px.
- **Background:** Panel, moving to panel hover in 160ms.
- **Shadow Strategy:** None. See Elevation & Depth.
- **Border:** None.
- **Internal Padding:** The stage is 22px 22px 8px. The foot is 8px 22px 18px. Minimum height is 280px.
- **Foot:** Title at 16px, weight 500, tracking `-0.02em`. Context at 13px warm stone. The action is 13px at weight 500: “Open” with ↗ for an external link, “View” with ↓ for an in-page link. The glyph moves 3px on hover and focus, in 180ms with `cubic-bezier(0.16, 1, 0.3, 1)`.

### Type plate

The spec plate sits in the panel stage, 18px under the kicker. Geist Mono at 12.5px. Each row is label and value, pushed apart, with a 16px gap, 8px of vertical padding, and a hairline on top. Labels are warm stone. Values are ink.

### Inputs / Fields

The composer replaces the hero pills while a message is open. It is left-aligned, max 560px.

- **Style:** Recess fill, 1px hairline, 12px radius, padding 14px 16px, min-height 140px. The label above is 13px warm stone at weight 500, with 8px beneath. The placeholder and the note under the actions are warm stone; the note is 13px.
- **Focus:** The textarea clears the global outline and thickens its border to `rgba(255, 255, 255, 0.4)`. The caret is ink.
- **Actions:** A ghost pill and a solid pill, gapped 12px, 14px under the field. The solid pill stays disabled until the field has text.

### Navigation

The bar is fixed and 64px tall, on the field, with an 8px gap between the wordmark, the links, and the action group. The wordmark is “Kannan”. Links are 13px at weight 500, padding 6px 12px, fully round; hover fills them with chip, not chip hover.

Actions sit at the end: a small ghost GitHub pill and a small solid Contact pill. Below 900px those links and the GitHub pill hide, and the menu button opens a field-colored sheet from under the header to the bottom of the viewport. Sheet links are 1.75rem, weight 500, tracking `-0.03em`, line-height 1.15, with a hairline under each row and 14px of vertical padding.

### Record row

A full-width link with a hairline on top. The date rail is 13px warm stone. The title is the title style, with a warm-stone ↗ at 14px on the same line. The organisation is 14px warm stone. The detail is body type. Hover and focus underline the title with a 4px offset.

### Named Rules

**The White Pill Rule.** The main action is a white pill with field-colored text. The secondary action is a chip-colored pill with ink text. Pills have no stroke.

## Do's and Don'ts

### Do:

- **Do** keep the page on the field, with ink text and warm stone meta.
- **Do** set the hero claim in Geist at weight 450, the display size, and `-0.03em` tracking, and set titles, navigation, and pills in Geist at weight 500.
- **Do** use the white 44px pill for the main action and the chip-colored pill for the secondary action. Header actions are the 36px size.
- **Do** draw featured work as 16px panels on the six-column grid, with the lead panel spanning four.
- **Do** divide records, plates, the figure band, and the footer with the 8% white hairline.
- **Do** set key/value plates in Geist Mono at 12.5px.
- **Do** show focus as a 2px ink outline, 3px outside the control. The composer is the exception: it thickens its border to 40% white.
- **Do** use the K favicon at `public/mark.svg`.
- **Do** honor reduced motion with instant scroll, the still claim, and no pill, panel, arrow, or word transition.

### Don't:

- **Don't** lay the work out as equal glyph tiles.
- **Don't** fill buttons, panels, links, or large areas with sunset. Sunset stays on the announcement tag and on text selection.
- **Don't** add drop shadows or glows. The scrolled header’s inset hairline is the only box-shadow.
- **Don't** switch the page to a light background. Light color belongs to the solid pill and its warm-paper hover.
- **Don't** use the X or xAI marks, or the unused gradient file at `public/sakannan-mark.svg`.
- **Don't** set prose, titles, or pills in Geist Mono.
- **Don't** put a stroke on pills or work panels.
