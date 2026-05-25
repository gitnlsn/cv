---
name: Kinetic Developer Folio
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#bcc7de'
  on-tertiary: '#263143'
  tertiary-container: '#636e83'
  on-tertiary-container: '#ecf1ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  card-padding: 32px
---

## Brand & Style
The design system is engineered for a **Modern Tech Professional** aesthetic, positioning Nelson Kenzo Tamashiro as a high-tier Full Stack & AI Engineer. The brand personality is precise, innovative, and authoritative, yet accessible through thoughtful UX.

The visual direction combines **Minimalism** with **Glassmorphism**. It utilizes expansive whitespace to allow complex technical content to breathe, while employing subtle translucent layers to suggest depth and sophistication. The interface should feel like a high-end IDE or a premium SaaS dashboard—functional, fast, and meticulously polished. High contrast between deep backgrounds and crisp typography ensures an elite, "dark-mode first" executive feel.

## Colors
The palette is rooted in a "Deep Space" hierarchy. The primary background uses a near-black ink (`#020617`) to maximize contrast for white text.

- **Primary (Electric Indigo):** Used sparingly for primary CTAs, active states, and critical highlights.
- **Secondary/Tertiary (Slate Tones):** Define the card surfaces and container borders, creating a layered UI through subtle value shifts.
- **Accent (Cyan):** Reserved for technical metadata, "live" indicators, or mono-font accents to provide a tech-forward "terminal" glow.
- **Neutral:** A range of cool greys (Slate 50 to 400) used for body text and secondary labels to maintain legibility without the harshness of pure white.

## Typography
This design system uses a dual-font strategy to balance editorial elegance with technical precision.

- **Headlines & Body:** **Geist** provides a highly engineered, minimalist sans-serif feel that scales beautifully from massive display text to dense bio paragraphs. Use "SemiBold" or "Bold" for section headers to create a strong vertical rhythm.
- **Technical Details:** **JetBrains Mono** is used for all "metadata"—skill tags, dates, technology stacks, and code snippets. This reinforces the developer persona and provides a clear visual distinction between "narrative" and "data."

Scale the `display-xl` and `headline-lg` down significantly for mobile devices to prevent awkward word breaks while maintaining the bold weight.

## Layout & Spacing
The layout follows a **Fixed Grid** approach for desktop (12-columns) and a fluid single-column approach for mobile. 

- **Sectioning:** Use generous vertical spacing (`120px+`) between major sections (About, Projects, Experience) to emphasize the minimalist philosophy.
- **The Grid:** On desktop, use a 12-column grid with a 24px gutter. Project cards should span 6 columns (2-up) or 12 columns (1-up featured).
- **Alignment:** All text should be left-aligned to maintain a clean "axis" that guides the eye down the page.
- **Mobile Reflow:** Project cards stack vertically. Navigation transitions from a top-bar to a simplified hamburger menu or a floating bottom-dock.

## Elevation & Depth
Depth is created using **Tonal Layers** and **Backdrop Blurs** rather than traditional heavy shadows.

- **Level 0 (Background):** Pure `#020617`.
- **Level 1 (Cards/Containers):** `#0F172A` with a 1px border of `#1E293B`.
- **Level 2 (Hover/Active):** Subtle `0px 20px 40px rgba(0, 0, 0, 0.4)` shadow combined with a slightly brightened border (`#334155`).
- **Glassmorphism:** Navigation bars and modal overlays should use a 12px blur with a 60% opaque background to maintain context of the content beneath.

## Shapes
The design system utilizes **Rounded** (0.5rem) geometry to soften the technical edge and make the interface feel modern and premium.

- **Standard Elements:** Buttons, input fields, and small chips use `0.5rem` (8px).
- **Large Elements:** Project cards and container sections use `1rem` (16px) or `1.5rem` (24px) to create a distinct "containerized" look.
- **Interactive States:** On hover, cards can slightly scale (1.02x) to provide tactile feedback.

## Components

- **Primary Button:** Solid Indigo background with white text. High-contrast, no shadow, 8px radius.
- **Secondary/Ghost Button:** Transparent background with a 1px Slate border. Text in White or Slate-200.
- **Project Cards:** Feature a high-contrast heading, a JetBrains Mono "stack" list at the bottom, and a subtle glassmorphic overlay for image/preview areas. 
- **Skill Chips:** Small, mono-spaced tags. Use a subtle fill (Indigo at 10% opacity) with a 1px solid Indigo border for "Primary" skills, and Slate-800 for "Secondary" skills.
- **Experience List:** Use a vertical timeline thread (1px wide, Slate-800) connecting the company logos/names. Ensure the "Full Stack Developer" role titles are the highest in the text hierarchy.
- **Status Indicator:** A pulsing "Open to opportunities" badge should use a Green-500 glow effect to stand out against the dark UI.
- **Contact Cards:** Use a 4-grid layout for Email, LinkedIn, GitHub, and Google Play. Each card should have a clear icon in the Accent color.