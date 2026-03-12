import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SurahPage.css';

/* ==========================================
   INTERSECTION OBSERVER HOOK
   ========================================== */

function useScrollAnimation() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = ref.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return ref;
}

/* ==========================================
   CATEGORY CONFIG
   ========================================== */

const CATEGORY_STYLES = {
    /* ── New categories (Content Guide v2) ── */
    Beliefs: { bg: 'rgba(30, 80, 160, 0.12)', color: '#1e4fa0', accent: 'rgba(30, 80, 160, 0.06)' },
    Stories: { bg: 'rgba(200, 150, 50, 0.12)', color: '#a87a1e', accent: 'rgba(200, 150, 50, 0.06)' },
    Rules: { bg: 'rgba(22, 120, 60, 0.12)', color: '#16783c', accent: 'rgba(22, 120, 60, 0.06)' },
    Worship: { bg: 'rgba(180, 140, 40, 0.12)', color: '#9a7a1e', accent: 'rgba(180, 140, 40, 0.06)' },
    Character: { bg: 'rgba(30, 140, 130, 0.12)', color: '#1a8a80', accent: 'rgba(30, 140, 130, 0.06)' },
    Warning: { bg: 'rgba(170, 50, 50, 0.12)', color: '#9a2e2e', accent: 'rgba(170, 50, 50, 0.06)' },
    'People of the Book': { bg: 'rgba(100, 60, 150, 0.12)', color: '#6a3c96', accent: 'rgba(100, 60, 150, 0.06)' },

    /* ── Legacy categories (surahs not yet updated) ── */
    Story: { bg: 'rgba(200, 150, 50, 0.12)', color: '#a87a1e', accent: 'rgba(200, 150, 50, 0.06)' },
    Law: { bg: 'rgba(22, 120, 60, 0.12)', color: '#16783c', accent: 'rgba(22, 120, 60, 0.06)' },
    Supplication: { bg: 'rgba(180, 140, 40, 0.12)', color: '#9a7a1e', accent: 'rgba(180, 140, 40, 0.06)' },
    Guidance: { bg: 'rgba(30, 140, 130, 0.12)', color: '#1a8a80', accent: 'rgba(30, 140, 130, 0.06)' },
    Promise: { bg: 'rgba(50, 160, 120, 0.12)', color: '#1a7a5a', accent: 'rgba(50, 160, 120, 0.06)' },
    Dialogue: { bg: 'rgba(100, 60, 150, 0.12)', color: '#6a3c96', accent: 'rgba(100, 60, 150, 0.06)' },
    Parable: { bg: 'rgba(200, 150, 50, 0.12)', color: '#a87a1e', accent: 'rgba(200, 150, 50, 0.06)' },
    Theology: { bg: 'rgba(30, 80, 160, 0.12)', color: '#1e4fa0', accent: 'rgba(30, 80, 160, 0.06)' },
};

/* ==========================================
   MONOTONE SVG ICONS
   ========================================== */

const FACT_ICONS = {
    conversation: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        </svg>
    ),
    repeat: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 014-4h14" />
            <polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 01-4 4H3" />
        </svg>
    ),
    crown: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 20h20M4 20l2-14 4 5 2-8 2 8 4-5 2 14" />
        </svg>
    ),
    healing: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v8M8 12h8" />
        </svg>
    ),
    scroll: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
        </svg>
    ),
    forbidden: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
    ),
    shield: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
    ),
    star: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    ),
    cloud: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
        </svg>
    ),
    ruler: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="10" rx="2" /><line x1="6" y1="7" x2="6" y2="12" />
            <line x1="10" y1="7" x2="10" y2="12" /><line x1="14" y1="7" x2="14" y2="12" /><line x1="18" y1="7" x2="18" y2="12" />
        </svg>
    ),
    moon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
    ),
    book: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" /><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
        </svg>
    ),
    sword: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2L22 9.5 9.5 22 2 14.5z" /><path d="M2 22l5.5-5.5" /><path d="M16 8l-4 4" />
        </svg>
    ),
    cross: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><path d="M12 6v12M6 12h12" />
        </svg>
    ),
    handshake: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0A5.4 5.4 0 003.58 12l8.42 8.42 8.42-8.42a5.4 5.4 0 000-7.42z" />
        </svg>
    ),
    link: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
        </svg>
    ),
    sunrise: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 18a5 5 0 00-10 0" /><line x1="12" y1="2" x2="12" y2="9" />
            <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" /><line x1="1" y1="18" x2="3" y2="18" />
            <line x1="21" y1="18" x2="23" y2="18" /><line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
            <line x1="23" y1="22" x2="1" y2="22" /><polyline points="8 6 12 2 16 6" />
        </svg>
    ),
};

