# PLACEHOLDERS: Knowledge Without Borders (kwb-csf.com)

Everything here is unconfirmed or temporary. Ask Papa François; do not invent.

## To confirm with Papa François
- **Fax (416) 438-9938** on the Contact page: not on the official letterhead (which shows only (437) 875-8045). Keep or remove?
- **Facebook link**: he sent a link to one post (`facebook.com/share/p/17fyfJPJaV/`). The footer uses it for now; ask for the address of the Facebook page itself.
- **YouTube**: the old footer linked to `youtube.com/kwbcsf`; removed because he did not list it. Add it back in `src/content/site.json` if a channel exists.
- **About page "media" items** (e.g. "Client Success Story: Youth Connect Services", "UZIMA International fundraising workshop resulting in $150K grant success"): real? They use AI pictures.
- **Client list on the home page** ("Trusted by organizations…"): confirm every name is a real client and may be named.
- **Second address**: letterhead lists Mozia Professional Business Centre, 10 Belfield Road, 2nd Floor, Etobicoke ON M9W 1G1 and 64 Vanevery Street, Etobicoke ON M8V 1Y6. Which is the main one?

## Removed 17 Nov 2026 (not confirmed)
- Home page "partners" row: Government of Canada, United Way, Ontario Trillium Foundation, Canadian Red Cross, YMCA, shown with AI-made imitation logos. Put real partners back only with their permission and their real logo files.
- Readdy chat assistant widget (loaded on every page from readdy.ai).
- Unused home sections with invented figures (150 organizations, 25 countries, 300 projects, 15 years) and a wrong phone number (416) 409-7558.
- Footer links that led nowhere (Publications, Articles & Insights, Client Testimonials, Events Calendar, Career Opportunities).

## Pictures
- 45 AI placeholder pictures (`readdy.ai/api/search-image`) remain on Home, Services, About, Training, Policies. Replace with real photos (the Gallery already has 22 real ones).
- Logo in the header and gallery photos are loaded from imgur.com: move them into `public/media/` or Cloudinary when the originals are available.
- Share pictures (`public/media/share-*.jpg`) and icons are made from the official letterhead logo.

## Editors
- Every page, the menu and the footer are editable in Pages CMS and at /admin (17 Nov 2026).

## Contact form
- Sends through Formspree (`formspree.io/f/xvglzkwz`). Confirm which inbox receives it (should be kwb.csfglobal@gmail.com) and send a test message.
