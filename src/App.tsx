import { useEffect, useState, type ChangeEvent } from 'react';
import { Link, Navigate, NavLink, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowDown, ArrowLeft, ArrowUpRight, Code2, Mail, Send, Github, Menu, X, Smartphone, Layers3, Check, ExternalLink } from 'lucide-react';
import { copy, projects, originText, type Lang, type Project } from './data';

const langOf = (value?: string): Lang => value === 'ru' ? 'ru' : 'en';

function Shell() {
  const { lang: raw = 'en' } = useParams();
  const l = langOf(raw);
  const t = copy[l];
  const loc = useLocation();
  const nav = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = l;
    const parts = loc.pathname.split('/').filter(Boolean);
    const section = parts[1] ?? '';
    const slug = section === 'projects' ? parts[2] : undefined;
    const project = slug ? projects.find(item => item.slug === slug) : undefined;
    const labels: Record<string, string> = l === 'ru'
      ? { '': 'Портфолио C#-разработчика', projects: 'Проекты', about: 'Обо мне', experience: 'Опыт работы', contact: 'Контакты' }
      : { '': 'C# Developer Portfolio', projects: 'Projects', about: 'About', experience: 'Experience', contact: 'Contact' };
    const title = project
      ? `${project.title} | ALEXA.DEV`
      : `${labels[section] ?? labels['']} | ALEXA.DEV`;
    const description = project
      ? project[l]
      : l === 'ru'
        ? 'Портфолио C#-разработчика: коммерческий опыт Unity, нативные iOS-приложения и веб-проекты.'
        : 'C# developer portfolio: commercial Unity experience, native iOS apps and web projects.';
    document.title = title;
    const setMeta = (selector: string, attribute: string, key: string, content: string) => {
      let tag = document.querySelector(selector);
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attribute, key); document.head.appendChild(tag); }
      tag.setAttribute('content', content);
    };
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', l === 'ru' ? 'ru_RU' : 'en_US');
    setMeta('meta[property="og:image"]', 'property', 'og:image', `${window.location.origin}/og-image.png`);
    setMeta('meta[property="og:image:type"]', 'property', 'og:image:type', 'image/png');
    setMeta('meta[property="og:image:width"]', 'property', 'og:image:width', '1200');
    setMeta('meta[property="og:image:height"]', 'property', 'og:image:height', '630');
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', `${window.location.origin}/og-image.png`);
    setMeta('meta[property="og:url"]', 'property', 'og:url', window.location.href);
  }, [l, loc.pathname]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setOpen(false);
  }, [loc.pathname]);

  if (raw !== 'en' && raw !== 'ru') return <Navigate to={`/en${loc.pathname.replace(/^\/[^/]+/, '')}`} replace />;

  const toggle = () => {
    nav(loc.pathname.replace(/^\/(en|ru)/, `/${l === 'en' ? 'ru' : 'en'}`));
    setOpen(false);
  };
  const links: [string, string][] = [['', t.home], ['/projects', t.projects], ['/about', t.about], ['/experience', t.experience], ['/contact', t.contact]];

  return <>
    <header>
      <div className="wrap head">
        <Link className="logo" to={`/${l}`} aria-label="Alexa Dev home">alexa<span>dev</span><i>.</i></Link>
        <button className="mobile" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
        <nav className={open ? 'open' : ''} aria-label={l === 'ru' ? 'Основная навигация' : 'Main navigation'}>
          {links.map(([path, label]) => <NavLink end={!path} key={path} to={`/${l}${path}`} onClick={() => setOpen(false)}>{label}</NavLink>)}
          <button className="lang" onClick={toggle} aria-label={l === 'en' ? 'Switch to Russian' : 'Switch to English'}>{l === 'en' ? 'RU' : 'EN'} ↗</button>
        </nav>
      </div>
    </header>
    <main id="main-content">
      <Routes>
        <Route path="" element={<Home l={l} />} />
        <Route path="projects" element={<Projects l={l} />} />
        <Route path="projects/:slug" element={<ProjectDetail l={l} />} />
        <Route path="about" element={<About l={l} />} />
        <Route path="experience" element={<Experience l={l} />} />
        <Route path="contact" element={<Contact l={l} />} />
        <Route path="*" element={<NotFound l={l} />} />
      </Routes>
    </main>
    <footer><div className="wrap foot"><Link className="logo" to={`/${l}`}>alexa<span>dev</span><i>.</i></Link><small>{t.footer} · © {new Date().getFullYear()}</small><a href="https://github.com/AlexandraDobryakova" target="_blank" rel="noreferrer">GitHub ↗</a></div></footer>
  </>;
}

