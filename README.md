# Formrest Living — Modern Luxury Furniture Web Application (React.js)

An editorial, high-performance eCommerce and lifestyle website for Scandinavian and Japanese minimalist ("Japandi") furniture, inspired by [formrest-furniture.myshopify.com](https://formrest-furniture.myshopify.com/).

Built with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide Icons**.

---

## 🏷️ Brand Name Options
1. **Formrest Living** *(Default used in code)* — Direct, warm, and iconic.
2. **Forma & Rest** — Emphasizes sculptural form and restful daily living.
3. **Vesta Studio** — Roman goddess of the hearth and peaceful home.
4. **Nordic Haven** — Highlighting organic Scandinavian woods and tactile bouclé textiles.
5. **Artisan Wood & Form** — Focuses on honest joinery, solid oak, and sustainable craft.

---

## 🎨 Design System & Color Palette
- **Forest Green (`#1E3A2F`, `#142720`):** Primary brand accent, primary CTA buttons, selected pills, and "The Object Edit" showcase container.
- **Ecru / Bone (`#FBF9F5`, `#FAF8F5`, `#F3EFE6`):** Warm, natural off-white background creating editorial breathing space.
- **Pale Sage Tint (`#EBF0E9`, `#E2E9DF`):** Soft organic neutral container background for the architectural 2D blueprint comparator.
- **Terracotta Clay (`#B85D3B`):** Earth tone accent for ceramic lamps, swatches, and active badges.
- **Oat Bouclé (`#D8CEBE`):** Tactile fabric tone for modern lounge chairs and daybeds.
- **Honey & Natural Oak (`#C88A42`, `#D1B58C`):** Warm European timber tones with natural hardwax oil sheen.

---

## ✨ Implemented Features & Sections

### 1. Header & Navigation (`Navbar.jsx`)
- **Top Announcement Bar:** White glove delivery guarantee with animated pulse.
- **Floating Frosted Capsule:** Translucent navbar over the hero that smoothly transitions to a sticky frosted glass header on scroll.
- **Mega Dropdown Catalog:** Categories for Seating, Tables, Storage, and Lighting.
- **Live Utility Controls:** Search trigger, Cart bag drawer with active item counter badge, and responsive mobile drawer.

### 2. Animated Hero Slider (`HeroSlider.jsx`)
- **3 Dynamic Lifestyle Slides:** Featuring The Cove Lounge Chair, The Ledge Sofa, and Gather Dining Table.
- **Floating Shoppable Pill Tag:** Real-time thumbnail, title, finish, and price pinned directly to the scene. Clicking opens the piece in Quick View.
- **Pill Navigation & Counters:** Previous/Next controls, slide counter (e.g. `01 / 03`), and auto-play with manual override.

### 3. Find Your Starting Point (`CategoryGrid.jsx`)
- 4 staggered luxury category cards (Seating, Tables, Storage, Lighting).
- Smooth image zoom on hover (`scale-105`) and rotating circular arrow badges.

### 4. The Considered Edit (`ProductCarousel.jsx` & `ProductCard.jsx`)
- Interactive category filter pills (`All`, `Seating`, `Tables`, `Storage`, `Lighting`).
- Smooth carousel scroll with navigation arrows.
- **Interactive Color Swatches:** Clicking color dot swatches dynamically updates the product photo and finish title in real time.
- **Hover Micro-Interactions:** Floating pills slide up for `[Quick view]` and `[+ Add to bag]`.

### 5. The Object Edit (`ObjectEdit.jsx`)
- Signature full-width deep Forest Green showcase container (`#1E3A2F`).
- **Interactive Perspective Switcher:** Segmented toggle between `[Silhouette]` (studio isolated cutout) and `[In A Room]` (warm 2700K ambient bedroom lighting).
- Technical specification badges (Light Source, Capacitive Touch Dimming, Braided Textile Cord, Spun Aluminum).

### 6. Guidance Columns (`GuidanceColumns.jsx`)
- 3 minimalist value pillars:
  1. *A little clarity* → Direct link to Size & Space comparator.
  2. *Closer to the details* → Direct link to Materials & Details accordion.
  3. *A question in mind?* → Opens the Studio Consultation request modal.

### 7. Materials & Details Accordion (`MaterialsAccordion.jsx`)
- Split 2-column layout:
  - Left: High-resolution macro zoom texture photography syncing with active selection.
  - Right: 3 expandable numbered accordions:
    - `01 Upholstery & Weaves` (Bouclé, Belgian linen, Martindale rub counts).
    - `02 Solid Wood & Finishes` (FSC 100% European Oak, zero-VOC hardwax oils).
    - `03 Joinery & Structural Hardware` (Dovetail joints, German soft-close dampers).

### 8. Shoppable Living Scene (`ShoppableScene.jsx`)
- Editorial lifestyle living room ("The Reading Corner").
- **Pulsing Hotspot Pins:** Numbered markers (`01`, `02`, `03`) with animated radar rings positioned over the Cove Chair, Disc Side Table, and Stem Floor Lamp.
- Companion product cards that highlight on click and provide one-click bag addition.

### 9. 2D Architectural Size & Space Comparator (`SizeComparator.jsx`)
- Signature interactive architectural canvas tool.
- **Metric / Imperial Toggle:** Live unit conversion between `cm` and `inches`.
- **View Switcher:** Side by Side vs. Blueprint Overlay mode.
- **Dynamic 2D Blueprint Canvas:** Renders proportional top-down wireframe footprints with dimension lines and calculated delta badges (e.g. *Fold Daybed is wider by 22 cm*).

### 10. The Finishing Touches (`FinishingTouchesGrid.jsx`)
- 4-column curated grid of accent pieces (Arc Pendant, Bedside Table, Arc Ottoman, Disc Side Table).

### 11. Find Your Palette (`MoodPaletteSwitcher.jsx`)
- Interactive room mood switcher with 3 distinct design directions:
  - `Warm Neutrals` (Oat, Oak, Cream)
  - `Earth Tones` (Forest Moss, Clay, Warm Timber)
  - `Quiet Contrast` (Deep Charcoal, Slate, Birch)
- Dynamic room photo crossfade and tonal harmony swatch chips.

### 12. Editorial Vignettes & Journal (`EditorialStories.jsx` & `JournalSection.jsx`)
- Horizontal room story cards (Living Room, Dining, Morning Rituals, etc.).
- Editorial design articles with an interactive modal article reader.

### 13. Slide-out Cart Drawer (`CartDrawer.jsx`)
- Free white-glove shipping progress bar ($500 threshold indicator).
- Quantity controls, finish indicators, and item removal.
- Promo discount voucher support (Use `FORMREST10` for 10% off).
- Order checkout simulation with success feedback.

### 14. Modals & Interactive Overlays
- `QuickViewModal.jsx`: Gallery preview, finish swatches, dimension specs, stock badge.
- `SearchModal.jsx`: Instant live search across furniture and materials.
- `ContactModal.jsx`: Interior space planning consultation inquiry form.

### 15. Luxury Frosted Glass Footer (`Footer.jsx`)
- Full-bleed interior photography background with frosted glass overlay card.
- Brand watermark header, multi-column navigation, newsletter subscription input, and back-to-top button.

---

## 🚀 Running the Project

### 1. Development Mode
To start the Vite development server:
```bash
npm run dev
```
Open `http://localhost:3000` (or the port shown in your terminal).

### 2. Production Build
To create an optimized production build:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```
