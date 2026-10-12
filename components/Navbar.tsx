'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';

const NAV_LINKS = [
  { id: 'about',      label: 'Sobre',            color: '#16A34A' },
  { id: 'experience', label: 'Experiência',       color: '#CA8A04' },
  { id: 'areas',      label: 'Áreas de Atuação',  color: '#DC2626' },
  { id: 'education',  label: 'Formação',          color: '#EA580C' },
  { id: 'contact',    label: 'Contato',           color: '#7C3AED' },
] as const;

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  /* ── Individual IntersectionObserver per section ── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          rootMargin: '-40% 0px -55% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  /* ── Smooth scroll to section ── */
  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ══════════ NAVBAR ══════════ */}
      <nav className="navbar" role="navigation" aria-label="Navegação principal">
        <div className="container">
          {/* Left: Logo */}
          <a
            href="#"
            className="nav-logo"
            aria-label="Eude Ramos Silva — Início"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <Image
              src="/logo-er.png"
              alt="Logo Eude Ramos"
              width={32}
              height={32}
              className="nav-logo-icon"
            />
            <span className="nav-logo-text">Eude Ramos · Assistente Social</span>
          </a>

          {/* Center: Theme Toggle (desktop only) */}
          <div className="nav-theme-toggle" role="group" aria-label="Alternar tema">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
              aria-pressed={theme === 'dark'}
              title={theme === 'light' ? 'Modo escuro' : 'Modo claro'}
            >
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>

          {/* Right: Nav links, CTA, Hamburger */}
          <div className="nav-actions">
            {/* Desktop links */}
            <div className="nav-links">
              {NAV_LINKS.map(({ id, label, color }) => {
                const isActive = activeId === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                    style={{
                      borderBottom: isActive
                        ? `2.5px solid ${color}`
                        : '2.5px solid transparent',
                      paddingBottom: '3px',
                      transition: 'border-color 0.3s ease, color 0.3s ease',
                      color: isActive ? color : undefined,
                      fontWeight: isActive ? 700 : 500,
                      '--hover-color': color,
                    } as React.CSSProperties}
                  >
                    {label}
                  </a>
                );
              })}
            </div>

            <a href="#contact" className="nav-cta-mobile" aria-label="Entrar em contato">
              Entrar em Contato
            </a>

            <button
              className={`hamburger ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Menu de navegação"
      >
        {/* Navigation links */}
        <nav className="mobile-nav-links">
          {NAV_LINKS.map(({ id, label, color }) => {
            const isActive = activeId === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                style={{
                  borderLeft: isActive ? `3px solid ${color}` : '3px solid transparent',
                  paddingLeft: isActive ? '12px' : '15px',
                  color: isActive ? color : undefined,
                  fontWeight: isActive ? 700 : 500,
                  transition: 'border-color 0.3s ease, color 0.3s ease, padding-left 0.3s ease',
                }}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Theme toggle - centered, after Contato */}
        <div className="mobile-theme-toggle" role="group" aria-label="Alternar tema">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
            aria-pressed={theme === 'dark'}
            title={theme === 'light' ? 'Modo escuro' : 'Modo claro'}
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </>
  );
}