function Card({ project, lang }: { project: Project; lang: Lang }) {
  const p = project;
  return <Link className={`card ${p.slug === 'clicker-test-task' ? 'featured-card' : ''}`} to={`/${lang}/projects/${p.slug}`}>
    <div className={`art ${p.type} ${p.slug === 'clicker-test-task' ? 'clicker-art' : ''}`}>
      <small>{p.year}</small>
      {p.icon ? <img className="project-icon" src={p.icon} alt={`${p.title} app icon`} loading="lazy" /> : p.slug === 'clicker-test-task' ? <div className="clicker-mark"><span>CLICK</span><b>ER</b><i>UNITY · C#</i></div> : <div className="orb"><b /></div>}
      <span className="art-type">{p.type === 'unity' ? 'UNITY / GAMES' : p.type.toUpperCase()}</span><span className="art-arrow">↗</span>
    </div>
    <div className="card-meta">{originText(p.origin, lang)} <span>{p.client ?? p.stack.slice(0, 2).join(' · ')}</span></div>
    <h3>{p.title}</h3><p>{p[lang]}</p>
  </Link>;
}

function Heading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-heading"><small>{eyebrow}</small><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

function Home({ l }: { l: Lang }) {
  const t = copy[l];
  return <>
    <section className="wrap hero">
      <div>
        <div className="availability"><i /> {t.availability}</div>
        <small>{t.eyebrow}</small>
        <h1>{t.title}<br /><em>{t.accent}</em></h1>
        <p className="lead">{t.intro}</p>
        <div className="actions"><Link className="btn primary" to={`/${l}/projects`}>{t.view} ↗</Link><Link className="btn" to={`/${l}/contact`}>{t.reach} →</Link></div>
        <div className="focus-tags"><span>C#</span><span>Unity</span><span>SwiftUI</span><span>iOS & Android</span><span>Web</span><span>Claude</span></div>
      </div>
      <div className="visual" aria-hidden="true"><div className="gridbg" /><div className="ring r1" /><div className="ring r2" /><div className="core">A</div><small>CREATIVE MINDSET <span>TECHNICAL EXECUTION</span></small></div>
      <a className="scroll" href="#work"><ArrowDown size={14} /> SCROLL TO EXPLORE</a>
    </section>
    <section id="work" className="wrap section"><Heading eyebrow={t.selected} title={t.selectedTitle} text={t.selectedText} /><div className="cards">{['commercial-unity-development', 'clicker-test-task', 'habit-tracker', 'igaming-seo-websites', 'sortpics', 'kopeika'].map(slug => projects.find(p => p.slug === slug)).filter((p): p is Project => Boolean(p)).map(p => <Card key={p.slug} project={p} lang={l} />)}</div><Link className="textlink" to={`/${l}/projects`}>{t.all} ↗</Link></section>
    <section className="muted"><div className="wrap section"><Heading eyebrow={t.what} title={t.whatTitle} /><div className="capabilities"><article><Code2 /><small>01 / BUILD</small><h3>{t.cap1}</h3><p>{t.cap1d}</p></article><article><Smartphone /><small>02 / CREATE</small><h3>{t.cap2}</h3><p>{t.cap2d}</p></article><article><Layers3 /><small>03 / EXPLORE</small><h3>{t.cap3}</h3><p>{t.cap3d}</p></article></div></div></section>
    <section className="wrap section experience"><div><small>EXPERIENCE</small><h2>{l === 'en' ? 'Building, learning, improving.' : 'Создаю. Учусь. Становлюсь лучше.'}</h2><p>{l === 'en' ? '4 years of commercial C# and Unity development, with 190+ mobile projects.' : '4 года коммерческой C#- и Unity-разработки, более 190 мобильных проектов.'}</p><Link className="textlink" to={`/${l}/experience`}>{t.experience} ↗</Link></div><strong>4<sup>+</sup><small>{t.years}</small></strong></section>
    <section className="cta"><div className="wrap"><small>{t.cta}</small><h2>{t.ctaTitle}<br /><em>{t.ctaAccent}</em></h2><p>{t.ctaText}</p><Link className="btn primary" to={`/${l}/contact`}>{t.say} ↗</Link></div></section>
  </>;
}

function PageIntro({ tag, title, text }: { tag: string; title: string; text: string }) {
  return <div className="pageintro"><small>{tag}</small><h1>{title}<em>.</em></h1><p>{text}</p></div>;
}

function Projects({ l }: { l: Lang }) {
  const t = copy[l];
  const [filter, setFilter] = useState('all');
  const [q, setQ] = useState('');
  const list = projects.filter(p => (filter === 'all' || p.type === filter) && `${p.title} ${p.stack.join(' ')} ${p[l]} ${p.client ?? ''}`.toLowerCase().includes(q.toLowerCase()));
  return <section className="wrap page"><PageIntro tag="PORTFOLIO / 01" title={t.projects} text={t.projectsIntro} />
    <div className="controls"><div>{[['all', l === 'en' ? 'All' : 'Все'], ['unity', l === 'en' ? 'Unity & Games' : 'Unity и игры'], ['web', l === 'en' ? 'Web development' : 'Веб-разработка'], ['application', l === 'en' ? 'Applications' : 'Приложения']].map(([id, label]) => <button className={filter === id ? 'chosen' : ''} onClick={() => setFilter(id)} key={id}>{label}</button>)}</div><input aria-label={l === 'en' ? 'Search projects' : 'Поиск проектов'} placeholder={l === 'en' ? 'Search projects…' : 'Поиск проектов…'} value={q} onChange={(e: ChangeEvent<HTMLInputElement>) => setQ(e.target.value)} /></div>
    {list.length ? <div className="cards">{list.map(p => <Card project={p} lang={l} key={p.slug} />)}</div> : <p className="empty">{l === 'en' ? 'No projects found.' : 'Ничего не найдено.'}</p>}
  </section>;
}

function ProjectDetail({ l }: { l: Lang }) {
  const { slug = '' } = useParams();
  const t = copy[l];
  const p = projects.find(x => x.slug === slug);
  if (!p) return <NotFound l={l} />;
  const highlights = l === 'en' ? p.highlightsEn : p.highlightsRu;
  return <section className="wrap page project-detail">
    <Link className="back" to={`/${l}/projects`}><ArrowLeft size={15} />{t.back}</Link>
    <div className="detailhead"><small>PROJECT / {p.year}</small><h1>{p.title}<em>.</em></h1><p>{p[l]}</p><label>{originText(p.origin, l)}</label>{p.client && <span className="client-label">{p.client}</span>}</div>
    {p.slug === 'clicker-test-task' && <div className="project-cover clicker-cover"><div className="cover-orbit" /><div className="cover-content"><small>UNITY 6 · C#</small><strong>CLICKER<br />WEATHER<br />DOG BREEDS</strong><span>MVP · EXTENJECT · UNITASK</span></div></div>}
    {p.screenshots && p.screenshots.length > 0 && <section className="screenshot-section" aria-label={l === 'ru' ? 'Скриншоты приложения' : 'Application screenshots'}>
      <div className="screenshot-heading"><small>{l === 'ru' ? 'ГАЛЕРЕЯ' : 'GALLERY'}</small><h2>{l === 'ru' ? 'Скриншоты' : 'Screenshots'}<span> / {String(p.screenshots.length).padStart(2, '0')}</span></h2></div>
      <div className="screenshot-grid">{p.screenshots.map((src, index) => <a className="screenshot-item" href={src} target="_blank" rel="noreferrer" key={src} aria-label={`${p.title} — ${l === 'ru' ? 'скриншот' : 'screenshot'} ${index + 1}`}><img src={src} alt={`${p.title} — ${l === 'ru' ? 'экран' : 'screen'} ${index + 1}`} loading="lazy" decoding="async" /><span>{String(index + 1).padStart(2, '0')}</span></a>)}</div>
    </section>}
    <div className="detailgrid"><div><small>{t.overview}</small><p className="detailtext">{l === 'en' ? p.descEn : p.descRu}</p>
      {highlights && <><h3>{t.highlights}</h3><ul>{highlights.map(item => <li key={item}><Check />{item}</li>)}</ul></>}
      {p.sites && <><h3>{t.websites} · {p.sites.length}</h3><div className="site-list">{p.sites.map(site => <a className="site-item" href={site.url} key={site.url} target="_blank" rel="noreferrer"><span className="site-favicon">{site.name.slice(0, 1)}</span><span className="site-copy"><b>{site.name}</b><small>{site.description}</small></span><ExternalLink size={15} /></a>)}</div></>}
      {p.url && <a className="btn primary project-link" href={p.url} target="_blank" rel="noreferrer">{t.openRepo} <ArrowUpRight size={16} /></a>}
    </div><aside><small>{t.roleLabel}</small><p>{(l === 'en' ? p.roleEn : p.roleRu) ?? (p.origin === 'professional' ? 'Unity Developer' : 'Product direction & QA')}</p><small>{t.stack}</small><div className="tags">{p.stack.map(s => <span key={s}>{s}</span>)}</div>{p.client && <><small>{l === 'en' ? 'CLIENT' : 'КЛИЕНТ'}</small><p>{p.client}</p></>}</aside></div>
  </section>;
}

function About({ l }: { l: Lang }) {
  const t = copy[l];
  return <section className="wrap page"><PageIntro tag="ABOUT / 02" title={t.aboutTitle} text={l === 'en' ? 'I’m Alexa — a C# developer focused on Unity and mobile products.' : 'Я Alexa — C#-разработчик с фокусом на Unity и мобильные продукты.'} /><div className="aboutcopy"><p>{t.aboutText}</p></div>
    <small>{t.skillsTitle}</small><div className="skill-groups">{t.skillGroups.map(([heading, ...items]) => <section className="skill-group" key={heading}><h3>{heading}</h3><div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div></section>)}</div><p className="note">{t.skillsNote}</p>
  </section>;
}

function Experience({ l }: { l: Lang }) {
  const t = copy[l];
  return <section className="wrap page"><PageIntro tag="CAREER / 03" title={t.experience} text={t.expIntro} /><div className="timeline">
    <article><small>{t.roleDate}</small><h2>{t.role}</h2><h3>{t.company}</h3><p>{t.roleText}</p><div className="tags">{['C#', 'Unity', 'iOS', 'Android', 'Firebase', 'AppsFlyer', 'OneSignal', 'WebView', 'REST API', 'Git'].map(s => <span key={s}>{s}</span>)}</div></article>
    <article><small>{t.secondDate}</small><h2>{t.secondRole}</h2><h3>{t.secondCompany}</h3><p>{t.secondText}</p><div className="tags">{['C#', 'Unity', '3D', 'Gameplay', 'OOP'].map(s => <span key={s}>{s}</span>)}</div></article>
    <article><small>{l === 'en' ? 'EDUCATION' : 'ОБРАЗОВАНИЕ'}</small><h2>{t.education}</h2><p>{t.educationText}</p></article>
  </div></section>;
}

function Contact({ l }: { l: Lang }) {
  const t = copy[l];
  const rows = [
    { name: 'Email', value: 'sasha.dobryakova@gmail.com', href: 'mailto:sasha.dobryakova@gmail.com', icon: <Mail /> },
    { name: 'Telegram', value: '@AnnaKeat', href: 'https://t.me/AnnaKeat', icon: <Send /> },
    { name: 'GitHub', value: 'github.com/AlexandraDobryakova', href: 'https://github.com/AlexandraDobryakova', icon: <Github /> }
  ];
  return <section className="wrap page"><PageIntro tag="CONTACT / 04" title={t.contact} text={t.contactIntro} /><div className="contactrows">{rows.map(r => <a href={r.href} key={r.name} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><i>{r.icon}</i><span><small>{r.name}</small><b>{r.value}</b></span><ArrowUpRight /></a>)}</div></section>;
}

function NotFound({ l }: { l: Lang }) {
  const t = copy[l];
  return <section className="wrap page"><PageIntro tag="ERROR / 404" title={t.notFound} text={t.notFoundText} /><Link className="btn primary" to={`/${l}`}>{t.goHome} ↗</Link></section>;
}

export default function App() {
  return <Routes><Route path="/" element={<Navigate to="/en" replace />} /><Route path="/:lang/*" element={<Shell />} /><Route path="*" element={<Navigate to="/en" replace />} /></Routes>;
}
