import { Link, useParams } from 'react-router-dom';
import SURAHS from '../data/surahs';
import './ComingSoon.css';

export default function ComingSoon() {
    const { slug } = useParams();

    // Find the surah by slug
    const surah = SURAHS.find((s) => {
        const surahSlug = s.name.toLowerCase().replace(/['\s]/g, '-').replace(/--/g, '-');
        return surahSlug === slug;
    });

    if (!surah) {
        return (
            <div className="coming-soon">
                <div className="coming-soon__content">
                    <h1>Surah Not Found</h1>
                    <p>We couldn't find this surah.</p>
                    <Link to="/" className="coming-soon__back">← Back to all surahs</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="coming-soon">
            <div className="coming-soon__pattern" />
            <div className="coming-soon__content">
                <Link to="/" className="coming-soon__back-link">← All Surahs</Link>

                <div className="coming-soon__icon">{surah.icon}</div>
                <div className="coming-soon__arabic">{surah.arabic}</div>
                <h1 className="coming-soon__title">{surah.name}</h1>
                <p className="coming-soon__meaning">{surah.meaning}</p>

                <div className="coming-soon__meta">
                    <span className={`coming-soon__type coming-soon__type--${surah.type.toLowerCase()}`}>
                        {surah.type}
                    </span>
                    <span>{surah.verses} verses</span>
                    <span>Juz {surah.juz}</span>
                </div>

                <p className="coming-soon__theme">{surah.theme}</p>

                <div className="coming-soon__badge">
                    <span className="coming-soon__badge-dot" />
                    Visual overview coming soon
                </div>

                <Link to="/" className="coming-soon__cta">
                    ← Explore other surahs
                </Link>
            </div>
        </div>
    );
}
