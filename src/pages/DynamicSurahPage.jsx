import { useParams } from 'react-router-dom';
import { getSurahBySlug } from '../data/surahRegistry';
import SurahPage from './SurahPage';
import ComingSoon from './ComingSoon';

/**
 * Dynamic wrapper that resolves a surah by its URL slug
 * and renders the shared SurahPage component.
 * Falls back to ComingSoon if the surah data doesn't exist yet.
 */
export default function DynamicSurahPage() {
    const { slug } = useParams();
    const data = getSurahBySlug(slug);

    if (!data) {
        return <ComingSoon />;
    }

    return <SurahPage data={data} />;
}
