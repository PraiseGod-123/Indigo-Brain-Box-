import { useEffect, useRef } from 'react';

const steps = [
  { x: 30, y: 200, label: 'TARGET MARKET', labelY: 238 },
  { x: 230, y: 60, label: 'BUSINESS MODEL', labelY: 30 },
  { x: 430, y: 200, label: 'FUNDING NEEDED', labelY: 238 },
  { x: 600, y: 76, label: 'MARKETING PLAN', labelY: 46 },
];

const WALK_SPEED = 0.0008 / 30; // fraction of the path per millisecond (same pace as before)

export default function Roadmap() {
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const pathRef = useRef(null);
  const travelerRef = useRef(null);
  const flagRef = useRef(null);
  const legFrontRef = useRef(null);
  const legBackRef = useRef(null);
  const armFrontRef = useRef(null);
  const armBackRef = useRef(null);
  const stepRefs = useRef([]);
  const springTimeoutRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const path = pathRef.current;
    if (!section || !panel || !path) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pathLen = path.getTotalLength();
    const timeouts = [];
    const later = (fn, ms) => timeouts.push(setTimeout(fn, ms));

    let hasPlayed = false;
    let walking = false; // walk loop started
    let onScreen = false;
    let rafId = null;
    let lastTime = null;
    let t = 0;
    let walkPhase = 0;

    const placeTraveler = () => {
      const p = path.getPointAtLength(t * pathLen);
      travelerRef.current?.setAttribute('transform', `translate(${p.x},${p.y - 20})`);
    };

    // requestAnimationFrame loop: smooth, and it stops when the section is off-screen.
    const frame = (now) => {
      if (lastTime !== null) {
        const dt = Math.min(now - lastTime, 100);
        t = (t + dt * WALK_SPEED) % 1;
        walkPhase += dt * (0.22 / 30);
        const swing = Math.sin(walkPhase) * 22;
        legFrontRef.current?.setAttribute('transform', `rotate(${swing} 0 8)`);
        legBackRef.current?.setAttribute('transform', `rotate(${-swing} 0 8)`);
        armFrontRef.current?.setAttribute('transform', `rotate(${-swing * 0.8} 0 -6)`);
        armBackRef.current?.setAttribute('transform', `rotate(${swing * 0.8} 0 -6)`);
        placeTraveler();
      }
      lastTime = now;
      rafId = requestAnimationFrame(frame);
    };

    const startLoop = () => {
      if (rafId === null && walking && onScreen && !reduceMotion) {
        lastTime = null;
        rafId = requestAnimationFrame(frame);
      }
    };
    const stopLoop = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = null;
    };

    const playEntrance = () => {
      if (reduceMotion) {
        panel.style.opacity = '1';
        panel.style.transform = 'none';
        stepRefs.current.forEach((el) => el && (el.style.opacity = '1'));
        if (flagRef.current) flagRef.current.style.opacity = '1';
        placeTraveler();
        if (travelerRef.current) travelerRef.current.style.opacity = '1';
        return;
      }

      path.style.strokeDasharray = pathLen;
      path.style.strokeDashoffset = pathLen;

      later(() => {
        panel.style.opacity = '1';
        panel.style.transform = 'scale(1) translateY(0)';
      }, 100);

      later(() => {
        path.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(0.65,0,0.35,1)';
        path.style.strokeDashoffset = '0';
      }, 650);

      [750, 1150, 1550, 2150].forEach((delay, i) => {
        later(() => {
          const el = stepRefs.current[i];
          if (!el) return;
          el.style.transition = 'opacity 0.3s ease';
          el.style.opacity = '1';
        }, delay);
      });

      later(() => {
        if (!flagRef.current) return;
        flagRef.current.style.transition = 'opacity 0.4s ease';
        flagRef.current.style.opacity = '1';
      }, 2350);

      later(() => {
        placeTraveler();
        if (travelerRef.current) travelerRef.current.style.opacity = '1';
        walking = true;
        startLoop();
      }, 2450);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen && !hasPlayed && entry.intersectionRatio >= 0.4) {
          hasPlayed = true;
          playEntrance();
        }
        if (onScreen) startLoop();
        else stopLoop();
      },
      { threshold: [0, 0.4] }
    );
    observer.observe(section);

    return () => {
      observer.disconnect();
      stopLoop();
      timeouts.forEach(clearTimeout);
      clearTimeout(springTimeoutRef.current);
    };
  }, []);

  const handlePoke = (e) => {
    const panel = panelRef.current;
    if (!panel) return;
    clearTimeout(springTimeoutRef.current);

    const rect = panel.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const maxTilt = 8;
    const tiltY = x * maxTilt * 2;
    const tiltX = -y * maxTilt * 2;

    panel.style.transition = 'transform 0.12s ease-out';
    panel.style.transform = `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(0.98)`;

    springTimeoutRef.current = setTimeout(() => {
      panel.style.transition = 'transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)';
      panel.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)';
    }, 120);
  };

  return (
    <section ref={sectionRef} style={styles.section}>
      <div ref={panelRef} onPointerDown={handlePoke} className="roadmap-panel" style={styles.glassPanel}>
        <div style={styles.lightStreak} aria-hidden="true"></div>
        <div style={styles.topHighlight} aria-hidden="true"></div>

        <div style={styles.content}>
          <h2 style={styles.title}>Your roadmap</h2>
          <p style={styles.subtitle}>Poke the glass and watch it tilt</p>

          <svg
            viewBox="0 0 700 260"
            width="100%"
            style={styles.svg}
            role="img"
            aria-label="Roadmap: 1 Target market, 2 Business model, 3 Funding needed, 4 Marketing plan"
          >
            <defs>
              <linearGradient id="ribbon" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#378ADD" />
                <stop offset="50%" stopColor="#6c5fd6" />
                <stop offset="100%" stopColor="#8b7ff0" />
              </linearGradient>
              <filter id="ribbonShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#4c3fb4" floodOpacity="0.45" />
              </filter>
            </defs>

            <path
              ref={pathRef}
              d="M 30 200 C 130 200, 130 60, 230 60 C 330 60, 330 200, 430 200 C 530 200, 530 60, 640 60"
              fill="none"
              stroke="url(#ribbon)"
              strokeWidth="18"
              strokeLinecap="round"
              filter="url(#ribbonShadow)"
            />

            {steps.map((step, i) => (
              <g key={step.label} ref={(el) => (stepRefs.current[i] = el)} style={{ opacity: 0 }}>
                <circle cx={step.x} cy={step.y} r="26" fill="#12102b" stroke="#6c5fd6" strokeWidth="2.5" />
                <text x={step.x} y={step.y + 7} textAnchor="middle" fontSize="16" fill="#fff" fontWeight="500">
                  {i + 1}
                </text>
                <text
                  x={step.x}
                  y={step.labelY}
                  textAnchor="middle"
                  fontSize="9"
                  fill="#c9c5db"
                  fontWeight="500"
                  fontFamily="Inter, system-ui, sans-serif"
                  letterSpacing="0.5"
                >
                  {step.label}
                </text>
              </g>
            ))}

            <g ref={travelerRef} style={{ opacity: 0 }}>
              <line ref={armBackRef} x1="0" y1="-6" x2="0" y2="2" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
              <line ref={legBackRef} x1="0" y1="8" x2="0" y2="16" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
              <line x1="0" y1="-6" x2="0" y2="8" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
              <circle cx="0" cy="-11" r="4.5" fill="#fff" />
              <line ref={legFrontRef} x1="0" y1="8" x2="0" y2="16" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
              <line ref={armFrontRef} x1="0" y1="-6" x2="0" y2="2" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            <g ref={flagRef} transform="translate(640,60)" style={{ opacity: 0 }}>
              <line x1="0" y1="0" x2="0" y2="-42" stroke="#fff" strokeWidth="2.5" />
              <path d="M 0 -42 L 30 -34 L 0 -25 Z" fill="#e8467c" />
            </g>
          </svg>

          <div className="roadmap-summary" style={styles.summaryRow}>
            <div>
              <div style={styles.summaryLabel}>Your idea</div>
              <div style={styles.summaryValue}>Mobile pet grooming</div>
            </div>
            <div>
              <div style={styles.summaryLabel}>Steps</div>
              <div style={styles.summaryValue}>4</div>
            </div>
            <div>
              <div style={styles.summaryLabel}>Est. launch</div>
              <div style={styles.summaryValue}>6 weeks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 20px 140px',
    display: 'flex',
    justifyContent: 'center',
  },
  glassPanel: {
    position: 'relative',
    width: '100%',
    maxWidth: '920px',
    background: 'rgba(255,255,255,0.055)',
    backdropFilter: 'blur(28px) saturate(160%)',
    WebkitBackdropFilter: 'blur(28px) saturate(160%)',
    border: '1px solid rgba(255,255,255,0.22)',
    borderRadius: '32px',
    textAlign: 'center',
    boxShadow: '0 25px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.15)',
    cursor: 'pointer',
    transformStyle: 'preserve-3d',
    overflow: 'hidden',
    opacity: 0,
    transform: 'scale(0.85) translateY(30px)',
    transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)',
  },
  lightStreak: {
    position: 'absolute',
    top: 0,
    left: '-20%',
    width: '60%',
    height: '100%',
    background: 'linear-gradient(115deg, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.04) 35%, transparent 60%)',
    transform: 'skewX(-12deg)',
    pointerEvents: 'none',
  },
  topHighlight: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
  },
  content: {
    position: 'relative',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(26px, 5vw, 32px)',
    fontWeight: '500',
    marginBottom: '8px',
    color: '#fff',
  },
  subtitle: {
    color: 'var(--color-text-secondary)',
    fontSize: '15px',
    marginBottom: '40px',
  },
  svg: {
    maxWidth: '820px',
    overflow: 'visible',
    pointerEvents: 'none',
  },
  summaryRow: {
    marginTop: '32px',
    paddingTop: '28px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  summaryLabel: {
    color: 'var(--color-text-faint)',
    fontSize: '12px',
  },
  summaryValue: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
  },
};