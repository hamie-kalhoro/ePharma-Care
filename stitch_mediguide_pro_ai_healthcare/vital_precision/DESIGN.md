---
name: Vital Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#a43073'
  on-secondary: '#ffffff'
  secondary-container: '#fc79bd'
  on-secondary-container: '#76014e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001a42'
  on-tertiary-container: '#3980f4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffd8e7'
  secondary-fixed-dim: '#ffafd3'
  on-secondary-fixed: '#3d0026'
  on-secondary-fixed-variant: '#85145a'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
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
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is engineered for the modern health-technology sector, balancing clinical rigor with human-centric vitality. It targets health-conscious professionals and patients who require high-density data visualization that remains legible and reassuring. 

The aesthetic is **Corporate / Modern** with a lean toward **Minimalism**. It prioritizes extreme clarity, generous whitespace, and a sophisticated layering system to reduce cognitive load. By combining a professional structural foundation with strategic bursts of energetic color, the design system evokes a sense of trustworthy innovation and proactive wellness.

## Colors

The palette is anchored by a deep **Slate Primary (#0f172a)**, providing an authoritative and stable foundation for text and structural elements. 

The **Fresh Orchid (#f472b6)** serves as the "Vital Accent." It is used with surgical precision to highlight health trends, positive status indicators, and secondary calls to action that require a sense of urgency without the alarmist nature of red. 

**Azure Blue (#3b82f6)** is utilized for primary interactive elements and navigation, maintaining a professional link to the healthcare industry. Backgrounds should remain neutral or off-white to ensure the accent colors pop with maximum clarity.

## Typography

This design system utilizes **Hanken Grotesk** exclusively. Its sharp, contemporary geometry provides the precision required for medical and financial data while maintaining an approachable, modern character.

- **Headlines:** Use Bold and Semi-Bold weights with slight negative letter-spacing to create a strong visual hierarchy.
- **Body:** Regular weight is used for maximum legibility in long-form content. 
- **Labels:** Use Medium or Semi-Bold weights with increased letter-spacing and uppercase styling for auxiliary data points and category tags.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop (1280px max-width) and a **Fluid Grid** on mobile. 

- **Desktop:** 12-column grid with 24px gutters. Content is centered with 48px outer margins.
- **Mobile:** 4-column fluid grid with 16px gutters and 16px margins.

Spacing is based on an 8px modular scale. Component internal padding should prioritize "breathability"—use 16px or 24px increments to separate data sets. Sections of the UI are delineated by 80px vertical gaps to maintain a clean, uncluttered rhythm.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Low-contrast outlines**. 

Avoid heavy, dark shadows. Instead, use thin, 1px borders in a soft neutral (#e2e8f0) to define containers. When depth is required (such as for modals or floating menus), utilize a very soft, diffused ambient shadow with a hint of the Primary color to ground the element: `0 10px 25px -5px rgba(15, 23, 42, 0.08)`.

Surface levels:
1. **Level 0 (Background):** Pure white or ultra-light grey (#f8fafc).
2. **Level 1 (Cards):** White background with a 1px border.
3. **Level 2 (Overlays):** White background with a soft ambient shadow.

## Shapes

The shape language is **Rounded**, striking a balance between the clinical coldness of sharp corners and the overly casual nature of pill shapes. 

- **Standard Elements:** 0.5rem (8px) radius for buttons, input fields, and small cards.
- **Large Containers:** 1rem (16px) radius for main content cards and modal dialogues.
- **Icons/Avatars:** Circular (full rounded) or 0.75rem (12px) depending on the context.

This consistent radius creates a friendly yet structured environment that feels "engineered" for comfort.

## Components

### Buttons
- **Primary:** Azure Blue background, white text, 8px radius.
- **Secondary (Vital):** Fresh Orchid background (10% opacity) with Fresh Orchid text and a 1px solid border. Used for "Health Insights" or "Quick Log."
- **Ghost:** No background, Slate Primary text, used for low-priority actions.

### Input Fields
- 1px neutral border that transitions to Azure Blue on focus. 
- Labels use the `label-md` typography style, positioned 8px above the field.

### Chips & Status Indicators
- Use Fresh Orchid for "New," "Healthy," or "Improved" status indicators.
- Use Slate for "Archived" or "Stable" categories.
- Chips should have a 1px border and a subtle 5% background tint of the stroke color.

### Cards
- White background, 1px border, 16px rounded corners.
- Padding should be a consistent 24px on all sides.

### Lists
- Separated by thin, low-contrast horizontal rules (#f1f5f9). 
- Hover states should trigger a subtle light-grey background shift.