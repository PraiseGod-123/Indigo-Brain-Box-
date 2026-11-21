import { useState } from 'react';
import StarField from './StarField';
import { site, activeSocials } from '../config/site';

export default function Founder() {
  const [slide, setSlide] = useState(0);
  const { founder } = site;
  const socials = activeSocials(founder.socials);

  return (
    <section id="founder" style={styles.section} aria-roledescription="carousel" aria-label="Meet the founder">
      <StarField count={2} />

      <div style={{ ...styles.slidesWrap, transform: `translateX(${-slide * 50}%)` }}>
        {/* Slide 1: name + photo */}
        <div className="founder-slide" inert={slide !== 0} aria-hidden={slide !== 0}>
          <div className="founder-text-col">
            <div style={styles.eyebrow}>Meet the founder</div>
            <div style={styles.name}>{founder.name}</div>
            <div style={styles.title}>{founder.role.toUpperCase()}</div>
          </div>
          <div className="founder-photo-col">
            <img src={founder.photo} alt={`${founder.name}, ${founder.role}`} style={styles.photoImg} loading="lazy" />
          </div>
        </div>

        {/* Slide 2: bio */}
        <div style={styles.bioSlide} inert={slide !== 1} aria-hidden={slide !== 1}>
          <div style={styles.bioContent}>
            <div style={styles.eyebrow}>About the founder</div>
            <i className="ti ti-quote" style={styles.quoteIcon} aria-hidden="true"></i>
            <p style={styles.bioText}>{founder.bio}</p>
            {socials.length > 0 && (
              <div style={styles.socialRow}>
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.url}
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name} on ${s.label}`}
                  >
                    <i className={`ti ${s.icon}`} style={{ fontSize: '13px' }} aria-hidden="true"></i>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={styles.dots}>
        {[0, 1].map((i) => (
          <button
            key={i}
            type="button"
            className="slider-dot"
            onClick={() => setSlide(i)}
            aria-label={`Show slide ${i + 1} of 2`}
            aria-current={slide === i}
            style={{
              width: slide === i ? '18px' : '6px',
              background: slide === i ? '#c3bcf5' : 'rgba(255,255,255,0.25)',
            }}
          />
        ))}
      </div>

      <button
        type="button"
        className="icon-btn"
        onClick={() => setSlide(slide === 0 ? 1 : 0)}
        aria-label={slide === 0 ? 'Next slide' : 'Previous slide'}
        style={slide === 0 ? styles.navArrowRight : styles.navArrowLeft}
      >
        <i className={`ti ${slide === 0 ? 'ti-chevron-right' : 'ti-chevron-left'}`} style={{ fontSize: '16px' }} aria-hidden="true"></i>
      </button>
    </section>
  );
}

const arrowBase = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '36px',
  height: '36px',
  zIndex: 2,
};

const styles = {
  section: {
    position: 'relative',
    background: '#000',
    overflow: 'hidden',
    minHeight: '440px',
    scrollMarginTop: '70px',
  },
  slidesWrap: {
    position: 'relative',
    display: 'flex',
    width: '200%',
    transition: 'transform 0.6s cubic-bezier(0.65,0,0.35,1)',
    zIndex: 1,
  },
  eyebrow: {
    color: 'var(--color-text-faint)',
    fontSize: '11px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '16px',
  },
  name: {
    color: 'rgba(255,255,255,0.55)',
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
  photoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 15%',
    display: 'block',
    WebkitMaskImage:
      'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, black 30%), radial-gradient(ellipse at center, black 55%, transparent 85%)',
    WebkitMaskComposite: 'source-in',
    maskImage:
      'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 12%, black 30%), radial-gradient(ellipse at center, black 55%, transparent 85%)',
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
    color: '#5a5390',
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
  dots: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
    zIndex: 2,
  },
  navArrowRight: { ...arrowBase, right: '16px' },
  navArrowLeft: { ...arrowBase, left: '16px' },
};