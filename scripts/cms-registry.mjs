/**
 * Which content files appear in the two website editors, under which heading,
 * and friendly labels/help text for fields. Field TYPES are worked out
 * automatically by scripts/cms-config.mjs from the JSON itself.
 *
 * Adding content: create src/content/<...>.json (top level must be an object),
 * add an entry below, run "npm run cms:config", commit the two generated configs.
 */

/** This website (used in the Sveltia config). relay: false = sign in with an access token. */
export const SITE = {
  url: 'https://kwb-csf.com',
  repo: 'jacquesmofa/kwb-csf-ultimate',
  logo: 'https://kwb-csf.com/icon-192.png',
  relay: false,
};

/** Sections in Sveltia CMS (Pages CMS shows one flat list in the same order). */
export const GROUPS = [
  { name: 'updates', label: '1. Announcements' },
  { name: 'settings', label: '2. Site settings (contact, social media, Google)' },
];

export const ENTRIES = [
  { group: 'updates', name: 'announcement', label: 'Announcement (English and French)', file: 'src/content/announcement.json',
    description: 'The announcement shown at /announcement and in the strip on the home page. Keep the English and French versions in step.' },
  { group: 'settings', name: 'site', label: 'Contact details and social media links', file: 'src/content/site.json',
    description: 'Used in the footer, on the Contact page and on the announcement.' },
  { group: 'settings', name: 'seo', label: 'Google and sharing: page titles, descriptions, pictures', file: 'src/content/seo.json',
    description: 'What Google, Facebook, WhatsApp and LinkedIn show for each page. Titles under 65 characters, descriptions under 160.' },
];

export const FIELD_HINTS = {
  date: { label: 'Date' },
  en: { label: 'English version' },
  fr: { label: 'French version' },
  title: { label: 'Title' },
  byline: { label: 'Signed by (line under the title)' },
  greeting: { label: 'Greeting' },
  blocks: { label: 'Text blocks, in order', itemName: 'block' },
  type: { label: 'Kind of block', description: 'paragraph = plain text; section = heading + text; list = bullet points.' },
  heading: { label: 'Heading (for a section)' },
  text: { label: 'Text', type: 'text' },
  items: { label: 'Bullet points (for a list)', itemName: 'point' },
  name: { label: 'Name' },
  nameFr: { label: 'Name in French' },
  url: { label: 'Web address' },
  email: { label: 'Email' },
  phone: { label: 'Phone (as shown)' },
  socials: { label: 'Social media links', itemName: 'network' },
  icon: { label: 'Icon name', description: 'Leave as it is unless adding a new network (Remix Icon name, e.g. ri-youtube-fill).' },
  site: { label: 'Whole site (defaults)' },
  pages: { label: 'Pages', itemName: 'page' },
  path: { label: 'Page address', description: 'For example /about. Do not change.' },
  description: { label: 'Description (120 to 160 characters)', type: 'text' },
  image: { label: 'Share picture (1200 × 630)' },
  imageAlt: { label: 'What the picture shows (for screen readers)' },
  locale: { label: 'Main language code' },
  localeAlternate: { label: 'Second language code' },
};
