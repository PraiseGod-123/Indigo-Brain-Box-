import { useEffect, useRef, useState } from 'react';
import Founder from '../components/Founder';

export default function About() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [whatVisible, setWhatVisible] = useState(false);
  const [founderLabelVisible, setFounderLabelVisible] = useState(false);
  const storyRef = useRef(null);
  const whatRef = useRef(null);
  const founderLabelRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const makeObserver = (setter) =>
      new IntersectionObserver(
        (entries) => entries.forEach((entry) => entry.isIntersecting && setter(true)),
        { threshold: 0.25 }
      );

    const storyObs = makeObserver(setStoryVisible);
    const whatObs = makeObserver(setWhatVisible);
    const founderObs = makeObserver(setFounderLabelVisible);
    if (storyRef.current) storyObs.observe(storyRef.current);
    if (whatRef.current) whatObs.observe(whatRef.current);
    if (founderLabelRef.current) founderObs.observe(founderLabelRef.current);

    return () => {
      storyObs.disconnect();
      whatObs.disconnect();
      founderObs.disconnect();
    };
  }, []);

  const fade = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <>

      {/* Hero, image on the side */}
      <section style={styles.heroWrap}>
        <svg width="100%" height="100%" style={styles.stars}>
          <circle cx="8%" cy="10%" r="1" fill="#fff" opacity="0.5" />
          <circle cx="15%" cy="85%" r="0.8" fill="#fff" opacity="0.4" />
        </svg>

        <div style={styles.row}>
          <div style={styles.textCol}>
            <div style={{ ...styles.badge, ...fade(heroVisible, 0) }}>
              <i className="ti ti-sparkles" style={{ fontSize: '13px' }}></i> About Us
            </div>
            <h1 style={{ ...styles.heroHeadline, ...fade(heroVisible, 130) }}>
              Whether you're searching for the right idea or ready to build but unsure how - we meet you where you are
            </h1>
            <p style={{ ...styles.heroSubtext, ...fade(heroVisible, 260) }}>
              A real path from your first park of an idea to actually launching it.
            </p>
            <div style={{ ...styles.heroActions, ...fade(heroVisible, 390) }}>
              <button style={styles.primaryBtn}>Read our story</button>
              <button style={styles.secondaryBtn}>Meet the founder</button>
            </div>
          </div>

          <div style={styles.imgCol}>
            <img src="/VR 1.jpg" alt="" style={styles.heroImg} />
            <div style={styles.imgFadeLeft}></div>
            <div style={styles.imgFadeTop}></div>
            <div style={styles.imgFadeBottom}></div>
          </div>
        </div>
      </section>

      {/* The story — full width, centered */}
      <section ref={storyRef} style={styles.storySection}>
        <svg width="100%" height="100%" style={styles.stars}>
          <circle cx="90%" cy="10%" r="1" fill="#fff" opacity="0.4" />
          <circle cx="8%" cy="90%" r="0.9" fill="#fff" opacity="0.35" />
        </svg>

        <div style={{ ...styles.storyContent, ...fade(storyVisible, 0) }}>
          <div style={styles.label}>002 — The story</div>
          <div style={styles.storyHeadline}>The question that started it all</div>

          <div style={styles.storyPanel}>
            <i className="ti ti-quote" style={styles.quoteIcon}></i>
            <div style={styles.storyText}>
              It started on a hot Tuesday afternoon, sitting in my room, trying to figure out
              what business to actually start. I tried thinking through it from an innovation
              angle — nothing stuck. I researched for hours. Still nothing felt right.
              <br /><br />
              So I prayed and asked God for direction. And that's when it clicked: I wasn't
              the only one stuck like this. There are countless people who genuinely want to
              build something but have no idea where to begin.
              <br /><br />
              <span style={styles.accent}>What if there was one place</span> that could hand
              them tons of flexible, easy-to-start business ideas, matched to who they actually
              are? That question is where Indigo Brain Box began.
            </div>
          </div>
        </div>
      </section>

      {/* What we are */}
      <section ref={whatRef} style={styles.whatSection}>
        <svg width="100%" height="100%" style={styles.stars}>
          <circle cx="10%" cy="12%" r="1" fill="#fff" opacity="0.4" />
          <circle cx="90%" cy="85%" r="0.9" fill="#fff" opacity="0.35" />
        </svg>

        <div style={{ ...styles.whatContent, ...fade(whatVisible, 0) }}>
          <div style={styles.label}>003 — What we are</div>
          <div style={styles.whatHeadline}>
            Indigo Brain Box is the missing step between{' '}
            <span style={styles.accent}>"I want to start"</span> and{' '}
            <span style={styles.accent}>actually starting.</span>
          </div>
          <p style={styles.whatSubtext}>
            Not a course, a directory, or a generic list. A real, personalized business plan.
          </p>

          <div>
            {whatItems.map((item, i) => (
              <div
                key={item.title}
                style={{
                  ...styles.whatRow,
                  borderBottom: i === whatItems.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <div style={styles.whatNum}>{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <div style={styles.whatItemTitle}>{item.title}</div>
                  <div style={styles.whatItemText}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder label */}
      <section ref={founderLabelRef} style={styles.founderLabelSection}>
        <div style={{ ...styles.label, ...fade(founderLabelVisible, 0), textAlign: 'center' }}>
          004 — Meet the founder
        </div>
      </section>

      <Founder />
    </>
  );
}

const whatItems = [
  { title: 'Ideas matched to you', text: '1000+ ideas sorted by sector, filtered by interest' },
  { title: 'A real roadmap', text: 'Market, model, funding, marketing in steps' },
  { title: 'Built for beginners', text: 'No business background required, ever' },
];

const styles = {
  label: {
    color: '#6c5fd6',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '20px',
    position: 'relative',
  },
  accent: { color: '#6c5fd6' },
  stars: { position: 'absolute', inset: 0, zIndex: 0 },

  heroWrap: {
    position: 'relative',
    background: '#000',
    overflow: 'hidden',
    minHeight: '100vh',
  },
  row: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
  },
  textCol: {
    flex: '1 1 55%',
    padding: '70px 48px',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems:'center',
    textAlign:'center',
  },
  imgCol: {
    flex: '1 1 45%',
    position: 'sticky',
    top: 0,
    height: '100vh',
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
    alignSelf: 'flex-start',
  },
  heroHeadline: {
    color: '#fff',
    fontSize: '42px',
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
  heroActions: { display: 'flex', gap: '12px' },
  primaryBtn: {
    background: '#7c5cf0',
    color: '#fff',
    border: 'none',
    padding: '10px 22px',
    borderRadius: '9px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
  },
  secondaryBtn: {
    background: 'rgba(255,255,255,0.08)',
    color: '#fff',
    border: '0.5px solid rgba(255,255,255,0.25)',
    padding: '10px 22px',
    borderRadius: '9px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
  },

  // Story — now its own centered section
  storySection: {
    position: 'relative',
    background: '#000',
    padding: '90px 48px',
    overflow: 'hidden',
    textAlign: 'center',
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
    padding: '30px',
    textAlign: 'left',
  },
  quoteIcon: { fontSize: '20px', color: '#3a3560', marginBottom: '12px', display: 'block' },
  storyText: { color: '#dcd8ea', fontSize: '13.5px', lineHeight: '1.85' },

  whatSection: {
    position: 'relative',
    background: '#000',
    padding: '70px 48px 90px',
    overflow: 'hidden',
  },
whatContent: { position: 'relative', maxWidth: '680px' },
  whatHeadline: {
    color: '#fff',
    fontSize: '24px',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
    lineHeight: '1.35',
    marginBottom: '16px',
  },
  whatSubtext: {
    color: 'var(--color-text-secondary)',
    fontSize: '13px',
    lineHeight: '1.8',
    maxWidth: '560px',
    marginBottom: '34px',
  },
  whatRow: { display: 'flex', gap: '20px', padding: '16px 0', borderTop: '1px solid rgba(255,255,255,0.08)' },
  whatNum: {
    color: '#3a3560',
    fontSize: '16px',
    fontWeight: '600',
    fontFamily: 'var(--font-serif)',
    width: '30px',
    flexShrink: 0,
  },
  whatItemTitle: { color: '#fff', fontSize: '13.5px', fontWeight: '600' },
  whatItemText: { color: '#8b86a0', fontSize: '12px', marginTop: '2px' },

  founderLabelSection: {
    position: 'relative',
    background: '#000',
    padding: '60px 48px 20px',
  },
};