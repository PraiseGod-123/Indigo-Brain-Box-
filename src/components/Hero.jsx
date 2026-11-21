import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section style={styles.hero}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 900 480"
        style={styles.waveSvg}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="wave1" cx="30%" cy="60%" r="60%">
            <stop offset="0%" stopColor="#6c5fd6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6c5fd6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="wave2" cx="75%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#378ADD" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#378ADD" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="270" cy="290" rx="260" ry="170" fill="url(#wave1)" />
        <ellipse cx="670" cy="220" rx="240" ry="160" fill="url(#wave2)" />
        <path d="M -50 340 Q 200 260 450 330 T 950 300" stroke="#8b7ff0" strokeWidth="1.5" fill="none" opacity="0.3" />
        <path d="M -50 380 Q 200 300 450 370 T 950 340" stroke="#6c5fd6" strokeWidth="1.5" fill="none" opacity="0.25" />
      </svg>

      <div style={styles.content}>
        <div style={styles.badge}>
          <i className="ti ti-sparkles" style={{ fontSize: '13px', color: '#c3bcf5' }} aria-hidden="true"></i>
          The Future of Business, Today
        </div>
        <h1 style={styles.headline}>
          Find &amp; Create the <span style={styles.gradientText}>Business</span>
          <br />
          You Were Meant to Start
        </h1>
        <p style={styles.subtext}>
          Indigo builds AI-guided ideas, roadmaps, and real numbers, all tailored to you.
        </p>
        <Link to="/explore" className="btn btn-pill" style={{ marginBottom: '50px' }}>Explore</Link>
      </div>

      <div style={styles.panelsWrap}>
        <div className="hero-panels">
          <div style={styles.ideasPanel}>
            <i className="ti ti-bulb" style={styles.ideasIcon} aria-hidden="true"></i>
            <div>
              <div style={styles.panelTitle}>Ideas for Every Interest</div>
              <Link to="/explore" style={styles.panelChip}>Explore ideas</Link>
            </div>
          </div>

          <div style={styles.roadmapPanel}>
            <div style={styles.panelTitle}>Your Roadmap</div>
            <div style={styles.roadmapSteps} aria-hidden="true">
              <div style={styles.stepDotFilled}></div>
              <div style={styles.stepDotFilled}></div>
              <div style={styles.stepDotFilled}></div>
              <div style={styles.stepDotEmpty}></div>
            </div>
            <div style={styles.roadmapCaption}>4 steps to launch</div>
          </div>

          <div style={styles.numbersPanel}>
            <i className="ti ti-bolt" style={styles.numbersIcon} aria-hidden="true"></i>
            <div style={styles.numbersText}>
              Get <b>real numbers</b> built to launch your idea faster.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const panelBase = {
  minHeight: '200px',
  borderRadius: '18px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
};

const styles = {
  hero: {
    position: 'relative',
    background: '#0a0714',
    borderRadius: '0 0 24px 24px',
    overflow: 'hidden',
    padding: '50px 20px 0',
  },
  waveSvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
  content: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '620px',
    margin: '0 auto',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    color: '#a8a1c2',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '22px',
  },
  headline: {
    color: '#fff',
    fontSize: 'clamp(30px, 6.5vw, 44px)',
    fontWeight: '600',
    lineHeight: '1.2',
    fontFamily: 'var(--font-sans)',
  },
  gradientText: {
    background: 'linear-gradient(135deg,#c3bcf5,#8b7ff0)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  },
  subtext: {
    color: '#a8a1c2',
    fontSize: '15px',
    maxWidth: '440px',
    margin: '22px auto 30px',
    lineHeight: '1.6',
  },
  panelsWrap: {
    position: 'relative',
    zIndex: 2,
    padding: '0 0 24px',
  },
  ideasPanel: {
    ...panelBase,
    position: 'relative',
    background: 'linear-gradient(160deg,#2b2560,#12102b)',
    border: '1px solid rgba(129,140,248,0.3)',
    justifyContent: 'space-between',
  },
  ideasIcon: {
    fontSize: '30px',
    color: '#c3bcf5',
  },
  panelTitle: {
    color: '#fff',
    fontSize: '14.5px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  panelChip: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.12)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    color: '#fff',
    fontSize: '11px',
    padding: '6px 13px',
    borderRadius: '999px',
    textDecoration: 'none',
  },
  roadmapPanel: {
    ...panelBase,
    background: 'linear-gradient(155deg,#5648b8,#232066)',
  },
  roadmapSteps: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  stepDotFilled: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: '#c3bcf5',
  },
  stepDotEmpty: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.2)',
  },
  roadmapCaption: {
    color: '#c9c5db',
    fontSize: '11.5px',
    textAlign: 'center',
  },
  numbersPanel: {
    ...panelBase,
    background: 'linear-gradient(155deg,#3d3878,#171334)',
    justifyContent: 'space-between',
  },
  numbersIcon: {
    fontSize: '20px',
    color: '#c3bcf5',
  },
  numbersText: {
    color: '#fff',
    fontSize: '13.5px',
    lineHeight: '1.4',
  },
};