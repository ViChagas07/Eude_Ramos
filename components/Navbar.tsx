'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const NAV_LINKS = [
  { id: 'about',      label: 'Sobre',            color: '#16A34A' },
  { id: 'experience', label: 'Experiência',       color: '#CA8A04' },
  { id: 'areas',      label: 'Áreas de Atuação',  color: '#DC2626' },
  { id: 'education',  label: 'Formação',          color: '#EA580C' },
  { id: 'contact',    label: 'Contato',           color: '#7C3AED' },
] as const;

export default function Navbar() {
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
                  }}
                >
                  {label}
                </a>
              );
            })}
          </div>

          <a href="#contact" className="nav-cta" aria-label="Entrar em contato">
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
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}
        role="dialog"
        aria-label="Menu de navegação"
      >
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
      </div>
    </>
  );
}
