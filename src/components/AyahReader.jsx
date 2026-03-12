import { useState, useEffect, useRef, useCallback } from 'react';
import './AyahReader.css';

/* ==========================================
   AYAH READER — Reusable Surah Reader Component
   
   Props:
   - surahData: Object with passages array from translation files
   - accentColor: Primary accent color (default: '#d4a832')
   
   Architecture:
   - Reader itself starts collapsed (toggle to open)
   - Inside, passages use an accordion pattern:
     • Short surahs (≤20 ayahs): all passages expanded by default
     • Long surahs (>20 ayahs): only first passage expanded
     • Only one passage open at a time for long surahs
   - This keeps the DOM light for surahs like Al-Baqarah (286 ayahs)
   ========================================== */

function PassageNav({ passages, activePassageId, onPassageClick }) {
    const navRef = useRef(null);

    useEffect(() => {
        if (!navRef.current) return;
        const activeBtn = navRef.current.querySelector('.ayah-nav__btn--active');
        if (activeBtn) {
            activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }, [activePassageId]);

    return (
        <nav className="ayah-nav" ref={navRef}>
            <div className="ayah-nav__track">
                {passages.map((passage) => (
                    <button
                        key={passage.id}
                        className={`ayah-nav__btn ${activePassageId === passage.id ? 'ayah-nav__btn--active' : ''}`}
                        onClick={() => onPassageClick(passage.id)}
                    >
                        <span className="ayah-nav__btn-range">{passage.verseRange}</span>
                        <span className="ayah-nav__btn-title">{passage.title}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}

function AyahCard({ ayah, surahId, isExpanded, onToggle }) {
    return (
        <div
            className={`ayah-card ${isExpanded ? 'ayah-card--expanded' : ''}`}
            onClick={ayah.insight ? onToggle : undefined}
            role={ayah.insight ? 'button' : undefined}
            tabIndex={ayah.insight ? 0 : undefined}
            onKeyDown={ayah.insight ? (e) => { if (e.key === 'Enter' || e.key === ' ') onToggle(); } : undefined}
        >
            {/* Ayah number badge */}
            <div className="ayah-card__number">
                <span>{surahId}:{ayah.number}</span>
            </div>

            {/* Arabic text */}
            <div className="ayah-card__arabic">{ayah.arabic}</div>

            {/* English translation */}
            <div className="ayah-card__translation">{ayah.translation}</div>

            {/* Expandable insight */}
            {ayah.insight && (
                <div className="ayah-card__insight-wrap">
                    <div className={`ayah-card__insight ${isExpanded ? 'ayah-card__insight--visible' : ''}`}>
                        <div className="ayah-card__insight-icon">💡</div>
                        <p>{ayah.insight}</p>
                    </div>
                    <div className="ayah-card__expand-hint">
                        {isExpanded ? 'Tap to collapse' : 'Tap for insight'}
                    </div>
                </div>
            )}
        </div>
    );
}

function PassageGroup({ passage, surahId, isPassageOpen, onPassageToggle, expandedAyah, onAyahToggle }) {
    const groupRef = useRef(null);

    return (
        <div
            className={`passage-group ${isPassageOpen ? 'passage-group--open' : ''}`}
            id={`passage-${passage.id}`}
            ref={groupRef}
        >
            {/* Clickable passage header — acts as accordion toggle */}
            <button
                className="passage-group__header"
                onClick={onPassageToggle}
                aria-expanded={isPassageOpen}
            >
                <div className="passage-group__header-top">
                    <div className="passage-group__label">
                        <span className="passage-group__range">Verses {passage.verseRange}</span>
                        <span className="passage-group__ayah-count">{passage.ayahs.length} ayahs</span>
                    </div>
                    <div className={`passage-group__chevron ${isPassageOpen ? 'passage-group__chevron--open' : ''}`}>
                        ▾
                    </div>
                </div>
                <h3 className="passage-group__title">{passage.title}</h3>
                <p className="passage-group__desc">{passage.description}</p>
            </button>

            {/* Ayahs — only rendered when passage is open */}
            {isPassageOpen && (
                <div className="passage-group__ayahs passage-group__ayahs--animated">
                    {passage.ayahs.map((ayah) => (
                        <AyahCard
                            key={ayah.number}
                            ayah={ayah}
                            surahId={surahId}
                            isExpanded={expandedAyah === ayah.number}
                            onToggle={() => onAyahToggle(ayah.number)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function AyahReader({ surahData, accentColor = '#d4a832' }) {
    const [isOpen, setIsOpen] = useState(false);

    // Count total ayahs to decide accordion behavior
    const totalLoadedAyahs = surahData.passages.reduce(
        (sum, p) => sum + p.ayahs.length, 0
    );
    const isShortSurah = totalLoadedAyahs <= 20;

    // For short surahs, all passages start open. For long surahs, only the first.
    const [openPassageId, setOpenPassageId] = useState(
        isShortSurah ? '__all__' : surahData.passages[0]?.id || ''
    );
    const [activePassageId, setActivePassageId] = useState(surahData.passages[0]?.id || '');
    const [expandedAyah, setExpandedAyah] = useState(null);
    const readerRef = useRef(null);

    const isPassageOpen = useCallback((passageId) => {
        if (isShortSurah) return true; // All open for short surahs
        return openPassageId === passageId;
    }, [isShortSurah, openPassageId]);

    const handlePassageToggle = useCallback((passageId) => {
        if (isShortSurah) return; // No toggling for short surahs — all stay open
        setOpenPassageId((prev) => (prev === passageId ? '' : passageId));
        setActivePassageId(passageId);
        setExpandedAyah(null); // Reset insight when switching passages

        // Scroll to the passage header
        setTimeout(() => {
            const el = document.getElementById(`passage-${passageId}`);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 50);
    }, [isShortSurah]);

    const handlePassageNavClick = useCallback((passageId) => {
        // Open the passage and scroll to it
        if (!isShortSurah) {
            setOpenPassageId(passageId);
        }
        setActivePassageId(passageId);
        setExpandedAyah(null);

        setTimeout(() => {
            const el = document.getElementById(`passage-${passageId}`);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 50);
    }, [isShortSurah]);

    const handleAyahToggle = useCallback((ayahNumber) => {
        setExpandedAyah((prev) => (prev === ayahNumber ? null : ayahNumber));
    }, []);

    const handleToggleReader = () => {
        setIsOpen((prev) => !prev);
        if (!isOpen) {
            setTimeout(() => {
                readerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    };

    // Update active passage in nav when scrolling (for short surahs where all are open)
    useEffect(() => {
        if (!isOpen || !readerRef.current || !isShortSurah) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

                if (visible.length > 0) {
                    const id = visible[0].target.id.replace('passage-', '');
                    setActivePassageId(id);
                }
            },
            { threshold: 0.2, rootMargin: '-80px 0px -60% 0px' }
        );

        const groups = readerRef.current.querySelectorAll('.passage-group');
        groups.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [isOpen, isShortSurah]);

    return (
        <section className="ayah-reader-section" style={{ '--reader-accent': accentColor }}>
            <div className="page-container">
                {/* CTA / Toggle Button */}
                <div className="ayah-reader__cta">
                    <div className="section-label">Read the Surah</div>
                    <h2 className="section-title">
                        {isOpen ? `Reading ${surahData.name}` : `Read ${surahData.name}`}
                    </h2>
                    <p className="section-subtitle">
                        {isOpen
                            ? `${totalLoadedAyahs} of ${surahData.totalAyahs} verses · 8th-grade English`
                            : 'Explore every ayah with clear, simple English translations. Grouped by theme so you always know the story.'
                        }
                    </p>
                    <button className="ayah-reader__toggle" onClick={handleToggleReader}>
                        <span className="ayah-reader__toggle-icon">📖</span>
                        <span>{isOpen ? 'Close Reader' : 'Open Reader'}</span>
                    </button>
                </div>

                {/* Reader Content */}
                {isOpen && (
                    <div className="ayah-reader__content" ref={readerRef}>
                        {/* Sticky passage navigator */}
                        <PassageNav
                            passages={surahData.passages}
                            activePassageId={activePassageId}
                            onPassageClick={handlePassageNavClick}
                        />

                        {/* Surah header */}
                        <div className="ayah-reader__surah-header">
                            <div className="ayah-reader__bismillah">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</div>
                            <div className="ayah-reader__surah-name">{surahData.arabicName}</div>
                            <div className="ayah-reader__surah-meta">
                                {surahData.name} · {surahData.meaning} · {surahData.totalAyahs} Verses · {surahData.type}
                            </div>
                        </div>

                        {/* Long surah hint */}
                        {!isShortSurah && (
                            <div className="ayah-reader__accordion-hint">
                                Tap any passage below to read its verses
                            </div>
                        )}

                        {/* Passage groups */}
                        {surahData.passages.map((passage) => (
                            <PassageGroup
                                key={passage.id}
                                passage={passage}
                                surahId={surahData.id}
                                isPassageOpen={isPassageOpen(passage.id)}
                                onPassageToggle={() => handlePassageToggle(passage.id)}
                                expandedAyah={expandedAyah}
                                onAyahToggle={handleAyahToggle}
                            />
                        ))}

                        {/* More verses indicator */}
                        {totalLoadedAyahs < surahData.totalAyahs && (
                            <div className="ayah-reader__more">
                                <div className="ayah-reader__more-icon">📜</div>
                                <p>
                                    Showing {totalLoadedAyahs} of {surahData.totalAyahs} verses.
                                    <br />
                                    More passages coming soon.
                                </p>
                            </div>
                        )}

                        {/* End decoration */}
                        <div className="ayah-reader__end">
                            <div className="ayah-reader__end-line" />
                            <div className="ayah-reader__end-diamond" />
                            <div className="ayah-reader__end-line" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
