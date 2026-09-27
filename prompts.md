You are an expert full-stack developer and award-winning UI/UX designer. Build a high-performance, modern, and tactile e-commerce web application for a hybrid Gen-Z streetwear and upcycled slow-fashion t-shirt brand called "Anonymous".

### 1. Brand Concept & Philosophy
- Concept Fusion: Merges Gen-Z emotional culture and streetwear silhouettes with the ethical, zero-waste craftsmanship of brands like Doodlage (upcycled patchwork), Ethicus (traceable farm-to-garment transparency), and Ecoalf (modern sustainable activism).
- Brand Identity: Temporary placeholder brand name is "Anonymous".
- Motto: "Don't hide the tear. Wear the story. Because fast fashion is an existential crisis."[cite: 4, 5]
- Garment Aesthetics: 280+ GSM heavyweight, relaxed boxy tees featuring raw-edge deadstock patches, visible sashiko/running-stitch details, and embroidered Gen-Z emotional mantras[cite: 1, 3, 5].

### 2. Design System & Tokens
- Aesthetic: Modern Utility meets Warm Artisanal Craft (Clean, spacious, high-contrast, editorial).
- Color Palette:
  - Base: Warm Oat / Raw Linen (`#F5F3EF`), Chalk White (`#FAFAF8`), Obsidian Charcoal (`#141414`).
  - Textile Accents: Deep Indigo Denim (`#1B2A4A`), Botanical Sage (`#4A5844`), Raw Rust Stitch (`#C25737`).
  - Active/Interactive: Muted Electric Lime (`#B4F000`) for high-contrast sustainability badges and micro-alerts.
- Typography:
  - Headings/Hero: High-contrast Editorial Serif (e.g., Playfair Display or Instrument Serif) paired with bold grotesque uppercase (Geist Sans or Space Grotesk).
  - UI & Functional Meta: Clean Monospace (JetBrains Mono) for GSM weights, lot numbers, and garment passport stats.
- Visual Motifs: 1px subtle borders, dashed "running-stitch" outline effects on hover, tactile fabric swatches, and zero drop shadows.

### 3. Tech Stack
- Framework: Next.js 14+ (App Router, TypeScript)
- Styling: Tailwind CSS
- UI Primitives: Radix UI / Shadcn UI
- Animations: Framer Motion (smooth layout transitions, dashed border reveals, drawer physics)
- Icons: Lucide React
- State Management: Zustand (Cart, Custom Patch options, and Vibe/Fabric filter matrix)

### 4. Key Pages & Structural Components

#### A. Global Banner & Navigation
- Marquee Ticker: Infinite scroll: "✦ ZERO VIRGIN POLYESTER ✦ DEADSTOCK RECLAIMED PATCHES ✦ ETHICALLY SOURCED ✦ VISIBLE MENDING FOR LIFE ✦".
- Sticky Navbar:
  - Left: "Anonymous" wordmark in a minimalist, modern monospace font.
  - Center: Navigation links ("The Collection", "Shop by Mood", "The Circular Manifesto", "Garment Passport").
  - Right: Currency selector, Search modal, and Cart drawer trigger styled like an upcycled luggage tag with an active item count badge.

#### B. Hero Section: Split Narrative
- Left: Dynamic editorial headline: "FASHION DOESN'T NEED MORE NOISE. IT NEEDS MORE STORY."
  - Supporting copy: "Slow-crafted heavyweight tees made from deadstock textile scraps and embroidered with the emotions you actually feel. Wear your chapter."[cite: 4]
  - Action buttons: "Shop the Drop" (solid obsidian) and "Trace Our Cotton" (button with a dashed running-stitch border).
- Right: Interactive 3D/tilt card showcasing the flagship tee with hot-spot pins highlighting the "Deadstock Patch", "Contrast Sashiko Stitch", and "Recycled Cotton Base"[cite: 3].

#### C. The Differentiator: "Vibe & Upcycle Matrix" (Dual-Filter System)
- Sticky top filter bar with two toggleable axes:
  - Filter by Emotion/Slang: `[All]` `[Overstimulated]` `[Quiet Luxury on $10]` `[Delulu]` `[Existential Chill]` `[Main Character]` `[Soft Era]`
  - Filter by Fabric Scrap Source (Doodlage/Ecoalf inspired): `[All Fibers]` `[Deadstock Denim]` `[Organic Khadi Scrap]` `[Recycled Terry]`
- Applying filters dynamically re-renders product cards with smooth Framer Motion `layoutId` animations.

#### D. Product Card Component
- Aspect ratio: 3:4 portrait card.
- Features:
  - Interactive "View Switcher" floating pill: Toggle between "Front Silhouette" and "Macro Stitch Detail" (zooming into the texture of the patch and embroidery)[cite: 2, 4].
  - Badges: Visible fabric origin badge (e.g., "98% Upcycled Cotton", "Traceable Indigo").
  - Hover state: Dashed border outline appears, revealing a quick "Custom Mend / Add" action bar.
  - Metadata: Product code, title, price, and available sizing (XS to 3XL — celebrating body inclusivity)[cite: 7].

#### E. "The Garment Passport" (Ethicus & Ecoalf Inspired Feature)
- Dedicated expandable section on product pages and home:
  - Carbon & Water Savings breakdown compared to fast-fashion blanks.
  - Transparent supply chain map: From organic cotton farm to local artisan stitching hub.
  - "Lifetime Mend Guarantee": Instructions on how buyers can send their worn tees back for free visible mending patches[cite: 5].

#### F. Inclusive Sizing & Fit Showcase ("Every Plus Is A Gain")
- Responsive image carousel demonstrating the natural drape of the boxy cut across diverse bodies[cite: 7].
- Fit toggle showing the silhouette on sizes S, L, and 3XL side-by-side.

#### G. Tactile Slide-Over Cart Drawer
- Custom slide-out panel styled like an artisan's workshop envelope.
- Shows selected size, chosen patch variant, and repair kit inclusion[cite: 2].
- Dynamic milestone progress bar: "Add $18 more to receive a complimentary sashiko visible repair kit".
- Smooth one-click checkout integration mock.

### 5. Mock Data Structure (`/data/products.ts`)
Provide 6 distinct items under the brand "Anonymous":
1. "Overstimulated & Unfiltered" Boxy Tee — 300 GSM raw bone cotton, floral deadstock pocket patch, contrast red running stitches[cite: 1, 2].
2. "Existential Chill" Relaxed Crew — Deep indigo-washed recycled cotton, frayed patch, tone-on-tone embroidery.
3. "Delulu Champion" Heavyweight Tee — Sage green organic jersey with upcycled corduroy patch details.
4. "Social Battery: 1%" Cut-and-Sew Tee — Made entirely from off-cut panel strips with visible running seam stitches[cite: 1].
5. "Main Character (In Recovery)" Oversized Tee — Undyed raw cotton with botanical sashiko mending[cite: 2].
6. "Quiet Luxury On $10" Vintage Wash Tee — Upcycled denim scrap appliqué on slate gray cotton.

### 6. Code & UX Standards
- Mobile-first layout with bottom-anchored thumb navigation.
- Accessible modals, sliders, and navigation controls adhering to ARIA standards.
- Modular Next.js file layout (`/components/ui`, `/components/product`, `/components/cart`, `/components/passport`, `/lib/store.ts`).
