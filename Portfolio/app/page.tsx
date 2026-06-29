'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

/* ═══════════════════════════════════════════════════════════════
   INLINE SVG ICONS
   ═══════════════════════════════════════════════════════════════ */

function IconHospital() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
      <line x1="9" y1="21" x2="9" y2="9" />
      <line x1="15" y1="21" x2="15" y2="9" />
      <line x1="12" y1="13" x2="12" y2="17" />
      <line x1="10" y1="15" x2="14" y2="15" />
    </svg>
  );
}

function IconDocument() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function IconHouse() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12 12 3l9 9" />
      <path d="M5 10v9a1 1 0 0 0 1 1h3v-5h6v5h3a1 1 0 0 0 1-1v-9" />
      <circle cx="12" cy="10" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconReport() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="16" y2="11" />
      <line x1="8" y1="15" x2="12" y2="15" />
    </svg>
  );
}

function IconPerson() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgba(255,255,255,0.3)"
      strokeWidth="1.2"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 4-10 7L2 4" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Fundo verde do WhatsApp */}
      <rect x="0.5" y="0.5" width="23" height="23" rx="5" fill="#25D366" />
      <rect x="0.5" y="0.5" width="23" height="23" rx="5" stroke="#1da851" strokeWidth="0.5" />
      {/* Ícone do telefone branco */}
      <path
        d="M17.4 14.8c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1-.2.3-.6.8-.8.9-.1.1-.3.1-.5 0-1-.5-1.8-1-3.1-2.5-.4-.5-.7-1-.8-1.5 0-.2 0-.3.1-.5.1-.1.2-.2.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2 0-.4-.1-.1-.5-1.2-.7-1.6-.2-.4-.4-.3-.5-.3h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2 0 1.2.9 2.3 1 2.5.1.2 1.7 2.7 4.2 3.8.6.2 1 .4 1.4.3.4-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3z"
        fill="#ffffff"
      />
    </svg>
  );
}

