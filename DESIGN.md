---
name: Barathkumar V Portfolio
description: An engineering-textbook figure plate: cool paper, blue-black ink, one fluorescent highlighter.
colors:
  paper: "#f1f2ee"
  surface: "#e5e7e1"
  surface-2: "#d9dcd4"
  ink: "#121316"
  ink-soft: "#2a2c31"
  muted: "#4f535a"
  paper-dim: "#b9bcb4"
  mark: "#e9fb3c"
  mark-2: "#dcef2c"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(76px, 11vw, 190px)"
    fontWeight: 760
    lineHeight: 0.88
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 118"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(34px, 4.4vw, 64px)"
    fontWeight: 680
    lineHeight: 0.98
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 108"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(19px, 1.5vw, 24px)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
    fontFeature: "'tnum' 1"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 2.2vw, 32px)"
  band: "clamp(28px, 3.4vw, 52px)"
  section-top: "clamp(72px, 9vw, 140px)"
  section-gap: "clamp(120px, 16vw, 240px)"
components:
  button-mark:
    backgroundColor: "{colors.mark}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
  button-mark-hover:
    backgroundColor: "{colors.mark-2}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-ink-hover:
    backgroundColor: "{colors.ink-soft}"
  button-text:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 8px"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 16px"
  figure-plate:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.none}"
    padding: "24px"
  nav-bar:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "64px"
---

# Design System: Barathkumar V Portfolio

## Overview

**Creative North Star: "The Figure Plate"**

The site is set like a page from an engineering textbook that a student has worked through with one highlighter. Cool, faintly grained paper carries blue-black ink; every project appears as a drawn figure of its real pipeline with a "Figure." caption; and the fluorescent yellow-green highlighter is the only colour that is not ink or paper. The highlighter does two jobs and nothing else: it marks what matters (the model step in a figure, the three layer words in the statement, the primary call to action) and it shows state (hover, focus, the active section, the pressed filter).

Density is editorial rather than dashboard: huge expanded type sets the monument moments (the name marquee, the internship initials, the footer wordmark), long single-column lists carry the work, and generous section gaps let each part read as its own plate. Everything is flat and square. Depth only exists where something genuinely floats above the page (the project dialog).

The page closes on its two deliberate colour fields: Contact set entirely on the highlighter, its rows divided by ink rules, answered by the ink footer. Everywhere else the highlighter is a mark or a state, never a background. The world explicitly refuses the dark neon developer portfolio: no gradient cards, no glow, no stock imagery.

**Key Characteristics:**
- Three materials only: paper, ink, highlighter, plus two paper tints and one ink tint for banding.
- One variable family, Archivo, used for everything; width and weight carry the hierarchy.
- Square corners everywhere; borders only on drawn figures and form fields (1.5px ink).
- State is a highlighter swipe that sweeps in left to right on each line, never a glow or colour shift of the text.
- Project pipelines drawn as figure plates: 1.5px ink strokes, the model step filled with highlighter, strokes drawing in on view.
- Motion is quiet and fast: strong ease-out curves, 0.97 press scale, short rising reveals, all honouring reduced motion.

## Colors

A total-commitment, three-material palette: cool grey-green paper, blue-black ink, and a single acid highlighter.

### Primary
- **Highlighter Yellow** (`mark`): the one accent. Fills the model step of every pipeline figure, the swept-in state behind active or hovered text, the primary call to action ("Download résumé", "Email Barath"), the text selection, and the entire Contact field. Ink text always sits on it.
- **Pressed Highlighter** (`mark-2`): one tone deeper. The hover state of highlighter buttons. Never used on its own away from `mark`.

### Neutral
- **Cool Paper** (`paper`): the page ground, the nav bar, dialog and menu surfaces, form-field fills, and text on ink.
- **Plate Grey** (`surface`): the figure-plate ground behind every pipeline drawing, the open state of an Experience row, project stack tags, and the first and third Skills band.
- **Deep Plate** (`surface-2`): the middle Skills band and the dialog's prev/next bar; the one step of tonal banding.
- **Blue-Black Ink** (`ink`): all text, all figure strokes and arrowheads, focus outlines, secondary solid buttons, the Contact row rules, and the footer field.
- **Soft Ink** (`ink-soft`): hover state of ink buttons.
- **Graphite** (`muted`): secondary text: descriptions, provenance tickets, figure captions and tool labels inside figures, placeholders.
- **Dim Paper** (`paper-dim`): secondary text on ink (footer meta).

### Named Rules
**The One Highlighter Rule.** The highlighter is the only hue on the page. It is a mark or a state, never decoration; the single exception is the Contact field, which is a deliberate colour field closing the page.

**The Ink-On-Mark Rule.** Anything on the highlighter is set in ink. Paper or graphite text never sits on `mark` or `mark-2`.