/* ==========================================
   CONTEXT MODAL
   ========================================== */

function ContextModal({ context, onClose }) {
    useEffect(() => {
        const handleEscape = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    if (!context) return null;

    return (
        <div className="sp-modal-backdrop" onClick={onClose}>
            <div className="sp-modal" onClick={(e) => e.stopPropagation()}>
                <button className="sp-modal__close" onClick={onClose} aria-label="Close">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
                <div className="sp-modal__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                </div>
                <h3 className="sp-modal__title">{context.title}</h3>
                <div className="sp-modal__content">
                    {context.content.split('\n').filter(p => p.trim()).map((paragraph, i) => (
                        <p key={i} style={{ marginBottom: i === context.content.split('\n').filter(p => p.trim()).length - 1 ? 0 : '1rem' }}>
                            {paragraph.trim()}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ==========================================
   SUB-COMPONENTS
   ========================================== */

function Hero({ meta, intro }) {
    return (
        <section className="sp-hero">
            <div className="sp-hero__pattern" />
            <div className="sp-hero__content">
                <div className="sp-hero__top">
                    <div className="sp-hero__arabic">{meta.arabicName}</div>
                    <div className="sp-hero__info">
                        <h1 className="sp-hero__english">Surah {meta.name}</h1>
                        <div className="sp-hero__meaning">"{meta.meaning}"</div>
                        <div className="sp-hero__badge">
                            {meta.type} · {meta.verses} Verses · Juz {meta.juz}
                        </div>
                    </div>
                </div>
                <div className="sp-hero__summary">
                    <p>{intro[0]}</p>
                </div>
            </div>
        </section>
    );
}

function IntroSection({ intro }) {
    const containerRef = useScrollAnimation();
    return (
        <section className="sp-intro" ref={containerRef}>
            <div className="sp-container">
                <div className="sp-intro__content animate-on-scroll">
                    {intro.slice(1).map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AccordionItem({ section, isOpen, onToggle, index, onContextOpen }) {
    const cat = CATEGORY_STYLES[section.category] || CATEGORY_STYLES.Guidance;
    const contentRef = useRef(null);
    const itemRef = useRef(null);

    const handleToggle = () => {
        const wasOpen = isOpen;
        onToggle();

        if (wasOpen) {
            // Collapsing: scroll to the item immediately so user sees the closed header
            requestAnimationFrame(() => {
                if (itemRef.current) {
                    const top = itemRef.current.getBoundingClientRect().top + window.scrollY - 20;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            });
        } else {
            // Expanding: wait for the max-height transition to finish, then scroll
            const wrapper = contentRef.current;
            if (wrapper) {
                const onTransitionEnd = (e) => {
                    if (e.propertyName === 'max-height') {
                        wrapper.removeEventListener('transitionend', onTransitionEnd);
                        if (itemRef.current) {
                            const top = itemRef.current.getBoundingClientRect().top + window.scrollY - 20;
                            window.scrollTo({ top, behavior: 'smooth' });
                        }
                    }
                };
                wrapper.addEventListener('transitionend', onTransitionEnd);
                // Fallback in case transitionend doesn't fire
                setTimeout(() => {
                    wrapper.removeEventListener('transitionend', onTransitionEnd);
                    if (itemRef.current) {
                        const top = itemRef.current.getBoundingClientRect().top + window.scrollY - 20;
                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                }, 500);
            }
        }
    };

    return (
        <div
            ref={itemRef}
            className={`sp-accordion__item ${isOpen ? 'sp-accordion__item--open' : ''}`}
            style={{
                '--cat-bg': cat.bg,
                '--cat-color': cat.color,
                '--cat-accent': cat.accent,
            }}
        >
            <button
                className="sp-accordion__trigger"
                onClick={handleToggle}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${section.id}`}
            >
                <span className="sp-accordion__number">{String(index + 1).padStart(2, '0')}</span>
                <div className="sp-accordion__trigger-info">
                    <h2 className="sp-accordion__title">{section.title}</h2>
                    <span className="sp-accordion__verse-range">Verses {section.verseRange}</span>
                </div>
                <span
                    className="sp-accordion__category"
                    style={{ backgroundColor: cat.bg, color: cat.color }}
                >
                    {section.category}
                </span>
                <div className="sp-accordion__chevron">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </button>
            <div
                className="sp-accordion__content-wrapper"
                id={`accordion-content-${section.id}`}
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 2000}px` : '0px',
                }}
            >
                <div className="sp-accordion__content">
                    {section.subsections.map((sub, i) => (
                        <div className="sp-subsection" key={i}>
                            <div className="sp-subsection__header">
                                <h3 className="sp-subsection__heading">{sub.heading}</h3>
                                <span className="sp-subsection__verses">
                                    {section.subsections.length > 1 ? `Verses ${sub.verseRange}` : ''}
                                </span>
                            </div>
                            <p className="sp-subsection__summary">{sub.summary}</p>
                            {sub.faq && (
                                <button
                                    className="sp-faq-btn"
                                    onClick={() => onContextOpen(sub.faq)}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="16" x2="12" y2="12" />
                                        <line x1="12" y1="8" x2="12.01" y2="8" />
                                    </svg>
                                    <span>{sub.faq.title}</span>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function AccordionSection({ sections, onContextOpen }) {
    const [openIndex, setOpenIndex] = useState(-1);
    const containerRef = useScrollAnimation();

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="sp-accordion-section" ref={containerRef}>
            <div className="sp-container">
                <div className="sp-accordion-section__header animate-on-scroll">
                    <div className="section-label">What's Inside</div>
                    <h2 className="section-title">Chapter Breakdown</h2>
                    <p className="section-subtitle">
                        Tap any section to see what those verses are about, explained simply.
                    </p>
                </div>
                <div className="sp-accordion animate-on-scroll" style={{ transitionDelay: '0.15s' }}>
                    {sections.map((section, i) => (
                        <AccordionItem
                            key={section.id}
                            section={section}
                            index={i}
                            isOpen={openIndex === i}
                            onToggle={() => handleToggle(i)}
                            onContextOpen={onContextOpen}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function GeometricDivider() {
    return (
        <div className="sp-container">
            <div className="geometric-divider">
                <div className="line" />
                <div className="diamond" />
                <div className="line" />
            </div>
        </div>
    );
}

function FactsSection({ facts }) {
    const containerRef = useScrollAnimation();
    return (
        <section className="sp-facts" ref={containerRef}>
            <div className="sp-container">
                <div className="sp-facts__header animate-on-scroll">
                    <div className="section-label">Did You Know?</div>
                    <h2 className="section-title">Quick Facts</h2>
                </div>
                <div className="sp-facts__grid">
                    {facts.map((fact, i) => (
                        <div
                            className="sp-fact-card animate-on-scroll"
                            key={i}
                            style={{ transitionDelay: `${i * 0.08}s` }}
                        >
                            <div className="sp-fact-card__icon">
                                {FACT_ICONS[fact.icon] || FACT_ICONS.book}
                            </div>
                            <div className="sp-fact-card__body">
                                <h3 className="sp-fact-card__title">{fact.title}</h3>
                                <p className="sp-fact-card__desc">{fact.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Footer({ closingVerse }) {
    return (
        <footer className="sp-footer">
            <div className="sp-container">
                <div className="sp-footer__arabic">{closingVerse.arabic}</div>
                <p className="sp-footer__translation">{closingVerse.translation}</p>
                <p className="sp-footer__ref">{closingVerse.reference}</p>
            </div>
        </footer>
    );
}

/* ==========================================
   MAIN COMPONENT
   ========================================== */

export default function SurahPage({ data }) {
    const [activeContext, setActiveContext] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="sp-page">
            <Hero meta={data.meta} intro={data.intro} />
            <div className="sp-body">
                <IntroSection intro={data.intro} />
                <GeometricDivider />
                <AccordionSection sections={data.sections} onContextOpen={setActiveContext} />
                <GeometricDivider />
                <FactsSection facts={data.facts} />
            </div>
            <Footer closingVerse={data.closingVerse} />

            {/* Context popup modal */}
            {activeContext && (
                <ContextModal context={activeContext} onClose={() => setActiveContext(null)} />
            )}

            {/* Sticky back button */}
            <Link to="/" className="sp-back-fab" aria-label="Back to All Chapters">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                </svg>
                <span>All Chapters</span>
            </Link>
        </div>
    );
}