function IconLocation() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconArrowUp() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const compSectionRef = useRef<HTMLElement>(null);

  /* ── Moonwalk: fade-in ao descer, fade-out ao subir ── */
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Navbar shadow on scroll + active link tracking + scroll-to-top ── */
  useEffect(() => {
    const nav = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    const scrollTopBtn = document.getElementById('scroll-top-btn');

    const onScroll = () => {
      // Navbar shadow
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 10);
      }

      // Active link
      if (navLinks.length > 0 && sections.length > 0) {
        let current = '';
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop - 100;
          if (window.scrollY >= sectionTop) current = section.id;
        });
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          }
        });
      }

      // Scroll-to-top visibility
      if (scrollTopBtn) {
        if (window.scrollY > 400) {
          scrollTopBtn.classList.add('visible');
        } else {
          scrollTopBtn.classList.remove('visible');
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Stagger animation for competence pills (moonwalk-aware) ── */
  useEffect(() => {
    const compSection = compSectionRef.current;
    if (!compSection) return;

    const animatePillsIn = () => {
      const pills = compSection.querySelectorAll('.comp-pill');
      pills.forEach((pill, i) => {
        (pill as HTMLElement).style.transitionDelay = `${i * 60}ms`;
        (pill as HTMLElement).style.opacity = '1';
        (pill as HTMLElement).style.transform = 'translateY(0)';
      });
    };

    const resetPills = () => {
      const pills = compSection.querySelectorAll('.comp-pill');
      pills.forEach((pill) => {
        (pill as HTMLElement).style.transitionDelay = '0ms';
        (pill as HTMLElement).style.opacity = '0';
        (pill as HTMLElement).style.transform = 'translateY(10px)';
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animatePillsIn();
          } else {
            resetPills();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(compSection);
    return () => observer.disconnect();
  }, []);

  /* ── Close mobile drawer on link click ── */
  const handleMobileLinkClick = () => {
    setMobileOpen(false);
  };

  /* ── Scroll to top ── */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ═══════════════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════════════ */

  return (
    <>
      {/* ══════════ NAVBAR ══════════ */}
      <nav className="navbar" role="navigation" aria-label="Navegação principal">
        <div className="container">
          <a href="#" className="nav-logo" aria-label="Eude Ramos Silva — Início">
            <Image
              src="/logo-er.png"
              alt="Logo Eude Ramos"
              width={32}
              height={32}
              className="nav-logo-icon"
            />
            <span className="nav-logo-text">Eude Ramos · Assistente Social</span>
          </a>

          <div className="nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#experiencia">Experiência</a>
            <a href="#areas">Áreas de Atuação</a>
            <a href="#formacao">Formação</a>
            <a href="#contato">Contato</a>
          </div>

          <a href="#contato" className="nav-cta" aria-label="Entrar em contato">
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
        <a href="#sobre" onClick={handleMobileLinkClick}>
          Sobre
        </a>
        <a href="#experiencia" onClick={handleMobileLinkClick}>
          Experiência
        </a>
        <a href="#areas" onClick={handleMobileLinkClick}>
          Áreas de Atuação
        </a>
        <a href="#formacao" onClick={handleMobileLinkClick}>
          Formação
        </a>
        <a href="#competencias" onClick={handleMobileLinkClick}>
          Competências
        </a>
        <a href="#contato" onClick={handleMobileLinkClick}>
          Contato
        </a>
      </div>

      {/* ══════════ HERO ══════════ */}
      <header className="hero" id="inicio">
        <div className="hero-left">
          {/* Eyebrow */}
          <div className="hero-eyebrow">
            <Image
              src="/logo-er.png"
              alt="Logo Eude Ramos"
              width={28}
              height={28}
              className="hero-eyebrow-icon"
            />
            <span className="hero-eyebrow-text">
              <span className="hero-eyebrow-name">Eude Ramos Silva</span>
              <span className="hero-eyebrow-sub">
                Assistente Social · CRESS-BA
              </span>
            </span>
          </div>

          {/* Heading */}
          <div className="hero-heading">
            <h1>
              Referência em Serviço Social
              <br />
              <strong>na Área da Saúde</strong>
            </h1>
          </div>

          {/* Hero Card */}
          <div className="hero-card">
            <Image
              src="/logo-er.png"
              alt="Logo Eude Ramos"
              width={44}
              height={44}
              className="hero-card-avatar"
            />
            <span className="hero-card-info">
              <span className="hero-card-name">Eude Ramos Silva</span>
              <span className="hero-card-title">
                Especialista em Serviço Social na Saúde
              </span>
              <span className="hero-card-sub">
                Experiência hospitalar e sociojurídica
              </span>
            </span>
          </div>

          {/* Meta Items */}
          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="hero-meta-icon green">
                <IconLocation />
              </span>
              <span className="hero-meta-text">
                <span className="hero-meta-label green">Localização</span>
                <span className="hero-meta-value">Salvador – BA</span>
              </span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-icon blue">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2E86C1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              <span className="hero-meta-text">
                <span className="hero-meta-label blue">Atuação</span>
                <span className="hero-meta-value">Saúde & Sociojurídico</span>
              </span>
            </div>
            <div className="hero-meta-item">
              <span className="hero-meta-icon gold">
                <IconMail />
              </span>
              <span className="hero-meta-text">
                <span className="hero-meta-label gold">E-mail</span>
                <span className="hero-meta-value">
                  ramosnota10@hotmail.com
                </span>
              </span>
            </div>
          </div>

          {/* Hero CTA */}
          <a href="#contato" className="hero-btn" aria-label="Quero entrar em contato">
            Quero Entrar em Contato
          </a>
        </div>

        {/* Hero Right — Foto real da Eude */}
        <div className="hero-right">
          <div className="hero-photo-wrapper">
            <Image
              src="/foto-eude.png"
              alt="Foto de Eude Ramos Silva — Assistente Social"
              width={260}
              height={380}
              className="hero-photo"
              priority
              quality={90}
            />
          </div>
        </div>
      </header>

      {/* ══════════ SEÇÃO ÁREAS DE ATUAÇÃO ══════════ */}
      <section id="areas" className="areas-section fade-section">
        <div className="section-padding">
          <div className="container" style={{ padding: 0 }}>
            <h2 className="section-title">
              Em quais situações posso ajudar você?
            </h2>
            <p className="section-sub">
              Se você ou um familiar estão passando por alguma dessas situações,
              posso orientar sobre os direitos, benefícios e encaminhamentos
              adequados.
            </p>

            <div className="indication-grid">
              {/* Card 1 — Dourado */}
              <div
                className="area-card"
                style={{ '--accent-border': '#C5960C' } as React.CSSProperties}
              >
                <div className="area-card-icon" style={{ color: '#C5960C' }}>
                  <IconHospital />
                </div>
                <div className="area-card-title">Internação hospitalar</div>
                <p className="area-card-desc">
                  Orientação sobre altas, transferências e direitos do paciente
                </p>
              </div>

              {/* Card 2 — Laranja */}
              <div
                className="area-card"
                style={{ '--accent-border': '#E67E22' } as React.CSSProperties}
              >
                <div className="area-card-icon" style={{ color: '#E67E22' }}>
                  <IconDocument />
                </div>
                <div className="area-card-title">
                  Benefícios previdenciários
                </div>
                <p className="area-card-desc">
                  Auxílio-doença, DPVAT, BPC e outros direitos sociais
                </p>
              </div>

              {/* Card 3 — Verde */}
              <div
                className="area-card"
                style={{ '--accent-border': '#1A6E2E' } as React.CSSProperties}
              >
                <div className="area-card-icon" style={{ color: '#1A6E2E' }}>
                  <IconHouse />
                </div>
                <div className="area-card-title">Vulnerabilidade social</div>
                <p className="area-card-desc">
                  Encaminhamento à rede de proteção e assistência social
                </p>
              </div>

              {/* Card 4 — Azul */}
              <div
                className="area-card"
                style={{ '--accent-border': '#2E86C1' } as React.CSSProperties}
              >
                <div className="area-card-icon" style={{ color: '#2E86C1' }}>
                  <IconReport />
                </div>
                <div className="area-card-title">Pareceres e relatórios</div>
                <p className="area-card-desc">
                  Elaboração de documentação social para fins legais e médicos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SEÇÃO SOBRE MIM ══════════ */}
      <section id="sobre" className="sobre-section fade-section">
        <div className="section-padding">
          <div className="container" style={{ padding: 0 }}>
            <h2 className="section-title">Sobre Mim</h2>
            <div className="sobre-grid" style={{ marginTop: 20 }}>
              {/* Left: Professional Profile */}
              <div className="sobre-text">
                <p>
                  Assistente Social com experiência em contextos hospitalares e
                  sociojurídicos, atuando no acolhimento, orientação e
                  encaminhamento de pacientes, familiares e pessoas privadas de
                  liberdade. Comprometida com a ética profissional, os direitos
                  humanos e a garantia do acesso às políticas públicas.
                  Especialista em Serviço Social na Saúde, com sólida capacidade
                  de trabalho em equipe multidisciplinar, escuta ativa e
                  elaboração de relatórios e pareceres sociais.
                </p>
              </div>

              {/* Right: Quick Highlights */}
              <div className="sobre-stats">
                <div className="sobre-stat-card">
                  <span className="sobre-stat-emoji">🎓</span>
                  <span className="sobre-stat-info">
                    <span className="sobre-stat-label">Bacharel</span>
                    <span className="sobre-stat-sub">Serviço Social</span>
                  </span>
                </div>
                <div className="sobre-stat-card">
                  <span className="sobre-stat-emoji">🏥</span>
                  <span className="sobre-stat-info">
                    <span className="sobre-stat-label">Especialista</span>
                    <span className="sobre-stat-sub">
                      Serviço Social na Saúde
                    </span>
                  </span>
                </div>
                <div className="sobre-stat-card">
                  <span className="sobre-stat-emoji">⚖️</span>
                  <span className="sobre-stat-info">
                    <span className="sobre-stat-label">Experiência</span>
                    <span className="sobre-stat-sub">
                      Hospitalar + Prisional
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SEÇÃO EXPERIÊNCIA PROFISSIONAL ══════════ */}
      <section id="experiencia" className="experiencia-section fade-section">
        <div className="section-padding">
          <div className="container" style={{ padding: 0 }}>
            <h2 className="section-title">Experiência Profissional</h2>
            <p className="section-sub">
              Atuação em dois contextos distintos — saúde hospitalar e sistema
              sociojurídico — com foco em direitos e proteção social.
            </p>

            <div className="exp-cards">
              {/* Card HGE */}
              <article className="exp-card">
                <span className="exp-tag blue">Saúde Hospitalar</span>
                <div className="exp-card-org">
                  Hospital Geral do Estado (HGE)
                </div>
                <div className="exp-card-role">
                  Serviço Social · Estágio Supervisionado · Salvador, BA
                </div>
                <ul className="exp-card-bullets">
                  <li>
                    Acolhimento e orientação a pacientes e familiares em
                    enfermarias
                  </li>
                  <li>
                    Orientação sobre altas, transferências e benefícios
                    previdenciários
                  </li>
                  <li>
                    Anamnese social e acompanhamento de vulnerabilidades
                  </li>
                  <li>
                    Registro em prontuário e participação em equipes
                    multidisciplinares
                  </li>
                  <li>
                    Apoio no protocolo de óbito e suporte emocional a familiares
                    enlutados
                  </li>
                  <li>
                    Encaminhamento à rede socioassistencial da comunidade
                  </li>
                </ul>
              </article>

              {/* Card PLB */}
              <article className="exp-card">
                <span className="exp-tag pink">Sociojurídico</span>
                <div className="exp-card-org">
                  Penitenciária Lemos Brito (PLB)
                </div>
                <div className="exp-card-role">
                  Serviço Social · Estágio Supervisionado · Salvador, BA
                </div>
                <ul className="exp-card-bullets">
                  <li>
                    Entrevistas de admissão e avaliação de benefício legal e
                    prisão domiciliar
                  </li>
                  <li>
                    Análise de pedidos de transferência com elaboração de
                    parecer social
                  </li>
                  <li>
                    Elaboração de pareceres sociais com embasamento ético-legal
                    (CFESS)
                  </li>
                  <li>
                    Orientação sobre acesso a benefícios sociais e
                    previdenciários
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SEÇÃO FORMAÇÃO ══════════ */}
      <section id="formacao" className="formacao-section fade-section">
        <div className="section-padding">
          <div className="container" style={{ padding: 0 }}>
            <h2 className="section-title">Formação</h2>

            <div className="formacao-grid" style={{ marginTop: 20 }}>
              {/* Bloco 1: Formação Acadêmica + Complementar */}
              <div>
                <div className="formacao-block-title">
                  Formação Acadêmica & Complementar
                </div>

                <div className="formacao-item">
                  <span className="formacao-icon">🎓</span>
                  <span className="formacao-info">
                    <span className="formacao-name">
                      Especialização em Serviço Social na Saúde
                    </span>
                    <span className="formacao-org">
                      Faculdade CEPEX DH – Unibahia · Salvador, BA
                    </span>
                  </span>
                </div>

                <div className="formacao-item">
                  <span className="formacao-icon">🎓</span>
                  <span className="formacao-info">
                    <span className="formacao-name">
                      Bacharel em Serviço Social
                    </span>
                    <span className="formacao-org">
                      Faculdade Dom Pedro II · Salvador, BA
                    </span>
                  </span>
                </div>

                <div className="formacao-item">
                  <span className="formacao-icon">📚</span>
                  <span className="formacao-info">
                    <span className="formacao-name">
                      Elaboração de Projetos Sociais (16h)
                    </span>
                    <span className="formacao-org">
                      Centro Universitário Estácio da Bahia · Jan–Fev/2012
                    </span>
                  </span>
                </div>
              </div>

              {/* Bloco 2: Eventos e Seminários */}
              <div>
                <div className="formacao-block-title">
                  Eventos e Seminários
                </div>

                <button
                  className="events-toggle"
                  onClick={() => setEventsOpen(!eventsOpen)}
                  aria-expanded={eventsOpen}
                  aria-controls="events-list"
                >
                  {eventsOpen ? 'Ver menos ▲' : 'Ver todos os eventos ▼'}
                  <IconChevronDown
                  /* inline SVG already */
                  />
                </button>

                <div
                  id="events-list"
                  className={`events-list ${eventsOpen ? 'open' : ''}`}
                >
                  <div className="event-item">
                    <span className="event-item-icon">
                      <IconCalendar />
                    </span>
                    <span className="event-item-text">
                      XI Seminário do Serviço Social do Complexo HUPES – &ldquo;Ética e Serviço Social nas Relações Multiprofissionais&rdquo;
                    </span>
                    <span className="event-item-hours">8h · Mai/2013</span>
                  </div>

                  <div className="event-item">
                    <span className="event-item-icon">
                      <IconCalendar />
                    </span>
                    <span className="event-item-text">
                      Seminário &ldquo;O Fazer e a Formação Profissional na Perspectiva da Transversalidade&rdquo;
                    </span>
                    <span className="event-item-hours">12h · Out/2013</span>
                  </div>

                  <div className="event-item">
                    <span className="event-item-icon">
                      <IconCalendar />
                    </span>
                    <span className="event-item-text">
                      XXXII Encontro Regional de Estudantes de Serviço Social
                    </span>
                    <span className="event-item-hours">28h · Abr/2010</span>
                  </div>

                  <div className="event-item">
                    <span className="event-item-icon">
                      <IconCalendar />
                    </span>
                    <span className="event-item-text">
                      Seminário Dia do Assistente Social – &ldquo;Presença do Serviço Social nas Escolas Públicas&rdquo;
                    </span>
                    <span className="event-item-hours">5h · Mai/2010</span>
                  </div>

                  <div className="event-item">
                    <span className="event-item-icon">
                      <IconCalendar />
                    </span>
                    <span className="event-item-text">
                      VI Encontro Local de Estudantes de Serviço Social
                    </span>
                    <span className="event-item-hours">16h · Nov/2010</span>
                  </div>

                  <div className="event-item">
                    <span className="event-item-icon">
                      <IconCalendar />
                    </span>
                    <span className="event-item-text">
                      Seminário Gênero e Etnia
                    </span>
                    <span className="event-item-hours">4h · Mai/2010</span>
                  </div>

                  <div className="event-item">
                    <span className="event-item-icon">
                      <IconCalendar />
                    </span>
                    <span className="event-item-text">
                      Seminário Mulher Viver + e Melhor
                    </span>
                    <span className="event-item-hours">6h · Mar/2010</span>
                  </div>

                  <div className="event-item">
                    <span className="event-item-icon">
                      <IconCalendar />
                    </span>
                    <span className="event-item-text">
                      Seminário Gênero e Etnia: Uma Reflexão sobre a Violência
                    </span>
                    <span className="event-item-hours">4h · Nov/2009</span>
                  </div>

                  <div className="event-item">
                    <span className="event-item-icon">
                      <IconCalendar />
                    </span>
                    <span className="event-item-text">
                      Audiência Pública – Políticas Sociais na Formação e no Exercício Profissional
                    </span>
                    <span className="event-item-hours">3h · Mai/2009</span>
                  </div>

                  <div className="event-item">
                    <span className="event-item-icon">
                      <IconCalendar />
                    </span>
                    <span className="event-item-text">
                      Seminário A Inserção do Estudante de Serviço Social na Prática Profissional
                    </span>
                    <span className="event-item-hours">5h · Mai/2009</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SEÇÃO COMPETÊNCIAS ══════════ */}
      <section
        id="competencias"
        className="competencias-section fade-section"
        ref={compSectionRef}
      >
        <div className="section-padding">
          <div className="container" style={{ padding: 0 }}>
            <h2 className="section-title">Competências e Habilidades</h2>

            <div className="comp-grid" style={{ marginTop: 20 }}>
              <div
                className="comp-pill"
                style={{ opacity: 0, transform: 'translateY(10px)' }}
              >
                <span className="comp-pill-emoji">🤝</span>
                Atendimento e acolhimento humanizado
              </div>

              <div
                className="comp-pill"
                style={{ opacity: 0, transform: 'translateY(10px)' }}
              >
                <span className="comp-pill-emoji">📋</span>
                Elaboração de pareceres e relatórios sociais
              </div>

              <div
                className="comp-pill"
                style={{ opacity: 0, transform: 'translateY(10px)' }}
              >
                <span className="comp-pill-emoji">🏥</span>
                Visitas domiciliares e hospitalares
              </div>

              <div
                className="comp-pill"
                style={{ opacity: 0, transform: 'translateY(10px)' }}
              >
                <span className="comp-pill-emoji">👥</span>
                Trabalho em equipe multidisciplinar
              </div>

              <div
                className="comp-pill"
                style={{ opacity: 0, transform: 'translateY(10px)' }}
              >
                <span className="comp-pill-emoji">⚖️</span>
                Orientação jurídica e previdenciária
              </div>

              <div
                className="comp-pill"
                style={{ opacity: 0, transform: 'translateY(10px)' }}
              >
                <span className="comp-pill-emoji">📁</span>
                Gestão de prontuários e evoluções sociais
              </div>

              <div
                className="comp-pill"
                style={{ opacity: 0, transform: 'translateY(10px)' }}
              >
                <span className="comp-pill-emoji">🌐</span>
                Encaminhamento à rede socioassistencial
              </div>

              <div
                className="comp-pill"
                style={{ opacity: 0, transform: 'translateY(10px)' }}
              >
                <span className="comp-pill-emoji">📊</span>
                Planejamento e elaboração de projetos sociais
              </div>

              <div
                className="comp-pill"
                style={{ opacity: 0, transform: 'translateY(10px)' }}
              >
                <span className="comp-pill-emoji">👂</span>
                Escuta ativa e abordagem ética
              </div>

              <div
                className="comp-pill"
                style={{ opacity: 0, transform: 'translateY(10px)' }}
              >
                <span className="comp-pill-emoji">💻</span>
                Informática (Pacote Office / sistemas)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SEÇÃO CTA — PRECISA DE ORIENTAÇÃO? ══════════ */}
      <section id="contato" className="contato-section fade-section">
        <div className="section-padding">
          <div className="container" style={{ padding: 0 }}>
            <div className="contato-cta">
              <div className="contato-cta-left">
                <div className="contato-cta-title">
                  Precisa de orientação em Serviço Social?
                </div>
                <p className="contato-cta-sub">
                  Entre em contato para tirar dúvidas sobre direitos, benefícios
                  e encaminhamentos sociais.
                </p>
              </div>

              <a
                href="https://wa.me/5571986511560"
                className="contato-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entrar em contato pelo WhatsApp"
              >
                Entrar em Contato
              </a>
            </div>

            {/* Contact Cards */}
            <div className="contato-cards">
              <div className="contato-card">
                <a href="mailto:ramosnota10@hotmail.com" aria-label="Enviar e-mail para Eude">
                  <span className="contato-card-icon">
                    <IconMail />
                  </span>
                  <span className="contato-card-label">E-mail</span>
                  <span className="contato-card-value">
                    ramosnota10@hotmail.com
                  </span>
                </a>
              </div>

              <div className="contato-card">
                <a
                  href="https://wa.me/5571986511560"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Conversar pelo WhatsApp"
                >
                  <span className="contato-card-icon">
                    <IconWhatsApp />
                  </span>
                  <span className="contato-card-label">WhatsApp</span>
                  <span className="contato-card-value">(71) 98651-1560</span>
                </a>
              </div>

              <div className="contato-card">
                <span className="contato-card-icon" style={{ display: 'block', margin: '0 auto' }}>
                  <IconLocation />
                </span>
                <span className="contato-card-label" style={{ display: 'block', textAlign: 'center' }}>
                  Localização
                </span>
                <span className="contato-card-value" style={{ display: 'block', textAlign: 'center' }}>
                  Salvador – BA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ SOCIAL CTA — "VAMOS CONVERSAR" ══════════ */}
      <section className="social-cta fade-section">
        <div className="container" style={{ padding: 0 }}>
          <div className="social-cta-title">Vamos Conversar!</div>
          <p className="social-cta-sub">
            Disponível para orientações e acompanhamento social
          </p>

          <div className="social-icons">
            {/* Email */}
            <a
              href="mailto:ramosnota10@hotmail.com"
              className="social-icon-link"
              aria-label="Enviar e-mail"
            >
              <span className="social-icon-circle">
                <IconMail />
              </span>
              <span className="social-icon-label">E-mail</span>
              <span className="social-icon-value">
                ramosnota10@hotmail.com
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5571986511560"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="WhatsApp"
            >
              <span className="social-icon-circle">
                <IconWhatsApp />
              </span>
              <span className="social-icon-label">WhatsApp</span>
              <span className="social-icon-value">(71) 98651-1560</span>
            </a>

            {/* Location */}
            <div className="social-icon-link">
              <span className="social-icon-circle">
                <IconLocation />
              </span>
              <span className="social-icon-label">Localização</span>
              <span className="social-icon-value">Salvador – BA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="footer" role="contentinfo">
        <div className="footer-left">
          © 2025 Eude Ramos Silva · Assistente Social · CRESS-BA
        </div>
        <div className="footer-right">
          <span>ramosnota10@hotmail.com</span>
          <span>·</span>
          <span>(71) 98651-1560</span>
          <span>·</span>
          <span>Salvador, BA</span>
        </div>
      </footer>

      {/* ══════════ SCROLL TO TOP ══════════ */}
      <button
        id="scroll-top-btn"
        className="scroll-top"
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        <IconArrowUp />
      </button>
    </>
  );
}
