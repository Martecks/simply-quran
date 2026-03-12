import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, MapPin, Sparkles, BookOpen } from 'lucide-react';
import { REVELATION_ERAS } from '../data/chronologicalData';
import './JourneyPage.css';

/**
 * Map a surah string like "96 (Al-Alaq)" to its internal route "/surah-al-alaq"
 */
const surahToSlug = (surahStr) => {
  const match = surahStr.match(/\(([^)]+)\)/);
  if (!match) return null;
  const name = match[1];
  return `/surah-${name.toLowerCase().replace(/['\\s]/g, '-').replace(/--/g, '-')}`;
};

const SceneBackground = ({ era, scrollProgress, index }) => {
  const totalEras = REVELATION_ERAS.length;
  const rangeStart = index / totalEras;
  const rangeEnd = (index + 1) / totalEras;

  const opacity = useTransform(
    scrollProgress,
    [rangeStart - 0.08, rangeStart + 0.02, rangeEnd - 0.02, rangeEnd + 0.08],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollProgress,
    [rangeStart - 0.1, rangeEnd + 0.1],
    [1.0, 1.2]
  );

  const panY = useTransform(
    scrollProgress,
    [rangeStart, rangeEnd],
    ["0%", "-8%"]
  );

  return (
    <motion.div 
      className="parallax-layer layer-visual"
      style={{ 
        backgroundImage: `url(${era.image})`,
        opacity,
        scale,
        y: panY
      }}
    />
  );
};

const JourneyPage = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20
  });

  const skyY = useTransform(smoothProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="journey-container" ref={containerRef}>
      {/* Parallax Background System */}
      <div className="parallax-viewport">
        <motion.div className="parallax-layer layer-sky" style={{ y: skyY }} />

        {REVELATION_ERAS.map((era, i) => (
          <SceneBackground 
            key={era.id} 
            era={era} 
            scrollProgress={smoothProgress} 
            index={i} 
          />
        ))}

        <div className="parallax-layer layer-particles" />
        <div className="mist-overlay" />
      </div>

      {/* Hero */}
      <section className="journey-hero">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1>Timeline of Revelations</h1>
          <p className="journey-hero__subtitle">
            How a message transformed an ignorant society into a growing, unified community — one revelation at a time.
          </p>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 15, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '8vh' }}
        >
          <ChevronDown size={48} color="#ffd700" />
        </motion.div>
      </section>

      {/* Main Narrative */}
      <div className="content-wrapper" style={{ position: 'relative' }}>
        <div className="timeline-spine" />
        
        {REVELATION_ERAS.map((era, i) => (
          <EraBlock key={era.id} era={era} index={i} />
        ))}
      </div>

      {/* Conclusion */}
      <section className="journey-hero journey-conclusion">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <Sparkles size={56} color="#ffd700" style={{ marginBottom: 24 }} />
          <h2 className="era-title">The Living Message</h2>
          <p className="journey-hero__subtitle">
            From an unlettered prophet in a cave to a global civilization.<br />
            The journey of understanding is now yours.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
            className="journey-home-link"
          >
            ↑ Back to Top
          </button>
        </motion.div>
      </section>

      {/* Floating Home Button */}
      <Link to="/" className="floating-home-btn">
        All Chapters
      </Link>
    </div>
  );
};

const EraBlock = ({ era }) => {
  return (
    <section className="era-section">
      <div className="era-header">
        <motion.span 
          className="era-year"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ margin: "-100px" }}
        >
          {era.year}
        </motion.span>
        <motion.h2 
          className="era-title"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ margin: "-100px" }}
        >
          {era.title}
        </motion.h2>
        <motion.div
          className="era-location"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <MapPin size={20} />
          <span>{era.location}</span>
        </motion.div>
        <motion.p 
          className="era-description"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {era.description}
        </motion.p>
      </div>

      <div className="era-events-container">
        {era.events.map((event, j) => (
          <motion.div 
            key={j} 
            className="event-group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: j * 0.15 }}
            viewport={{ margin: "-50px" }}
          >
            <div className="event-marker" />
            <div className="event-box">
              <h4>{event.title}</h4>
              <p>{event.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="surah-list"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="surah-list__header">
          <BookOpen size={24} />
          <span>Key Revelations</span>
        </div>
        <div className="surah-chips">
          {era.surahs.map(s => {
            const slug = surahToSlug(s);
            return slug ? (
              <Link key={s} to={slug} className="surah-chip" title={s}>
                {s}
              </Link>
            ) : (
              <span key={s} className="surah-chip" title={s}>{s}</span>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default JourneyPage;
