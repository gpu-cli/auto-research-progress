---
version: alpha
name: Optical Research Console
description: A precise research instrument that remains calm and highly readable for long technical reports.
colors:
  primary: "#071513"
  secondary: "#536764"
  tertiary: "#007D78"
  neutral: "#F3F7F6"
  surface: "#FFFFFF"
  rule: "#C9D6D3"
  signal: "#16C8BD"
  evidenceText: "#C3FFF8"
  positive: "#117A4E"
  warning: "#C88912"
  danger: "#C14343"
  mediaBlack: "#030A09"
typography:
  h1:
    fontFamily: IBM Plex Sans Variable
    fontSize: 6.6rem
    fontWeight: 620
    lineHeight: 0.94
    letterSpacing: "-0.052em"
  h2:
    fontFamily: IBM Plex Sans Variable
    fontSize: 3rem
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  body-md:
    fontFamily: Newsreader Variable
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.8
  interface:
    fontFamily: IBM Plex Sans Variable
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: IBM Plex Sans Variable
    fontSize: 0.94rem
    fontWeight: 400
    lineHeight: 1.65
  interface-sm:
    fontFamily: IBM Plex Sans Variable
    fontSize: 0.8rem
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: IBM Plex Sans Variable
    fontSize: 0.78rem
    fontWeight: 650
    lineHeight: 1.2
  caption:
    fontFamily: IBM Plex Sans Variable
    fontSize: 0.7rem
    fontWeight: 400
    lineHeight: 1.5
  micro:
    fontFamily: IBM Plex Mono
    fontSize: 0.56rem
    fontWeight: 500
    lineHeight: 1.2
  metadata:
    fontFamily: IBM Plex Mono
    fontSize: 0.625rem
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.08em
rounded:
  sm: 0px
  md: 0px
  lg: 0px
  focus: 0.125em
  mark: 0.2em
  inline: 0.35em
  code: 0.5em
  media: 0.6em
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
components:
  filter-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral}"
    rounded: "{rounded.sm}"
    padding: 8px
  evidence-label:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.evidenceText}"
    typography: "{typography.metadata}"
    rounded: "{rounded.sm}"
    padding: 6px
  focus-control:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 8px
  separator:
    backgroundColor: "{colors.rule}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 4px
  signal-label:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.signal}"
    typography: "{typography.micro}"
    rounded: "{rounded.sm}"
    padding: 4px
  status-positive:
    backgroundColor: "{colors.positive}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: 4px
  status-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: 4px
  status-danger:
    backgroundColor: "{colors.danger}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: 4px
  media-stage:
    backgroundColor: "{colors.mediaBlack}"
    textColor: "{colors.evidenceText}"
    rounded: "{rounded.sm}"
    padding: 4px
---

## Overview

Optical Research Console treats the progress archive as a scientific instrument, not a magazine and not a science-fiction dashboard. The primary surface is **Monitor**: readers scan current state, open investigations, and inspect evidence. Dense labels, calibrated rules, coordinate grids, and tabular numerals establish technical credibility; generous reading measures and a dedicated long-form serif preserve comfort.

## Colors

- **Primary** is a deep green-black used for core text and the lead investigation slab.
- **Neutral** is a cool laboratory canvas rather than warm paper.
- **Tertiary** is the accessible interaction accent. Use it for links, focus, indices, and measured status.
- **Signal** is a brighter spectral cyan reserved for dark surfaces and evidence labels.
- Grid lines use a low-opacity mixture of Primary. They organize space but must never compete with text.
- Dark mode keeps the green-tinted optical character rather than becoming neutral charcoal.

## Typography

- **IBM Plex Sans Variable** carries titles and interface copy. It feels engineered without sacrificing legibility.
- **Newsreader Variable** is reserved for long report bodies. Research findings should remain comfortable over thousands of words.
- **IBM Plex Mono** carries metadata, experiment IDs, dates, status, and tabular values. Never use mono for paragraphs.
- Headings are assertive but not monumental. The hierarchy comes from weight, alignment, and information density—not decorative display typography.

## Layout

- Homepage: calibrated masthead, one dark lead investigation paired with primary evidence, then compact ruled archive rows.
- Entry: technical title field with subtle vertical coordinates, full-width evidence, then a 760px reading column.
- Imagery is evidence and should be shown large enough to inspect.
- Use square corners, hairline rules, and explicit alignment. Avoid floating cards and arbitrary elevation.
- Mobile preserves the reading sequence: status, title, evidence, report. Tables scroll horizontally rather than compressing numeric columns.

## Elevation & Depth

No box shadows and no glass layers. Depth is communicated by ink-on-canvas contrast, full-bleed evidence, rules, and surface changes. The site should resemble a calibrated optical workstation rather than a stack of cards.

## Shapes

Application chrome uses square corners. Small proportional radii in the inherited Typeset layer remain available for focus outlines, code, keys, and inline semantics. The only circles are semantic status indicators. The crosshair wordmark and corner registration marks are functional visual signatures for the research system.

## Components

- Filters are outlined metadata controls; active filters invert to Primary.
- Evidence labels sit directly on dark image/video surfaces using Signal text.
- Status colors must accompany text labels and never communicate meaning alone.
- Focus states use Tertiary with sufficient contrast and must remain visible in both themes.

## Do's and Don'ts

**Do** use spectral cyan sparingly, show real experiment outputs, favor tabular numerals, preserve article measure, and let rules establish structure.

**Don't** use neon-on-black for full articles, blue-violet gradients, glassmorphism, pill-shaped UI, fake telemetry, tiny decorative evidence, or mono body copy.
