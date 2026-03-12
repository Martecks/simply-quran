import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { searchSections, KEYWORDS } from '../data/searchIndex';
import './SearchPage.css';

/* ==========================================
   CATEGORY STYLES (same as SurahPage)
   ========================================== */

const CATEGORY_STYLES = {
    Story: { bg: 'rgba(212, 168, 50, 0.12)', color: '#b8901e' },
    Law: { bg: 'rgba(45, 138, 45, 0.12)', color: '#1a6b1a' },
    Supplication: { bg: 'rgba(154, 106, 64, 0.12)', color: '#6b5a48' },
    Guidance: { bg: 'rgba(15, 79, 15, 0.12)', color: '#0f4f0f' },
    Worship: { bg: 'rgba(180, 130, 60, 0.12)', color: '#a87a3c' },
    Warning: { bg: 'rgba(180, 60, 60, 0.12)', color: '#8b3a3a' },
    Promise: { bg: 'rgba(50, 160, 120, 0.12)', color: '#1a7a5a' },
    Dialogue: { bg: 'rgba(80, 100, 160, 0.12)', color: '#3a4f8b' },
    Parable: { bg: 'rgba(140, 100, 180, 0.12)', color: '#6a4a8b' },
    Theology: { bg: 'rgba(100, 140, 180, 0.12)', color: '#3a6a8b' },
};

/* ==========================================
   ACCORDION ITEM
   ========================================== */

function AccordionItem({ section, isOpen, onToggle, index }) {
    const cat = CATEGORY_STYLES[section.category] || CATEGORY_STYLES.Guidance;
    const contentRef = useRef(null);

    return (
        <div
            className={`sr-accordion__item ${isOpen ? 'sr-accordion__item--open' : ''}`}
            style={{
                '--cat-bg': cat.bg,
                '--cat-color': cat.color,
            }}
        >
            <button
                className="sr-accordion__trigger"
                onClick={onToggle}
                aria-expanded={isOpen}
            >
                <div className="sr-accordion__trigger-left">
                    <span className="sr-accordion__number">{String(index + 1).padStart(2, '0')}</span>
                    <div className="sr-accordion__trigger-text">
                        <h3 className="sr-accordion__title">{section.title}</h3>
                        <span className="sr-accordion__verse-range">Verses {section.verseRange}</span>
                    </div>
                </div>
                <div className="sr-accordion__trigger-right">
                    <span
                        className="sr-accordion__category"
                        style={{ background: cat.bg, color: cat.color }}
                    >
                        {section.category}
                    </span>
                    <span className="sr-accordion__chevron">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </span>
                </div>
            </button>
            <div
                className="sr-accordion__content-wrapper"
                ref={contentRef}
                style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight || 1000}px` : '0' }}
            >
                <div className="sr-accordion__content">
                    {section.subsections.map((sub, i) => (
                        <div key={i} className="sr-subsection">
                            <div className="sr-subsection__header">
                                <h4 className="sr-subsection__heading">{sub.heading}</h4>
                                <span className="sr-subsection__verses">Verses {sub.verseRange}</span>
                            </div>
                            <p className="sr-subsection__summary">{sub.summary}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ==========================================
   SURAH RESULT GROUP
   ========================================== */

function SurahResultGroup({ surahMeta, sections }) {
    const [openIndex, setOpenIndex] = useState(0);
    const slug = surahMeta.name.toLowerCase().replace(/['\s]/g, '-').replace(/--/g, '-');

    return (
        <div className="sr-group">
            <div className="sr-group__header">
                <div className="sr-group__info">
                    <span className="sr-group__number">{surahMeta.number}</span>
                    <div>
                        <Link to={`/surah-${slug}`} className="sr-group__name">
                            {surahMeta.name}
                            <span className="sr-group__meaning"> — "{surahMeta.meaning}"</span>
                        </Link>
                        <div className="sr-group__meta">
                            {surahMeta.type} · {surahMeta.verses} verses · Juz {surahMeta.juz}
                        </div>
                    </div>
                </div>
                <span className="sr-group__count">{sections.length} match{sections.length > 1 ? 'es' : ''}</span>
            </div>
            <div className="sr-accordion">
                {sections.map((section, i) => (
                    <AccordionItem
                        key={section.id}
                        section={section}
                        isOpen={openIndex === i}
                        onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                        index={i}
                    />
                ))}
            </div>
        </div>
    );
}

/* ==========================================
   SEARCH PAGE
   ========================================== */

export default function SearchPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const query = searchParams.get('q') || '';
    const [localQuery, setLocalQuery] = useState(query);
    const results = searchSections(query);

    useEffect(() => {
        setLocalQuery(query);
    }, [query]);

    function handleSearch(e) {
        e.preventDefault();
        if (localQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(localQuery.trim())}`);
        }
    }

    function handleKeywordClick(keyword) {
        navigate(`/search?q=${encodeURIComponent(keyword)}`);
    }

    // Suggested keywords filtered to exclude current query
    const suggestedKeywords = KEYWORDS.filter(
        (k) => k.label.toLowerCase() !== query.toLowerCase()
    ).slice(0, 12);

    return (
        <div className="search-page">
            {/* Hero */}
            <section className="sr-hero">
                <div className="sr-hero__pattern" />
                <div className="sr-hero__content">
                    <Link to="/" className="sr-back-link">← Back to Home</Link>
                    <h1 className="sr-hero__title">
                        {query ? (
                            <>Results for "<span className="sr-hero__query">{query}</span>"</>
                        ) : (
                            'Search the Qur\'an'
                        )}
                    </h1>
                    <form className="sr-search-form" onSubmit={handleSearch}>
                        <div className="sr-search-bar">
                            <svg className="sr-search-bar__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input
                                type="text"
                                value={localQuery}
                                onChange={(e) => setLocalQuery(e.target.value)}
                                placeholder="Search topics, prophets, themes..."
                                className="sr-search-bar__input"
                            />
                        </div>
                    </form>
                    {suggestedKeywords.length > 0 && (
                        <div className="sr-keywords">
                            {suggestedKeywords.map((k) => (
                                <button
                                    key={k.label}
                                    className="sr-keyword"
                                    onClick={() => handleKeywordClick(k.label)}
                                >
                                    {k.label}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Results */}
            <div className="sr-body">
                <div className="sr-container">
                    {query && results.length > 0 && (
                        <div className="sr-results-info">
                            Found {results.reduce((acc, r) => acc + r.sections.length, 0)} sections across {results.length} surah{results.length > 1 ? 's' : ''}
                        </div>
                    )}

                    {query && results.length === 0 && (
                        <div className="sr-empty">
                            <div className="sr-empty__icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>
                            <h2 className="sr-empty__title">No results for "{query}"</h2>
                            <p className="sr-empty__text">
                                Try a different keyword or explore one of the suggested topics above.
                                We're still adding more surahs — only 3 are searchable so far.
                            </p>
                        </div>
                    )}

                    {!query && (
                        <div className="sr-empty">
                            <h2 className="sr-empty__title">Start searching</h2>
                            <p className="sr-empty__text">
                                Type a keyword above or click any suggested topic to explore what the Qur'an says about it.
                            </p>
                        </div>
                    )}

                    {results.map((result) => (
                        <SurahResultGroup
                            key={result.surah.number}
                            surahMeta={result.surah}
                            sections={result.sections}
                        />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="sr-footer">
                <div className="sr-footer__arabic">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</div>
                <p className="sr-footer__text">
                    In the name of Allah, the Most Gracious, the Most Merciful.
                </p>
            </footer>
        </div>
    );
}