**The Flat Fill Rule.** Colours are flat fills. The only `linear-gradient` in the system is the single-colour layer behind the highlighter swipe, which exists so its width can animate line by line.

## Typography

**Display Font:** Archivo variable (width 62–125, weight 100–900, loaded from Google Fonts), with ui-sans-serif, system-ui fallback
**Body Font:** Archivo, normal width
**Label/Mono Font:** none; Archivo with tabular figures for years, dates, counts and phone numbers

**Character:** One family stretched across its width and weight axes. Expanded and heavy for the monument, slightly expanded and bold for headings, normal width for reading, so the hierarchy reads as one voice changing posture rather than two voices.

### Hierarchy
- **Display** (760, clamp 76–190px, line-height 0.88, width 118%, tracking -0.04em): the hero name marquee (set at its own clamp(92px, 13vw, 214px), line-height 0.8). Uppercase variants at normal width (100%) carry the internship initials in Experience and the cropped "BARATHKUMAR" wordmark at the foot of the page.
- **Headline** (680, clamp 34–64px, line-height 0.98, width 108%, tracking -0.03em, balanced wrap): every section title, featured project titles, Skills layer names, dialog titles, and the scroll-assembled statement (at clamp(34px, 5.4vw, 92px), line-height 1.02).
- **Title** (600, clamp 19–24px, line-height 1.3, tracking -0.01em): the lead step. The hero sentence (500), "Also built" project titles, skill names in each layer, Experience role lines and descriptions.
- **Body** (400, 17px, line-height 1.55): running text, held to roughly 38–70ch with explicit max widths.
- **Label** (600 or 500, 14px, tabular figures): provenance tickets (discipline and year), figure captions beginning "Figure.", Contact row labels, definition-list terms, small buttons.

### Named Rules
**The Five Steps Rule.** Type sizes come from five steps: small 14px, body 17px, lead clamp(19–24px), heading clamp(34–64px), display clamp(76–190px). Monument sizes (hero name, Experience initials, footer wordmark, statement) are the only sanctioned departures, and each is a scaled display or heading voice.

**The Width Is Weight Rule.** Hierarchy is carried by `font-stretch` and weight together: 118%/760 for display, 108%/680 for headings, 112%/700 for the wordmark, 100% for text. Do not introduce a second family to get contrast.

## Layout

A full-bleed page with a fluid side gutter (clamp 16–32px) and no centred max-width container; content blocks cap themselves with character-based max widths instead. Large sections use a 12-column grid from `lg` up (titles and intros split 7/5, Work list 7 beside a sticky 5-column figure plate, Contact 4 and 7), collapsing to a single column below. A custom `xs` breakpoint (475px) sits under Tailwind's defaults; `md` (768px) swaps the nav to a full-screen menu and `lg` (1024px) introduces the sticky figure preview.

Vertical rhythm is generous and fluid: sections open with clamp(72–140px) above the title and major sections are separated by clamp(120–240px). Banded lists (Skills layers, Experience rows, Contact rows) run edge to edge with the gutter applied inside each band, so tonal steps span the full width.

The first viewport is a stage: a 1:1.3 portrait crop centred under a 64px fixed bar, the name marquee crossing the jacket, one lead sentence and a fact line beneath, and a bottom row with location left and the two calls to action right. Below `lg` each featured project carries its own figure plate inline, since there is no sticky preview.

## Elevation & Depth

The system is flat. Depth is conveyed by tonal plates (paper, surface, surface-2) and by full ink fields, never by shadows on in-page elements. Shadows exist only on layers that genuinely float over the page, and those layers also sit over an ink scrim (ink at 60%) when modal. A static paper-grain noise layer (multiply, 32% opacity) sits over the whole page as material texture, not depth.

### Shadow Vocabulary
- **Panel lift** (`box-shadow: 0 24px 60px -12px rgba(18,19,22,0.45)`): the project dialog.

### Named Rules
**The Floating-Only Rule.** A shadow means "this layer is above the page". Cards, plates, buttons and bands never carry one.

## Shapes

Square corners everywhere (0px): buttons, inputs, plates, tags, dialogs, the highlighter swipe. Borders are rare and drawn in ink at 1.5px: the strokes and arrows of pipeline figures and the outline of form fields (thickening to 3px when invalid). List markers are short ink bars (2–3px tall), the marquee separator is a small ink square, and the figure loop-back edge is a dashed 1.5px line (5 on, 4 off). The intro's highlighter stroke under the name and every swipe are plain rectangles.

## Components

