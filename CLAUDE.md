# CLAUDE.md: Knowledge Without Borders (KWB-CSF)

Capacity-building for non-profits and businesses in Etobicoke: strategic planning, program development, fundraising, training.

- Live domain: kwb-csf.com (deploy path) / knowledgewithoutborders.ca (in code): confirm
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
- Routes: `/`, `/about`, `/contact`, `/gallery`, `/policies`, `/services`, `/training`.

## Deploy
- No passwords, no FTP (17 Nov 2026). `.github/workflows/deploy.yml`: push to `main` → `npm ci && npm run build` → the built site (`out/`) is saved to the `live` branch → Hostinger pulls that branch (hPanel > kwb-csf.com > Advanced > Git, branch `live`, Auto deployment webhook) → the workflow checks kwb-csf.com shows the new build.
- Never edit the `live` branch by hand: it is rewritten on every publish. `public/.htaccess` (or `deployment/.htaccess`) carries the server rules.

## Where things live
- Pages: `src/pages/<page>/` (one folder per page, sections in `components/`). Routes: `src/router/`.
- Text, images and links are mostly hard-coded inside the page components (`src/pages/<page>/components/*.tsx`).
- Next studio step for this site: move client-facing content into `src/content/*.json` and wire up both editors (Pages CMS + Sveltia at `/admin`), exactly like `jacquesmofa/CAWAP` (see its CLAUDE.md and `scripts/studio-tools/` for `extract.mjs`, `snapshot.mjs`, `compare.mjs`). Verify with before/after snapshots that visitors see no change.

## Known issues (found 10 Nov 2026)
- 68 Readdy AI placeholder image URLs (`readdy.ai/api/search-image`) are still in the code. Replace them with real photos and track the rest in `PLACEHOLDERS.md`.
- Different stack from the others: React 18, Vite 5, **Tailwind 4**. Don't copy Tailwind 3 config patterns into it.
- Design overlap with other clients: Uses stock Tailwind blues/purples: no brand identity yet. Highest priority for a real design system.
