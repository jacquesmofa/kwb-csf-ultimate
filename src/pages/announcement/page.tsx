import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import announcement from '../../content/announcement.json';
import site from '../../content/site.json';

type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'section'; heading: string; text: string }
  | { type: 'list'; items: string[] };
type Version = { title: string; byline: string; greeting: string; blocks: Block[] };

const UI = {
  en: { label: 'Announcement', other: 'Lire en français', share: 'Share this announcement', contact: 'Request a preliminary consultation', email: 'Email us', follow: 'Follow us', date: 'en-CA' },
  fr: { label: 'Annonce', other: 'Read in English', share: 'Partager cette annonce', contact: 'Demander une consultation préliminaire', email: 'Écrivez-nous', follow: 'Suivez-nous', date: 'fr-CA' },
};

// "Name: description" list items show the name in bold.
function ListItem({ text }: { text: string }) {
  const m = text.match(/^([^:]{3,70}?)\s?:\s(.+)$/);
  return (
    <li className="flex gap-3">
      <span className="mt-2.5 h-2 w-2 flex-none rounded-full bg-sky-500" aria-hidden="true"></span>
      <span>{m ? (<><strong className="text-indigo-900">{m[1]}:</strong> {m[2]}</>) : text}</span>
    </li>
  );
}

// Turns the email address inside the text into a link.
function Linked({ text }: { text: string }) {
  const parts = text.split(site.email);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <a href={`mailto:${site.email}`} className="font-semibold text-sky-700 underline underline-offset-2 hover:text-indigo-900">{site.email}</a>
          )}
        </span>
      ))}
    </>
  );
}

export default function AnnouncementPage() {
  const { i18n } = useTranslation();
  const lang: 'en' | 'fr' = i18n.language?.startsWith('fr') ? 'fr' : 'en';
  const v = (announcement as unknown as Record<'en' | 'fr', Version>)[lang];
  const ui = UI[lang];
  const pageUrl = `${site.url}/announcement`;
  const shareText = encodeURIComponent(`${v.title} | ${site.name}`);
  const shareUrl = encodeURIComponent(pageUrl);
  const date = new Date(`${announcement.date}T12:00:00`).toLocaleDateString(ui.date, { year: 'numeric', month: 'long', day: 'numeric' });
  const shares = [
    { name: 'Facebook', icon: 'ri-facebook-fill', href: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}` },
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', href: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}` },
    { name: 'X', icon: 'ri-twitter-x-fill', href: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}` },
    { name: 'WhatsApp', icon: 'ri-whatsapp-line', href: `https://wa.me/?text=${shareText}%20${shareUrl}` },
  ];

  return (
    <article lang={lang} className="bg-slate-50">
      <header className="bg-gradient-to-br from-indigo-950 via-indigo-900 to-sky-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <span className="uppercase tracking-[0.2em] font-semibold text-sky-300">{ui.label}</span>
            <span className="text-indigo-200">{date}</span>
            <button
              onClick={() => i18n.changeLanguage(lang === 'en' ? 'fr' : 'en')}
              className="ml-auto inline-flex items-center gap-2 rounded-lg border border-white/40 px-3 py-1.5 font-medium hover:bg-white hover:text-indigo-900 transition-colors cursor-pointer"
            >
              <i className="ri-translate-2" aria-hidden="true"></i>
              {ui.other}
            </button>
          </div>
          <h1 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">{v.title}</h1>
          <p className="mt-4 text-lg text-indigo-100">{v.byline}</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-10 md:p-12">
          <img src="/media/kwb-logo.png" alt={`${site.name} logo`} width={900} height={357} className="h-16 w-auto mb-8" />
          <p className="text-lg font-semibold text-indigo-900">{v.greeting}</p>
          <div className="mt-5 space-y-5 text-[17px] leading-8 text-slate-700">
            {v.blocks.map((b, i) => {
              if (b.type === 'list') return <ul key={i} className="space-y-3">{(b.items ?? []).map((t) => <ListItem key={t} text={t} />)}</ul>;
              if (b.type === 'section') {
                const closing = i === v.blocks.length - 1;
                return closing ? (
                  <p key={i} className="pt-2">{b.heading}<br /><strong className="text-indigo-900">{b.text}</strong></p>
                ) : (
                  <section key={i} className="pt-4">
                    <h2 className="text-2xl font-bold text-indigo-900 mb-3">{b.heading}</h2>
                    <p><Linked text={b.text ?? ''} /></p>
                  </section>
                );
              }
              return <p key={i}><Linked text={b.text ?? ''} /></p>;
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-indigo-900 px-5 py-3 font-semibold text-white hover:bg-sky-700 transition-colors">
              <i className="ri-calendar-check-line" aria-hidden="true"></i>{ui.contact}
            </Link>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 rounded-lg border-2 border-indigo-900 px-5 py-3 font-semibold text-indigo-900 hover:bg-indigo-50 transition-colors">
              <i className="ri-mail-line" aria-hidden="true"></i>{ui.email}
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-600 mb-3">{ui.share}</h2>
            <div className="flex gap-3">
              {shares.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${ui.share}: ${s.name}`}
                  className="w-11 h-11 rounded-lg bg-indigo-900 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                  <i className={`${s.icon} text-lg`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-600 mb-3">{ui.follow}</h2>
            <div className="flex gap-3">
              {site.socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${site.name}: ${s.name}`}
                  className="w-11 h-11 rounded-lg border-2 border-indigo-900 text-indigo-900 flex items-center justify-center hover:bg-indigo-900 hover:text-white transition-colors">
                  <i className={`${s.icon} text-lg`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
