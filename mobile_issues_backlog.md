# Mobile Responsiveness Issues Backlog

This file contains the list of audited mobile responsiveness issues identified during development. Use this list to implement responsiveness fixes.

---

## 🟢 Completed (Fixed)

### 1. Testimonial Hero: Inline Pixel Offsets & Title Position
- **Status:** Done.
- **Fix:** Moved positioning offsets from inline styling into `page.module.css`. Corrected mobile alignment rules, aligned stats to right on screens <= 768px, and adjusted tablet size (<= 1024px) spacing offsets.

### 2. Back-To-Top Button
- **Status:** Done.
- **Fix:** Added a responsive glassmorphic floating back-to-top button on the Testimonials page that renders as soon as a user clicks "Load More Reviews".

### 3. Home Page: Naturopathic Approach Section
- **Status:** Done.
- **Fix:** Moved all inline styles to `page.module.css` classes. Center-aligned glass card on mobile and configured background image opacity bounds.

### 4. Services, Therapies & Assessments Mobile Multi-Columns
- **Status:** Done.
- **Fix:** Refactored responsive styling of `mediaCardGrid` and `gridContainer` (InteractiveGrid component) on screens <= 768px to show **2 columns of cards** instead of wrapping to a single column.



---

## 🔴 Critical (Breaks Layout/Content)

### 5. Preloader Start-up Animation Dismissal (Mobile Device Cached Instances)
- **File:** [Preloader.js](./src/components/ui/Preloader.js)
- **Problem:** When loaded on some mobile device viewports or cached routes, the start-up animation loader overlay fails to disappear or hide, blocking all clicks.
- **Fix Needed:** Although `isVisible` state conditional returns have been set, investigate why the fade-out class or storage triggers are failing on phone device browsers. Ensure fallback unmount logic.

---

## 🟡 Medium (Degraded UX / Scaling Bugs)

### 6. RotatingHexagon: Mobile Render & Touch Interaction
- **File:** [RotatingHexagon.js](./src/components/ui/RotatingHexagon.js), [RotatingHexagon.module.css](./src/components/ui/RotatingHexagon.module.css)
- **Problem:** On mobile devices, the hexagon layout displays flat, lacks the central lotus image and connecting lines, and the touch interaction (tap to show tooltips) is not triggering correctly.
- **Status/Attempts Made:**
  - Added React state `activeNode` and a combined check (`window.innerWidth <= 768 || hover:none`) on node `onClick` events.
  - Increased node scale to `22%` for mobile.
  - Removed SVG drop-shadow filter and mix-blend-mode overlay to prevent GPU rendering bugs.
  - Added explicit quotes inside inline style `url()` templates.
  - Dev server cache was cleared and server restarted, but the component is reported as completely unchanged on mobile.
- **Fix Needed:** Investigate viewport size collapse, Next.js page bundle hot-reload / device sync, or styles overriding `.container` visibility.

### 7. Testimonial Carousel (Home Page)
- **File:** [page.js (Home Page)](./src/app/page.js) — Line 418
- **Problem:** The container has a fixed height of `400px`. Longer testimonial quotes overflow and clip on small screens.
- **Fix Needed:** Change `height: '400px'` to `minHeight: '400px'` or let it scale dynamically.
