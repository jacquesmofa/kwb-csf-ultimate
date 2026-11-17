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
  { name: 'pages', label: '2. Pages (text and pictures)' },
  { name: 'layout', label: '3. Menu and footer' },
  { name: 'settings', label: '4. Site settings (contact, social media, Google)' },
];

export const ENTRIES = [
  { group: 'updates', name: 'announcement', label: 'Announcement (English and French)', file: 'src/content/announcement.json',
    description: 'The announcement shown at /announcement and in the strip on the home page. Keep the English and French versions in step.' },
  { group: 'pages', name: 'page-home', label: 'Home page', file: 'src/content/pages/home.json',
    description: 'Everything on the home page, top to bottom: banner, mission, services, about, training, policies, gallery preview, contact, clients.' },
  { group: 'pages', name: 'page-about', label: 'About page', file: 'src/content/pages/about.json',
    description: 'Company overview, leadership, values, approach, clients and expertise.' },
  { group: 'pages', name: 'page-services', label: 'Services page', file: 'src/content/pages/services.json',
    description: 'The eight consulting areas, the process, industries.' },
  { group: 'pages', name: 'page-training', label: 'Training page', file: 'src/content/pages/training.json',
    description: 'Training programs, approach and benefits.' },
  { group: 'pages', name: 'page-gallery', label: 'Gallery page', file: 'src/content/pages/gallery.json',
    description: 'Photos (each with a category), the category tabs and the page texts. Photo categories must match a category id (workshops, training, meetings, events, achievements).' },
  { group: 'pages', name: 'page-policies', label: 'Policies page', file: 'src/content/pages/policies.json',
    description: 'The policy cards and the policy development process.' },
  { group: 'pages', name: 'page-contact', label: 'Contact page', file: 'src/content/pages/contact.json',
    description: 'Contact methods, form labels and messages, map.' },
  { group: 'layout', name: 'header', label: 'Menu (top of every page)', file: 'src/content/layout/header.json' },
  { group: 'layout', name: 'footer', label: 'Footer (bottom of every page)', file: 'src/content/layout/footer.json',
    description: 'Social media links are under Site settings > Contact details and social media links.' },
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
  url: { label: 'Web address or picture' },
  email: { label: 'Email' },
  phone: { label: 'Phone (as shown)' },
  socials: { label: 'Social media links', itemName: 'network' },
  icon: { label: 'Icon name', description: 'Leave as it is unless adding a new network (Remix Icon name, e.g. ri-youtube-fill).' },
  site: { label: 'Whole site (defaults)' },
  pages: { label: 'Pages', itemName: 'page' },
  path: { label: 'Page address', description: 'For example /about. Do not change.' },
  description: { label: 'Description (120 to 160 characters)', type: 'text' },
  image: { label: 'Picture' },
  backgroundImage: { label: 'Background picture' },
  hero: { label: 'Top banner' },
  photos: { label: 'Photos', itemName: 'photo' },
  category: { label: 'Category (id)' },
  categories: { label: 'Category tabs', itemName: 'tab' },
  imageAlt: { label: 'What the picture shows (for screen readers)' },
  locale: { label: 'Main language code' },
  localeAlternate: { label: 'Second language code' },
};
