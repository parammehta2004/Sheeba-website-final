# Changelog

All notable changes to the Sheeba The Nutritionist platform will be documented in this file.

## [Unreleased] - 2026-06-25

### Changed
- **Site-Wide Mobile Optimization**: Systematically updated all page CSS modules (`Home`, `About`, `Therapies`, `Health Assessments`, `Services`, `Testimonial`, `Media Gallery`, `Contact Us`) and UI components (`OrbitalAssessments`, `InteractiveGrid`, etc.).
  - Replaced fixed font sizes with fluid `clamp()` typography.
  - Implemented `@media` queries to properly collapse grids on devices <992px and <768px.
  - Scaled down excessive paddings for better mobile UX.
- **Component Polish**: Cleaned up the `InteractiveGrid` component. Removed the hardcoded `"Protocol"` fallback label to keep the cards on the Services and Health Assessment pages clean, while preserving proper labels on the homepage.
- **Deployment**: Configured direct push to Vercel production.

### Fixed
- **Navigation Dropdown Bug**: Fixed the "hover gap" issue in `Navigation.module.css` by adding a transparent `padding-bottom` bridge, ensuring that dropdown menus (like "Therapies") remain open and clickable when the user moves their cursor down.
