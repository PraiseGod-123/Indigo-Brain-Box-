import { useEffect, useRef, useState } from 'react';
import Founder from '../components/Founder';
import StarField from '../components/StarField';

const whatItems = [
  { title: 'Ideas matched to you', text: '1000+ ideas sorted by sector, filtered by interest' },
  { title: 'A real roadmap', text: 'Market, model, funding, marketing in steps' },
  { title: 'Built for beginners', text: 'No business background required, ever' },
];

// Fades a block in the first time it scrolls into view.
function useRevealOnScroll() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

const fade = (visible, delay = 0) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(24px)',
  transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
});

export default function About() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [storyRef, storyVisible] = useRevealOnScroll();
  const [whatRef, whatVisible] = useRevealOnScroll();
  const [founderLabelRef, founderLabelVisible] = useRevealOnScroll();

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Hero, image on the side */}
      <section style={styles.heroWrap}>
        <StarField count={2} />

        <div className="about-row">
          <div className="about-text-col">
            <div style={{ ...styles.badge, ...fade(heroVisible, 0) }}>
              <i className="ti ti-sparkles" style={{ fontSize: '13px' }} aria-hidden="true"></i> About Us
            </div>
            <h1 style={{ ...styles.heroHeadline, ...fade(heroVisible, 130) }}>
              Whether you're searching for the right idea or ready to build but unsure how, we meet you where you are
            </h1>
            <p style={{ ...styles.heroSubtext, ...fade(heroVisible, 260) }}>
              A real path from the first spark of an idea to actually launching it.
            </p>
            <div style={{ ...styles.heroActions, ...fade(heroVisible, 390) }}>
              <a href="#story" className="btn btn-primary">Read our story</a>
              <a href="#founder" className="btn btn-secondary">Meet the founder</a>
            </div>
          </div>

          <div className="about-img-col">
            {/* File lives in /public. Rename "VR 1.jpg" to "about-hero.jpg" (no spaces) to match. */}
            <img src="/about-hero.jpg" alt="" style={styles.heroImg} />
            <div style={styles.imgFadeLeft}></div>
            <div style={styles.imgFadeTop}></div>
            <div style={styles.imgFadeBottom}></div>
          </div>
        </div>
      </section>

      {/* The story */}
      <section id="story" ref={storyRef} style={styles.storySection}>
        <StarField count={2} />

        <div style={{ ...styles.storyContent, ...fade(storyVisible, 0) }}>
          <div style={styles.label}>002 · The story</div>
          <h2 style={styles.storyHeadline}>The question that started it all</h2>

          <div style={styles.storyPanel}>
            <i className="ti ti-quote" style={styles.quoteIcon} aria-hidden="true"></i>
            <div style={styles.storyText}>
              <p>
                It started on a hot Tuesday afternoon, sitting in my room, trying to figure out what business to
                actually start. I tried thinking through it from an innovation angle, but nothing stuck. I researched
                for hours. Still nothing felt right.
              </p>
              <p>
                So I prayed and asked God for direction. And that's when it clicked: I wasn't the only one stuck like
                this. There are countless people who genuinely want to build something but have no idea where to
                begin.
              </p>
              <p>
                <span style={styles.accent}>What if there was one place</span> that could hand them tons of flexible,
                easy-to-start business ideas, matched to who they actually are? That question is where Indigo Brain
                Box began.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we are */}
      <section ref={whatRef} style={styles.whatSection}>
        <StarField count={2} />

        <div style={{ ...styles.whatContent, ...fade(whatVisible, 0) }}>
          <div style={styles.label}>003 · What we are</div>
          <h2 style={styles.whatHeadline}>
            Indigo Brain Box is the missing step between{' '}
            <span style={styles.accent}>"I want to start"</span> and{' '}
            <span style={styles.accent}>actually starting.</span>
          </h2>
          <p style={styles.whatSubtext}>
            Not a course, a directory, or a generic list. A real, personalized business plan.
          </p>

          <ol style={{ listStyle: 'none' }}>
            {whatItems.map((item, i) => (
              <li
                key={item.title}
                style={{
                  ...styles.whatRow,
                  borderBottom: i === whatItems.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <div style={styles.whatNum} aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div style={styles.whatItemTitle}>{item.title}</div>
                  <div style={styles.whatItemText}>{item.text}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Founder label */}
      <section ref={founderLabelRef} style={styles.founderLabelSection}>
        <div style={{ ...styles.label, ...fade(founderLabelVisible, 0), textAlign: 'center' }}>
          004 · Meet the founder
        </div>
      </section>

      <Founder />
    </>
  );
}

const styles = {
  label: {
    color: '#8b7ff0',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '20px',
    position: 'relative',
  },
  accent: { color: '#9d92f5' },

  heroWrap: {
    position: 'relative',
    background: '#000',
    overflow: 'hidden',
  },
  heroImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 20%',
    display: 'block',
  },
  imgFadeLeft: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, #000 0%, rgba(0,0,0,0.6) 12%, transparent 30%)',
    pointerEvents: 'none',
  },
  imgFadeTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '35%',
    background: 'linear-gradient(to bottom, #000 0%, transparent 100%)',
    pointerEvents: 'none',
  },
  imgFadeBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '35%',
    background: 'linear-gradient(to top, #000 0%, transparent 100%)',
    pointerEvents: 'none',
  },

  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(139,92,246,0.15)',
    border: '0.5px solid rgba(139,92,246,0.35)',
    color: '#e5daff',
    fontSize: '12px',
    padding: '6px 15px',
    borderRadius: '999px',
    marginBottom: '24px',
  },
  heroHeadline: {
    color: '#fff',
    fontSize: 'clamp(28px, 5vw, 42px)',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
    marginBottom: '20px',
    lineHeight: '1.25',
    maxWidth: '520px',
  },
  heroSubtext: {
    color: '#d4cee8',
    fontSize: '14px',
    marginBottom: '28px',
    lineHeight: '1.6',
    maxWidth: '420px',
  },
  heroActions: { display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' },

  storySection: {
    position: 'relative',
    background: '#000',
    padding: '90px var(--page-x)',
    overflow: 'hidden',
    textAlign: 'center',
    scrollMarginTop: '70px',
  },
  storyContent: {
    position: 'relative',
    maxWidth: '680px',
    margin: '0 auto',
  },
  storyHeadline: {
    color: '#fff',
    fontSize: '26px',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
    marginBottom: '30px',
  },
  storyPanel: {
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: '20px',
    padding: 'clamp(22px, 5vw, 30px)',
    textAlign: 'left',
  },
  quoteIcon: { fontSize: '20px', color: '#5a5390', marginBottom: '12px', display: 'block' },
  storyText: {
    color: '#dcd8ea',
    fontSize: '14px',
    lineHeight: '1.85',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },

  whatSection: {
    position: 'relative',
    background: '#000',
    padding: '70px var(--page-x) 90px',
    overflow: 'hidden',
  },
  whatContent: { position: 'relative', maxWidth: '680px', margin: '0 auto' },
  whatHeadline: {
    color: '#fff',
    fontSize: 'clamp(20px, 4vw, 24px)',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
    lineHeight: '1.35',
    marginBottom: '16px',
  },
  whatSubtext: {
    color: 'var(--color-text-secondary)',
    fontSize: '13.5px',
    lineHeight: '1.8',
    maxWidth: '560px',
    marginBottom: '34px',
  },
  whatRow: { display: 'flex', gap: '20px', padding: '16px 0', borderTop: '1px solid rgba(255,255,255,0.08)' },
  whatNum: {
    color: '#5a5390',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'var(--font-serif)',
    width: '30px',
    flexShrink: 0,
  },
  whatItemTitle: { color: '#fff', fontSize: '13.5px', fontWeight: '600' },
  whatItemText: { color: 'var(--color-text-faint)', fontSize: '12.5px', marginTop: '2px' },

  founderLabelSection: {
    position: 'relative',
    background: '#000',
    padding: '60px var(--page-x) 20px',
  },
};