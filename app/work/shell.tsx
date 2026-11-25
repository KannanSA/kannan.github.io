import { Footer, Header } from '../chrome';

export function StudyShell({
  kicker,
  title,
  lede,
  facts,
  links,
  children,
}: {
  kicker: string;
  title: string;
  lede: string;
  facts: { value: string; label: string }[];
  links: { href: string; label: string }[];
  children: React.ReactNode;
}) {
  return (
    <>
      <a className="skip" href="#study">
        Skip to case study
      </a>
      <Header />
      <main className="study" id="study">
        <article className="wrap">
          <p className="study-kicker">{kicker}</p>
          <h1 className="section-title">{title}</h1>
          <p className="section-copy">{lede}</p>
          <ul className="study-facts">
            {facts.map((fact) => (
              <li key={fact.label}>
                <strong>{fact.value}</strong>
                <span>{fact.label}</span>
              </li>
            ))}
          </ul>
          <div className="study-body">{children}</div>
          <div className="study-actions">
            {links.map((link) => {
              const external = link.href.startsWith('http');
              return (
                <a
                  key={link.href}
                  className={external ? 'pill pill--solid' : 'pill pill--ghost'}
                  href={link.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
