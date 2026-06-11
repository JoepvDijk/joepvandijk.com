---
name: Island Life System
colors:
  surface: '#fff8f5'
  surface-dim: '#edd6c5'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e8'
  surface-container: '#ffeadb'
  surface-container-high: '#fce4d2'
  surface-container-highest: '#f6decd'
  on-surface: '#25190f'
  on-surface-variant: '#424938'
  inverse-surface: '#3c2e22'
  inverse-on-surface: '#ffeee2'
  outline: '#727a67'
  outline-variant: '#c2c9b3'
  surface-tint: '#3c6a00'
  primary: '#3c6a00'
  on-primary: '#ffffff'
  primary-container: '#78b833'
  on-primary-container: '#254400'
  inverse-primary: '#96d951'
  secondary: '#645e49'
  on-secondary: '#ffffff'
  secondary-container: '#e8dfc5'
  on-secondary-container: '#68634d'
  tertiary: '#0d6683'
  on-tertiary: '#ffffff'
  tertiary-container: '#6ab0d0'
  on-tertiary-container: '#004257'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b1f66a'
  primary-fixed-dim: '#96d951'
  on-primary-fixed: '#0e2000'
  on-primary-fixed-variant: '#2c5000'
  secondary-fixed: '#ebe2c8'
  secondary-fixed-dim: '#cec6ad'
  on-secondary-fixed: '#1f1c0b'
  on-secondary-fixed-variant: '#4c4733'
  tertiary-fixed: '#bee9ff'
  tertiary-fixed-dim: '#8ad0f1'
  on-tertiary-fixed: '#001f2a'
  on-tertiary-fixed-variant: '#004d65'
  background: '#fff8f5'
  on-background: '#25190f'
  surface-variant: '#f6decd'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Quicksand
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.6'
  label-md:
    fontFamily: Quicksand
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Quicksand
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.4'
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
  lg: 40px
  xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is inspired by the serene, joyful atmosphere of a tropical island getaway. It prioritizes emotional comfort, playfulness, and a sense of handmade craftsmanship. The target audience seeks a stress-free, approachable interface that feels like a physical object in their hands.

The style is **Tactile & Organic**. It blends soft, pillowy shapes with natural textures and "squishy" interactive elements. It avoids clinical precision in favor of warmth, using subtle imperfections and gentle curves to evoke a "Cozy-Core" aesthetic. The UI should feel like a digital extension of a physical scrapbook or a high-end toy.

## Colors

The palette is derived from the natural landscape of a blooming island. 
- **Primary (Grass Green):** Used for growth-oriented actions, success states, and key navigational landmarks.
- **Secondary (Sand Beige):** The foundational surface color, providing a warm, low-strain background that feels more natural than pure white.
- **Tertiary (Sky Blue):** Used for secondary accents, information states, and interactive elements that require distinction from the primary green.
- **Neutral (Bark Brown):** Used for primary text and structural borders to maintain high legibility while remaining softer than black.

Text should primarily use the Bark Brown hue to maintain the "woodland" feel. Avoid pure grays; all neutrals should have a slight warm bias.

## Typography

This design system utilizes rounded, humanist typefaces to ensure a friendly and legible reading experience. 

**Headlines** use **Plus Jakarta Sans** with heavy weights. This creates a "chunky," playful look that mimics the bold signage found in casual social environments. 

**Body and Labels** use **Quicksand**. The rounded terminals of Quicksand reinforce the organic shape language of the UI and ensure that even dense information feels approachable and lighthearted. 

Always use "Optical" sizing where possible to maintain the softness of the letterforms at larger scales. Use "Sentence case" for headlines to keep the tone conversational.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid with Generous Padding**. Elements are never cramped; the design system embraces white space (or "beige space") to reduce cognitive load and create a breezy, relaxed atmosphere.

- **Grid:** Use a 12-column grid for desktop and a 4-column grid for mobile.
- **Rhythm:** Spacing is based on an 8px scale, but larger jumps (e.g., from 24px to 40px) are preferred between distinct sections to emphasize the "card-based" modularity.
- **Safe Areas:** Maintain a minimum 24px margin around all screen edges to ensure the UI feels like a handheld device (NookPhone style).

## Elevation & Depth

Visual hierarchy is established through **Ambient Shadows** and **Tonal Layering**. 

1. **Surface Base:** The Sand Beige color serves as the bottom-most layer.
2. **Cards:** Elevated cards use a very soft, diffused shadow (Blur: 20px, Spread: 0, Opacity: 10%, Color: Bark Brown). 
3. **Interactions:** When a button is pressed, it should "sink" into the surface (the shadow disappears or becomes an inner shadow), providing a squishy, tactile response.
4. **Modals:** Use a backdrop blur (glassmorphism) with a warm tint to keep the focus on the foreground without losing the sense of island presence.

Avoid harsh black shadows. All depth should feel light and airy.

## Shapes

The shape language is primarily **Rounded and Bulbous**. 
- **Containers:** Standard cards use a 1rem (16px) radius. 
- **Interactive Elements:** Buttons and tags should utilize a **Pill-shaped (maximum)** radius to make them feel inviting to touch.
- **Accents:** Occasional "irregular" circles or leaf-shaped clips should be used for avatars or icon backgrounds to break the rigidity of a standard grid. 

A subtle 2px "Bark Brown" border can be applied to buttons and primary cards to mimic a "stamped" or "stitched" look, particularly when paired with a secondary background color.

## Components

### Buttons
Buttons are high-contrast, pill-shaped elements. The "Primary" button uses the Grass Green background with white or light cream text. It should have a subtle bottom-heavy shadow to give it a 3D "clicky" appearance.

### Cards
Cards are the primary container. They feature the Sand Beige or a slightly lighter cream background. For extra character, add a "stitching" detail—a dashed border of 1px Bark Brown placed 4px inside the card edge.

### Input Fields
Inputs should feel recessed. Use a slightly darker shade of the background color with a soft inner shadow. Label text should always sit above the field in a bold, Bark Brown Quicksand weight.

### Chips & Tags
These are small, pill-shaped elements using the Sky Blue palette. They are used for categorizing island items or filtering lists.

### Nook-Icons
Icons should be thick-stroked and rounded. Where possible, encase icons in a circular "bubble" background. Use leaf motifs for "Success" or "Loading" states and wood-grain patterns for sidebars or headers.

### Lists
List items should be separated by soft, dashed lines rather than solid ones to maintain the "handmade" craft aesthetic.