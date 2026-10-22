Little Fern — Project Documentation

This documentation covers the design system, architecture, component structure, data models, and features built for the Little Fern neighborhood cafe web application.

---

1. Executive Summary & Brand Identity

* Brand: Little Fern — an artisanal, welcoming neighborhood cafe located in Fernwood.
 Tagline: "A warm corner for slow mornings. Brewed, baked and plated a few steps from your door."*
* Design Direction: Honeyed Paper & Terracotta Zigzag. Replaces sterile corporate aesthetics with warm cream backgrounds (`#faf5ea`), rich espresso inks (`#211915`), terracotta accents (`#b84d28`), and tactile textures (dotted leaders, rounded cards, tilted photography).
* Typography Pairing:
   Headings / Display: Lora* (warm editorial serif with italic styling).
   Body / UI: Nunito Sans* (clean, friendly, high-legibility sans-serif).

---

2. Technical Stack & Core Architecture

* Framework: TanStack Start v1 (full-stack React 19 framework running on Vite 8 with SSR/SSG capabilities).
* Router: `@tanstack/react-router` file-based routing.
* Styling: Tailwind CSS v4 engine configured via native `@import "tailwindcss"` and semantic OKLCH CSS variables in `src/styles.css`.
* Component Primitives: Radix UI primitives bundled with custom CVA variants in `@/components/ui/button`.
* Data Handling: Client/SSR safe static TypeScript models in `src/lib/cafe-menu.ts` (instant client-side filtering with zero backend overhead).
* Testing & Tooling: Vitest with `@testing-library/react` and ESLint 9.

---

3. Page Structure & Section Breakdown

The entire cafe experience is served at the index route (`src/routes/index.tsx`) with smooth hash anchor navigation and responsive zigzag content bands:

```text
+-----------------------------------------------------------+
| Sticky Header: Logo, Nav Anchors (Menu, Hours, Find us)   |
+-----------------------------------------------------------+
| Hero Section (#home):                                     |
|  - Copy: "Neighborhood cafe", Lora 7xl title, subtitle    |
|  - Hero Image: Window light with absolute "Kettle's on"   |
+-----------------------------------------------------------+
| Band Sand: (a) The Menu (#menu)                           |
|  - Flat white hero image & intro                          |
|  - Category filter pills: All, Coffee, Breakfast, etc.    |
|  - 2-column menu item cards with dotted price leaders     |
+-----------------------------------------------------------+
| Honeyed Cream: (b) Today's Specials (#specials)           |
|  - Editorial copy: "Two favourites, on the pass"          |
|  - Featured dishes with service tags & notes              |
|  - Tilted sourdough hero photo card                       |
+-----------------------------------------------------------+
| Band Ink: Footer Container                                |
|  - (c) Opening hours: Daily schedules in structured <dl>  |
|  - (d) Find us: Address, physical landmarks & directions  |
|  - Bottom sub-footer: Brand link & sign-off               |
+-----------------------------------------------------------+
```

Detailed Section Specifications:

1. Header (`<header className="sticky top-0 ...">`):
   * Solid cream background to ensure content never bleeds through during scroll.
   * Brand mark linking back to `#home`.
   * Navigation anchors for desktop screens (`#menu`, `#hours`, `#find-us`).
   * Primary CTA button with `variant="cafe"` directing users straight to the menu.

2. Hero Section (`#home`):
   * Editorial asymmetry: large serif headline (`font-display text-6xl sm:text-7xl`) paired with italicized lead copy.
   * Responsive photo card with priority loading (`cafe-window.jpg`) accented by an absolute terracotta badge (`"Kettle’s on"`).

3. Menu & Interactive Filtering (`#menu`):
   * Horizontal scrollable pill group on mobile screens with hidden scrollbars (`.no-scrollbar`).
   * Reactive category state: switches between `All`, `Coffee`, `Breakfast`, `Lunch`, and `Pastries`.
   * Dotted menu leaders (`.menu-leader`) bridging dish names and prices across all card widths.

4. Today's Specials (`#specials`):
   * Positioned between the menu and the footer.
    Highlights two signature items: Mushroom Sourdough ($12.00) and Iced Cardamom Latte* ($5.00).
    Includes service availability tags (e.g., "Till 11:00 am · while the pan holds"*).
   * Framed against a tilted food photograph (`.photo-tilt`).

5. Consolidated Dark Ink Footer (`<footer>`):
   * Uses `.band-ink` (`#211915`) for high contrast and visual grounding.
   * Opening Hours (`#hours`): Tabular list with weekday and weekend opening hours using high-contrast ink-safe tokens.
   * Find Us (`#find-us`): Complete postal address (`14 Fernwood Lane, Fernwood, Fern, FF 12345`) plus transit directions and landmark notes.
   * Bottom bar with sign-off copyright and brand signature.

---

4. Design Tokens & CSS Custom Utilities (`src/styles.css`)

All color values follow standard OKLCH formats, ensuring WCAG AA/AAA compliance across light and dark contrast modes:

| Token / Utility | Target Surface / Purpose | Description / Tone |
| :--- | :--- | :--- |
| `--background` | Main page background | Honeyed paper / warm cream |
| `--foreground` | Main body typography | Deep espresso ink |
| `--primary` | Buttons, badges, eyebrows | Warm baked terracotta |
| `--surface-ink` | Footer & dark badges | Rich espresso charcoal |
| `--primary-on-ink`| Section eyebrows in footer | High-contrast peach / terracotta |
| `.band-sand` | Alternating section band | Warm sand beige surface |
| `.menu-leader` | Price connectors | Dotted line with `currentColor/35` |
| `.photo-tilt` | Featured dishes photo | Subtle `rotate-1` rotation |

---

5. File Map

```text
├── src/
│   ├── assets/
│   │   ├── cafe-window.jpg           # Hero cafe window atmosphere
│   │   ├── menu-flat-white.jpg       # Menu section ceramic flat white
│   │   └── specials-sourdough.jpg    # Specials sourdough plate
│   ├── components/ui/
│   │   └── button.tsx                # Extended with 'cafe', 'navigation', 'filter'
│   ├── lib/
│   │   └── cafe-menu.ts              # Data source: menuItems, categories, specials
│   ├── routes/
│   │   ├── __root.tsx                # HTML shell, fonts (<link>), Toaster
│   │   └── index.tsx                 # Full homepage route implementation
│   ├── styles.css                    # Tailwind v4 engine, tokens, and band classes
│   └── router.tsx                    # TanStack router configuration
```

---

If you would like to persist this documentation directly into your project repository as a markdown file (such as `README.md` or `docs/ARCHITECTURE.md`), let me know and we can switch to Build mode to commit it.