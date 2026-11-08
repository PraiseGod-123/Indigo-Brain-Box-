import { useEffect, useRef, useState } from 'react';
import Hero from '../components/Hero';

import Discover from '../components/Discover';
import Roadmap from '../components/Roadmap';
import Closing from '../components/Closing';
import Background from '../components/Background';

const sections = [
  { id: 'hero', bg: '#0d0b1f', glow: true },
  { id: 'discover', bg: '#000000', glow: false },
  { id: 'roadmap', bg: '#000000', glow: false },
];

export default function Home() {
  const [activeColor, setActiveColor] = useState('#0d0b1f');
  const [showGlow, setShowGlow] = useState(true);
  const refs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = sections.find((s) => s.id === entry.target.dataset.id);
            if (match) {
              setActiveColor(match.bg);
              setShowGlow(match.glow);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Background activeColor={activeColor} showGlow={showGlow} />

      <div data-id="hero" ref={(el) => (refs.current.hero = el)} className="snap-section">
        <Hero />
        
      </div>

      <div data-id="discover" ref={(el) => (refs.current.discover = el)} className="snap-section">
        <Discover />
      </div>

      <div data-id="roadmap" ref={(el) => (refs.current.roadmap = el)} className="snap-section">
        <Roadmap />
      </div>

      <Closing />
    </>
  );
}