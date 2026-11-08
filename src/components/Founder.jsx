import { useState } from 'react';

export default function Founder() {
  const [slide, setSlide] = useState(0);

  return (
    <section style={styles.section}>
      <svg width="100%" height="100%" style={styles.stars}>
        <circle cx="6%" cy="10%" r="1" fill="#fff" opacity="0.4" />
        <circle cx="94%" cy="88%" r="0.8" fill="#fff" opacity="0.3" />
      </svg>

      <div
        style={{
          ...styles.slidesWrap,
          transform: `translateX(${-slide * 50}%)`,
        }}
      >
        {/* Slide 1: name + photo */}
        <div style={styles.slide}>
          <div style={styles.textCol}>
            <div style={styles.eyebrow}>Meet the founder</div>
            <div style={styles.name}>P.U.O</div>
            <div style={styles.title}>FOUNDER &amp; CEO</div>
          </div>
          <div style={styles.photoCol}>
            <img src="/coverup.jpg" alt="Founder" style={styles.photoImg} />
          </div>
        </div>

        {/* Slide 2: bio */}
        <div style={styles.bioSlide}>
          <div style={styles.bioContent}>
            <div style={styles.eyebrow}>About the founder</div>
            <i className="ti ti-quote" style={styles.quoteIcon}></i>
            <div style={styles.bioText}>
              She is a young female computer science graduate.
            </div>
            <div style={styles.socialRow}>
              <a href="#" style={styles.socialIcon}>
                <i className="ti ti-brand-x" style={{ fontSize: '13px' }}></i>
              </a>
              <a href="#" style={styles.socialIcon}>
                <i className="ti ti-brand-linkedin" style={{ fontSize: '13px' }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.dots}>
        <div onClick={() => setSlide(0)} style={slide === 0 ? styles.dotActive : styles.dot}></div>
        <div onClick={() => setSlide(1)} style={slide === 1 ? styles.dotActive : styles.dot}></div>
      </div>

      {slide === 0 && (
        <div onClick={() => setSlide(1)} style={styles.navArrowRight}>
          <i className="ti ti-chevron-right" style={{ fontSize: '16px', color: '#fff' }}></i>
        </div>
      )}
      {slide === 1 && (
        <div onClick={() => setSlide(0)} style={styles.navArrowLeft}>
          <i className="ti ti-chevron-left" style={{ fontSize: '16px', color: '#fff' }}></i>
        </div>
      )}
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    background: '#000',
    overflow: 'hidden',
    minHeight: '440px',
  },
  stars: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
  },
  slidesWrap: {
    position: 'relative',
    display: 'flex',
    width: '200%',
    transition: 'transform 0.6s cubic-bezier(0.65,0,0.35,1)',
    zIndex: 1,
  },
  slide: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    minHeight: '440px',
  },
  textCol: {
    flex: 1,
    padding: '0 20px 0 48px',
    textAlign: 'left',
  },
  eyebrow: {
    color: '#8b86a0',
    fontSize: '11px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '16px',
  },
  name: {
    color: 'rgba(255,255,255,0.35)',
    fontStyle: 'italic',
    fontSize: '28px',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
    lineHeight: '1.3',
    marginBottom: '10px',
  },
  title: {
    color: 'var(--color-accent-light)',
    fontSize: '13px',
    fontWeight: '500',
    letterSpacing: '0.5px',
  },
  photoCol: {
    flex: '1.5',
    maxWidth: '480px',
    height: '400px',
    position: 'relative',
    overflow: 'hidden',
  },
  photoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 15%',
    display: 'block',
    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, black 30%), radial-gradient(ellipse at center, black 55%, transparent 85%)',
    WebkitMaskComposite: 'source-in',
    maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, black 30%), radial-gradient(ellipse at center, black 55%, transparent 85%)',
    maskComposite: 'intersect',
  },
  bioSlide: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '440px',
    padding: '0 60px',
  },
  bioContent: {
    maxWidth: '420px',
    textAlign: 'center',
  },
  quoteIcon: {
    fontSize: '22px',
    color: '#3a3560',
    marginBottom: '16px',
    display: 'block',
  },
  bioText: {
    color: '#dcd8ea',
    fontSize: '15px',
    lineHeight: '1.85',
    marginBottom: '24px',
  },
  socialRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  socialIcon: {
    width: '30px',
    height: '30px',
    borderRadius: '8px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#c9c5db',
    textDecoration: 'none',
  },
  dots: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
    zIndex: 2,
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.25)',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
  },
  dotActive: {
    width: '18px',
    height: '6px',
    borderRadius: '3px',
    background: '#c3bcf5',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
  },
  navArrowRight: {
    position: 'absolute',
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 2,
  },
  navArrowLeft: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 2,
  },
};