### Buttons
Solid, square, and labelled in words; an icon only ever accompanies text.
- **Shape:** square corners (0px).
- **Highlighter (primary):** `mark` fill, ink text, semibold, 16px by 24px padding; used for the single most important action in a region (download résumé, email). Hover deepens to `mark-2`.
- **Ink (secondary):** `ink` fill, paper text, semibold, about 12px by 20px; nav Résumé, Read the case study, Copy, Open in my email app. Hover lifts to `ink-soft`.
- **Text:** underlined semibold text with an arrow ("See the work").
- **Press:** every pressable scales to 0.97 on press (160ms, ease-out); colour transitions take 200ms.
- **Focus:** a 2px ink outline offset 3px; on ink fields the outline turns highlighter.

### Highlighter Swipe (signature state)
The state language of the whole site. A flat highlighter fill sweeps in left to right behind the text, line by line on wrapped text (280ms, ease-out). It is driven by hover (fine pointers only), `:focus-visible`, or `data-active="true"`, on the text itself or on a host ancestor such as a whole list row. Used for nav links and the current section, the project filter, featured and supporting project rows, Experience initials, and mobile menu links. In the scroll statement it is driven by scroll progress over the words "model", "software" and "interface".

### Cards / Containers (figure plates)
- **Corner Style:** square (0px).
- **Background:** `surface`, holding a 4:5 pipeline figure.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** none; the drawing carries the line.
- **Internal Padding:** 24px (16px inline on small screens), with a "Figure." caption in the label step beneath.

### Pipeline Figure (signature component)
Each project's real pipeline drawn as a textbook figure on a 400 by 500 viewBox: one 292 by 60 box per step, top to bottom, connected by ink arrows; a dashed loop-back edge with a rotated label where the pipeline iterates. Strokes are 1.5px ink; boxes fill with paper except the model step, which fills with the highlighter. Step names are 17px semibold ink, tool names 13px graphite. On view (or on mount inside the dialog) each box strokes in, then its arrow, staggered 0.14s top to bottom; reduced motion shows it drawn.

### Inputs / Fields
- **Style:** paper fill, 1.5px ink border, square, 14px by 16px padding, 17px text, graphite placeholder.
- **Focus:** the global 2px ink outline (offset 2px on bordered fields).
- **Error / Disabled:** invalid fields thicken to a 3px ink border with a semibold message beneath.

### Navigation
A fixed 64px paper bar: the wordmark left (17px bold, width 112%), five section links and an ink Résumé button right. Links are 15px medium with the highlighter swipe for hover and the current section. Below `md` a "Menu" word button opens a full-screen paper sheet that drops from the top (drawer curve), listing the sections in heading type at 13vw with staggered entry and a full-width highlighter résumé button.

### Name Marquee (signature component)
The hero name in display type travels left as a 60-second linear loop through the portrait; a paper-coloured copy clipped to the portrait's width turns the letters paper where they cross it. Hover pauses it; reduced motion parks the name centred.

### Scroll-Assembled Statement (signature component)
A pinned full-viewport statement whose words start scattered (offset, rotated, blurred, 30% opacity) and settle into place left to right as the visitor scrolls, after which the three layer words receive the highlighter. Reduced motion renders the finished, marked sentence.

### Closing Fields
Contact is set on the highlighter field with rows divided by 1px ink rules on the margins, each row a small label, a large semibold value (up to 64px, width 104%) and a word action. The ink footer answers it with a heading, a highlighter "Email Barath" button, paper links, and the cropped uppercase wordmark bleeding off the bottom edge.

## Do's and Don'ts

### Do:
- **Do** take every colour from the nine tokens; ink text on highlighter, paper text on ink.
- **Do** show hover, focus and active state with the highlighter swipe (280ms, ease-out, per line), and make it reachable by keyboard focus and `data-active`, not hover alone.
- **Do** draw any diagram of a process as a figure plate: 1.5px ink strokes, square boxes, the core step in highlighter, a "Figure." caption beneath.
- **Do** use Archivo's width axis for hierarchy: 118%/760 display, 108%/680 headings, normal width for text.
- **Do** keep corners square (0px) on every element.
- **Do** use the motion curves: ease-out cubic-bezier(0.23, 1, 0.32, 1) for entrances and state, ease-in-out cubic-bezier(0.77, 0, 0.175, 1) for curtains and clip reveals, drawer cubic-bezier(0.32, 0.72, 0, 1) for sheets; reveals rise 20px over 0.6s once; presses scale to 0.97.
- **Do** honour `prefers-reduced-motion`: finished states, no marquee travel, no press scale.
- **Do** label every control in words; icons only accompany text.

### Don't:
- **Don't** add a second accent hue, a gradient, or a glow; the highlighter is the only colour.
- **Don't** put a shadow on anything that is not floating above the page (the project dialog).
- **Don't** round corners.
- **Don't** fill large areas with the highlighter outside the Contact field; elsewhere it is a mark or a state.
- **Don't** introduce a second typeface or a monospace for labels; use Archivo with tabular figures.
- **Don't** show state on navigation, filters or list rows by recolouring the text or outlining it; those take the swipe. Plain inline links in text and on the colour fields underline on hover instead.
