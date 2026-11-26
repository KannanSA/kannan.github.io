'use client';

import { useEffect, useRef, useState } from 'react';
import { personalInfo } from './site';

const nav = [
  { href: '/#work', label: 'Work' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#education', label: 'Education' },
  { href: '/#skills', label: 'Skills' },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      {open ? (
        <path d="M3.2 3.2 12.8 12.8M12.8 3.2 3.2 12.8" stroke="currentColor" strokeWidth="1.5" />
      ) : (
        <path
          d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={scrolled ? 'site-header liquidglass is-scrolled' : 'site-header liquidglass'}>
        <a className="wordmark" href="/#top" data-cursor-lock>
          <span>SA</span>Kannan
        </a>
        <nav className="site-nav" aria-label="Portfolio">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a
            className="pill pill--ghost liquidglass pill--sm header-github"
            data-cursor-lock
            href={personalInfo.github}
            target="_blank"
            rel="me noopener noreferrer"
          >
            GitHub
          </a>
          <a className="pill pill--ghost liquidglass pill--sm" data-cursor-lock href="https://www.kannanindustrials.com/" rel="me">
            Hire me
          </a>
          <a className="pill pill--solid pill--sm" href="/#contact" data-cursor-lock>
            Contact
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle liquidglass"
            data-cursor-lock
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <MenuIcon open={open} />
          </button>
        </div>
      </header>
      {open ? (
        <nav id="mobile-nav" className="nav-panel liquidglass" aria-label="Portfolio">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
          <a href="/#contact" onClick={close}>
            Contact
          </a>
          <a className="pill pill--ghost liquidglass nav-hire" href="https://www.kannanindustrials.com/" rel="me" onClick={close}>
            Hire me
          </a>
          <a href={personalInfo.github} target="_blank" rel="me noopener noreferrer" onClick={close}>
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="me noopener noreferrer" onClick={close}>
            LinkedIn
          </a>
        </nav>
      ) : null}
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <p className="footer-name">
            <span>SA</span>Kannan
          </p>
          <p className="footer-meta">
            Kannan S A · sakannan
            <br />
            Based in London
            <br />
            Hi. <span className="tamil">வணக்கம்.</span> Hola.
          </p>
        </div>
        <div className="footer-col">
          <p>Work</p>
          <a href="/#work">Selected work</a>
          <a href="/work/clinical-nlp/">Clinical NLP</a>
          <a href="/work/carbon-nanoclusters/">Carbon nanoclusters</a>
          <a href="/work/global-travel-vaccinations/">Healthcare platforms</a>
          <a href="/work/ipong/">iPong</a>
          <a href="/work/dab-counter/">Dab Counter</a>
          <a href="/work/snap-ar/">AR lenses</a>
          <a href={personalInfo.github} target="_blank" rel="me noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="footer-col">
          <p>Record</p>
          <a href="/#experience">Experience</a>
          <a href="/#education">Education</a>
          <a href="/#skills">Technical skills</a>
          <a href="/#research">Research</a>
        </div>
        <div className="footer-col">
          <p>Connect</p>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
          <a href="https://www.kannanindustrials.com/" rel="me">Hire me</a>
          <a href={personalInfo.linkedin} target="_blank" rel="me noopener noreferrer">
            LinkedIn
          </a>
          <a href={personalInfo.cv} download="kannan-sekar-cv.pdf">
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
