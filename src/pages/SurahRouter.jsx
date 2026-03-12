import { useParams } from 'react-router-dom';
import { getSurahBySlug } from '../data/surahRegistry';
import SurahPage from './SurahPage';
import ComingSoon from './ComingSoon';

/**
 * SurahRouter — resolves URLs like /surah-al-fatiha
 * Strips the "surah-" prefix from the URL param and
 * looks up the remaining slug in the surahRegistry.
 */
export default function SurahRouter() {
    const { surahSlug } = useParams();

    // Strip "surah-" prefix if present to get the actual slug
    const slug = surahSlug?.startsWith('surah-')
        ? surahSlug.slice(6)
        : surahSlug;

    const data = getSurahBySlug(slug);

    if (!data) {
        return <ComingSoon />;
    }

    return <SurahPage data={data} />;
}
