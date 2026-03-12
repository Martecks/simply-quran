import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SURAHS from '../data/surahs';
import './HomePage.css';

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
            { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
        );

        const elements = ref.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return ref;
}

/* ==========================================
   CHAPTER CARD COMPONENT
   ========================================== */

function ChapterCard({ chapter, index }) {
    const slug = chapter.name.toLowerCase().replace(/['\s]/g, '-').replace(/--/g, '-');
    const isReady = chapter.ready;

    const cardContent = (
        <div
            className={`chapter-card animate-on-scroll ${isReady ? 'chapter-card--ready' : ''}`}
            style={{ transitionDelay: `${(index % 12) * 0.04}s` }}
        >
            {/* Arabic top-right */}
            <div className="chapter-card__arabic">{chapter.arabic}</div>

            {/* Number + Name inline */}
            <div className="chapter-card__header">
                <div className="chapter-card__number">{chapter.number}</div>
                <h3 className="chapter-card__name">{chapter.name}</h3>
            </div>
            <p className="chapter-card__meaning">{chapter.meaning}</p>

            {/* Theme description */}
            <p className="chapter-card__theme">{chapter.theme}</p>

            {/* Footer row: verses + status */}
            <div className="chapter-card__footer">
                <span className="chapter-card__verses">{chapter.verses} verses</span>
                {isReady ? (
                    <span className="chapter-card__status chapter-card__status--ready">
                        Read Now →
                    </span>
                ) : (
                    <span className="chapter-card__status chapter-card__status--soon">
                        Coming Soon
                    </span>
                )}
            </div>
        </div>
    );

    return (
        <Link
            to={`/surah-${slug}`}
            className={`chapter-card__link ${!isReady ? 'chapter-card__link--disabled' : ''}`}
        >
            {cardContent}
        </Link>
    );
}

/* ==========================================
   HOMEPAGE COMPONENT
   ========================================== */

export default function HomePage() {
    const gridRef = useScrollAnimation();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    function handleSearch(e) {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    }

    return (
        <div className="home">
            {/* ===== HERO ===== */}
            <section className="home-hero">
                <div className="home-hero__pattern" />
                <div className="home-hero__content">
                    <div className="home-hero__logo">
                        <img
                            src="/logo.svg"
                            alt="Simply Quran"
                            className="home-hero__logo-img"
                        />
                    </div>
                    <h1 className="home-hero__title">
                        Simply
                        <span className="home-hero__title-accent"> Quran</span>
                    </h1>
                    <p className="home-hero__subtitle">
                        Read, skim, jump, or dive deep into any chapter.
                    </p>
                    <p className="home-hero__intro">
                        The final revelation, explained through thematic summaries and historical context. 
                        Discover the core message of every chapter, simplified for everyone.
                    </p>
                    <div className="home-hero__actions">
                        <button 
                            onClick={() => {
                                const gridEl = document.querySelector('.home-search-section');
                                if (gridEl) gridEl.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="home-hero__cta home-hero__cta--outline"
                        >
                            Scroll to All Chapters ↓
                        </button>
                        <Link to="/journey" className="home-hero__cta home-hero__cta--primary">
                            Explore Timeline of Revelations →
                        </Link>
                    </div>

                </div>
            </section>

            {/* ===== SEARCH SECTION ===== */}
            <section className="home-search-section">
                <div className="home-search-container">
                    <form className="home-search-form" onSubmit={handleSearch}>
                        <div className="home-search-bar">
                            <svg className="home-search-bar__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search topics, prophets, themes..."
                                className="home-search-bar__input"
                            />
                        </div>
                    </form>
                </div>
            </section>

            {/* ===== CHAPTER GRID ===== */}
            <section className="home-grid-section" ref={gridRef}>
                <div className="home-body">
                    <div className="home-container">
                        <div className="chapter-grid">
                            {SURAHS.map((chapter, i) => (
                                <ChapterCard key={chapter.number} chapter={chapter} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="home-footer">
                <div className="home-footer__arabic">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</div>
                <p className="home-footer__text">
                    In the name of God, the Most Gracious, the Most Merciful.
                </p>
                <p className="home-footer__credit">
                    Simply Quran. The Quran, explained for everyone.
                </p>
            </footer>
        </div>
    );
}
