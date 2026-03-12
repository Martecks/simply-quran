import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import JourneyPage from './pages/JourneyPage';
import DynamicSurahPage from './pages/DynamicSurahPage';
import SurahRouter from './pages/SurahRouter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/:surahSlug" element={<SurahRouter />} />
      </Routes>
    </Router>
  );
}

export default App;
