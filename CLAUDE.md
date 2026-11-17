# CLAUDE.md: Knowledge Without Borders (KWB-CSF)

Capacity-building for non-profits and businesses in Etobicoke: strategic planning, program development, fundraising, training.

- Live domain: https://kwb-csf.com (on the official letterhead; knowledgewithoutborders.ca was removed from the code 17 Nov 2026). Email kwb.csfglobal@gmail.com, phone (437) 875-8045.
- Host: Hostinger-style path `domains/kwb-csf.com/public_html/`
- Design and audience: see `brand-dna.md`. Placeholders: `PLACEHOLDERS.md` (create it when you find one).

## Studio rules (Jacques' web studio: apply to every task)
- This site must look custom-made for this client, never like a template. Never reuse another client's palette, font pairing, layout rhythm or signature element. No generic AI layout (centered hero + 3 icon cards + testimonial slider + CTA band) unless Jacques asks for it.
- Read `brand-dna.md` in this repo before any design or content change. Items marked ❓ are not confirmed: ask, don't invent.
- Real copy and real photos only. Never invent reviews, testimonials, statistics, people or partner logos. Every placeholder goes in `PLACEHOLDERS.md`.
- Done means: `npm ci && npm run build` passes, you checked desktop and mobile yourself, alt text, AA contrast, page titles/descriptions, compressed images.
- Push to the deploy branch only after the build passes and the change is verified (pushing deploys the live site). Never commit secrets.
- Report to Jacques in plain language, no jargon, with the live link. Anything he must do himself (secrets, DNS, accounts): click-by-click steps.
- Studio stack (zero recurring cost): client's own host via GitHub Actions FTP deploy; Cloudflare free in front; images in Cloudinary or the repo; video on YouTube or Mux (store the public Playback ID, never the Asset ID); forms via Web3Forms; editing via Pages CMS + Sveltia at `/admin`. No Vercel Hobby or Netlify for client sites.

## Stack and build
- Originally a Readdy export: Vite + React + TypeScript + Tailwind + React Router, i18next installed.
- Install and build: `npm ci && npm run build` → output in `out/`.
- Dev preview: `npm run dev`.
- Routes: `/`, `/about`, `/announcement`, `/contact`, `/gallery`, `/policies`, `/services`, `/training`.
- Build: `vite build && node scripts/social-pages.mjs` (one HTML file per page with its own title, description and share picture, plus `sitemap.xml`; source `src/content/seo.json`; `SeoSync.tsx` sets the same in the browser).

## Deploy
- No passwords, no FTP (17 Nov 2026). `.github/workflows/deploy.yml`: push to `main` → `npm ci && npm run build` → the built site (`out/`) is saved to the `live` branch → Hostinger pulls that branch (hPanel > kwb-csf.com > Advanced > Git, branch `live`, Auto deployment webhook) → the workflow checks kwb-csf.com shows the new build.
- Never edit the `live` branch by hand: it is rewritten on every publish. `public/.htaccess` carries the server rules (https, clean addresses, per-page files, SPA fallback, caching).

## Where things live
- Pages: `src/pages/<page>/` (one folder per page, sections in `components/`). Routes: `src/router/`.
- Text, images and links are mostly hard-coded inside the page components (`src/pages/<page>/components/*.tsx`).
- Next studio step for this site: move client-facing content into `src/content/*.json` and wire up both editors (Pages CMS + Sveltia at `/admin`), exactly like `jacquesmofa/CAWAP` (see its CLAUDE.md and `scripts/studio-tools/` for `extract.mjs`, `snapshot.mjs`, `compare.mjs`). Verify with before/after snapshots that visitors see no change.

## Known issues (found 10 Nov 2026)
- 68 Readdy AI placeholder image URLs (`readdy.ai/api/search-image`) are still in the code. Replace them with real photos and track the rest in `PLACEHOLDERS.md`.
- Different stack from the others: React 18, Vite 5, **Tailwind 4**. Don't copy Tailwind 3 config patterns into it.
- Design overlap with other clients: Uses stock Tailwind blues/purples: no brand identity yet. Highest priority for a real design system.

- 17 Nov 2026: Hostinger (hPanel > kwb-csf.com > Advanced > Git) is connected to the `live` branch with Auto-deployment on. The old committed `out/`, `out.zip` and root `.htaccess` (which served `main/out`) were removed from `main`.

## Content and editors (17 Nov 2026)
- `src/content/announcement.json` (bilingual announcement from Papa François's document, shown at `/announcement` and in the home strip), `site.json` (email, phone, social links: footer, Contact, announcement), `seo.json`.
- Pages CMS (`.pages.yml`) and Sveltia (`public/admin/`, https://kwb-csf.com/admin/). BOTH GENERATED: `npm run cms:config` from the JSON + `scripts/cms-registry.mjs`; `npm run cms:check`. Never edit them by hand.
- Sveltia sign-in here is "Sign In Using Access Token" only: the site is published through the `live` branch, so a GitHub login secret can never be placed on the server (it would be committed).
- Page text of the other pages is still hard-coded: move it to `src/content/pages/*.json` next (LDII is the model).
- Logo, icons and share cards come from the official letterhead (`public/media/kwb-logo.png`). Open questions: `PLACEHOLDERS.md`.
