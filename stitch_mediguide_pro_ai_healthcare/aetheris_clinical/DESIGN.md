---
name: Aetheris Clinical
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3d4947'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6d7a77'
  outline-variant: '#bcc9c6'
  surface-tint: '#006a61'
  primary: '#00685f'
  on-primary: '#ffffff'
  primary-container: '#008378'
  on-primary-container: '#f4fffc'
  inverse-primary: '#6bd8cb'
  secondary: '#086e1e'
  on-secondary: '#ffffff'
  secondary-container: '#98f593'
  on-secondary-container: '#117222'
  tertiary: '#006194'
  on-tertiary: '#ffffff'
  tertiary-container: '#007bb9'
  on-tertiary-container: '#fdfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#89f5e7'
  primary-fixed-dim: '#6bd8cb'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#9bf896'
  secondary-fixed-dim: '#80db7c'
  on-secondary-fixed: '#002204'
  on-secondary-fixed-variant: '#005312'
  tertiary-fixed: '#cce5ff'
  tertiary-fixed-dim: '#93ccff'
  on-tertiary-fixed: '#001d31'
  on-tertiary-fixed-variant: '#004b73'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  clinical-teal: '#0D9488'
  vital-green: '#429B45'
  logic-blue: '#0284C7'
  serum-pink: '#F5ADCB'
  glass-surface: rgba(255, 255, 255, 0.7)
  glass-border: rgba(255, 255, 255, 0.4)
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is engineered for a "Clean Room" aesthetic, blending the precision of high-end medical environments with the fluid, transparent interfaces of futuristic technology. It prioritizes clarity, clinical trust, and high-performance interaction.

The visual direction combines **Minimalism** with sophisticated **Glassmorphism**. By utilizing generous whitespace, translucent layers, and microscopic attention to detail, the system evokes a sense of sterility and advanced intelligence. The goal is to move healthcare away from cold, industrial interfaces toward an environment that feels breathable, intuitive, and reassuringly sophisticated.

## Colors

The palette is anchored in "Clinical Teal" and the "Vital Green" derived from the reference, evolved into a more luminous, digital-first spectrum. 

- **Primary (Clinical Teal):** Used for primary actions and state indicators. It represents precision and modern medicine.
- **Secondary (Vital Green):** Used for health indicators, success states, and trust-building elements.
- **Tertiary (Logic Blue):** Utilized for information architecture and secondary interactive elements to provide a calming, systematic feel.
- **Surface Strategy:** Backgrounds utilize a near-white neutral (`#F8FAFC`) to maintain the "clean room" feel. Interactive surfaces employ glassmorphism—semi-transparent white fills with backdrop blurs to create depth without visual clutter.

## Typography

Typography is focused on hyper-legibility and a technical, systematic rhythm.

- **Headlines:** Uses **Hanken Grotesk** for its sharp, contemporary geometry. It feels engineered and authoritative.
- **Body:** Uses **Inter** for maximum readability in data-heavy medical contexts. It provides a neutral, professional tone.
- **Labels & Metadata:** Uses **JetBrains Mono** for technical readouts, vitals, and data labels. The monospaced nature emphasizes the "high-performance" data aspect of the design system.

Tight letter-spacing is applied to large headlines for a more "premium" feel, while labels utilize expanded tracking for clarity at small sizes.

## Layout & Spacing

The design system employs a **Fixed Grid** on desktop (12 columns) and a **Fluid Grid** on mobile (4 columns). The spacing logic follows a strict 8px base unit to ensure clinical alignment and mathematical harmony.

- **Rhythm:** Use large internal padding (minimum 32px) for cards and sections to preserve the "clean room" whitespace requirement.
- **Reflow:** On mobile, margins reduce to 16px, and complex data tables should transition to card-based layouts. 
- **Density:** While the overall aesthetic is spacious, data-dense areas (like patient charts) may use a condensed 4px grid for internal components, provided they are housed within a high-whitespace container.

## Elevation & Depth

Depth is not communicated through heavy shadows, but through **Tonal Layers** and **Backdrop Blurs**.

1.  **Level 0 (Base):** Neutral background (`#F8FAFC`).
2.  **Level 1 (Cards/Surfaces):** White background with a 1px soft stroke (`rgba(0,0,0,0.05)`) and a very diffuse, low-opacity shadow (15% opacity, 20px blur).
3.  **Level 2 (Active/Glass):** Glassmorphic overlays using `backdrop-filter: blur(12px)` and a semi-transparent white fill. This is used for navigation bars, modals, and hovering states.
4.  **Accents:** Use soft, medical-themed gradients (e.g., Clinical Teal to Logic Blue) to indicate primary elevation and "active" high-performance states.

## Shapes

The shape language is "Rounded," utilizing a 0.5rem (8px) base radius. This strikes a balance between the friendliness required for healthcare and the structured precision of a high-tech tool.

- **Primary Components:** 8px corner radius.
- **Large Containers:** 16px (1rem) corner radius.
- **Interactive Pill Elements:** Fully rounded (pill-shaped) for chips and status tags to differentiate them from structural layout elements.

## Components

- **Buttons:** Primary buttons use a subtle gradient from `clinical-teal` to `logic-blue` with white text. Secondary buttons are "ghost" style with a 1px border and high-blur backdrop.
- **Chips:** Always pill-shaped. Use `vital-green` for healthy/normal states and `serum-pink` for warnings or critical updates, maintaining the brand's unique medical palette.
- **Inputs:** Minimalist design with a 1px bottom border that expands to a full 2px `clinical-teal` border on focus. Use `jetbrainsMono` for input text to emphasize data precision.
- **Cards:** White or glassmorphic backgrounds. Avoid heavy borders; use subtle shadows and generous internal padding (24px+).
- **Vitals Monitors:** High-contrast sparklines using the `primary` and `secondary` colors, set against a subtle grid background to simulate medical hardware.
- **Checkboxes/Radios:** Use a custom "squishy" animation on interaction to provide the "high-performance" tactile feedback requested.