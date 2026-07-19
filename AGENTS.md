<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Sheeba Nutritionist Project Context

## Current Status & Modifications Made
1. **Metabolic Mapping (Clinical North Star)**:
   - Added callout block on the Home Page (`src/app/page.js`).
   - Integrated under Assessments listing pages and Dynamic Routes.
   - Removed `.slice(0, 4)` filters on homepage grids so all items display.
2. **E4L (Nutri Energetic System)**:
   - Changed "NES" references to "E4L (Energy4Life)".
   - Duplicated services item so it appears in both "Health Assessments" and "Therapies" lists.
   - Replaced E4L details/longContent with the verified client copy (Bioenergetic Scan & Restoring Information infoceuticals).
3. **Weight (Fat loss) programs**:
   - Renamed "Dropzone" to "Weight (Fat loss) programs" across grids.
   - Preserves link pointing to `https://www.dropzone.fit`.
4. **Practitioner Supplements**:
   - Added under Services/Therapies grids.
   - Interactive grids now support `externalLink: "https://www.practitionerguided.com"` targeting `_blank` tabs.
5. **Media Gallery**:
   - Added Dropzone Instagram link (`https://www.instagram.com/dropzonefit`).
   - Renamed "Video Appearances" section heading to "Video Interviews".
   - Fixed iframe blocking by adding `frame-src 'self' https://www.youtube.com https://w.soundcloud.com https://player.vimeo.com` inside `next.config.mjs` Content Security Policy (CSP).
6. **Layout Adjustments**:
   - Health Assessments page hero visual column is kept empty (as placeholder) per user direction, retaining the split layout framework.

## Active Rules & Preferences
- **Communication Style**: Caveman Mode (max brevity, fragments, 🤖 emoji prefix).
- **Styling**: Vanilla CSS, rich curated HSL palettes, glassmorphism, no TailwindCSS.
- **Verification**: Verify Next.js builds compile successfully locally.
- **Deployment**: Never deploy/push to Vercel production unless the user explicitly requests/tells you to do so. Production URL is `https://sheeba-the-nutritionist.vercel.app`.
