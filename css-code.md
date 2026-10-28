The stylesheet in `src/styles.css` is structured into five distinct layers that give Little Fern its warm, editorial cafe aesthetic:

---

1. Tailwind v4 Engine & Theme Setup (`lines 1–67`)
* Tailwind v4 integration: Uses `@import "tailwindcss"` and `@source "../src"` to scan React components without needing a legacy `tailwind.config.js`.
* `@theme inline`: Bridges standard CSS custom properties directly to Tailwind utility classes. For example, registering `--color-primary: var(--primary)` is what allows classes like `bg-primary`, `text-primary`, and `border-primary` to work across your markup.
* Font definitions:
  * `--font-sans`: Nunito Sans for readable body copy, descriptions, and labels.
  * `--font-display`: Lora for warm, editorial serif headings and prices.

---

2. The Color System in OKLCH (`lines 69–144`)
The palette uses the modern OKLCH color format (Lightness, Chroma, Hue), which guarantees consistent perceived brightness and contrast:
* `--background` (`oklch(0.965 ...)`): Warm honeyed cream paper tone rather than clinical white.
* `--foreground` (`oklch(0.29 ...)`): Deep espresso brown rather than harsh pure black.
* `--primary` (`oklch(0.45 ...)`): Earthy terracotta / clay red used for callout buttons, specials, and active states.
* `--secondary` & `--muted`: Soft warm sand for filter pills and secondary surfaces.
* `--surface-ink`: Deep roasted espresso used for the dark hours and location banner at the bottom of the page.
* `.dark` block: Contains an inverted dark-mode variation preserving the same hue relationships.

---

3. Base Layer Defaults (`lines 146–157`)
* Applies `--color-border` to all borders by default so outlines match the subtle coffee-toned borders (`oklch(... / 0.12)`).
* Sets smooth scrolling and the default font family and colors on the `<body>`.

---

4. Custom Cafe Components & Effects (`lines 159–189`)
Instead of cluttered inline classes, specific bespoke cafe elements have dedicated rules:
* Editorial bands:
  * `.band-sand`: Uses `color-mix()` to blend secondary sand into cream for alternating section backgrounds.
  * `.band-ink`: Deep espresso section with large curved top corners (`border-radius: 40px 40px 0 0`) for the footer band.
* Organic photo treatments:
  * `.photo-card`: Asymmetric leaf-like rounded corners (`40px 12px 40px 12px`) with soft warm drop shadows.
  * `.photo-tilt`: A subtle `-2deg` rotation framed like a cafe postcard that straightens smoothly when hovered.
* Menu details:
  * `.menu-leader`: The dotted line connecting menu item names to their prices.
  * `.special-row`: Features a terracotta vertical bar on the left that expands in width from `3px` to `6px` on hover.
* Keyframe animations:
  * `cafe-rise`: Gentle upward fade-in for section headers and menu items.
  * `cafe-line`: Smooth clip-path reveal for decorative rule lines.

---

5. Accessibility & Responsiveness (`lines 190–194`)
* `prefers-reduced-motion`: Automatically turns off all transforms, transitions, and keyframe animations for visitors who have motion sensitivity enabled in their system preferences.
* Mobile overrides: Softens border radii and adjusts masks on small screens so touch scrolling feels natural.

---

Would you like to tweak any of these styles—such as adjusting the terracotta accent color, trying different corner radii, or modifying the hover animations?