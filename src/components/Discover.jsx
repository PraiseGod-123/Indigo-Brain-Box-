import { useEffect, useRef, useState } from 'react';

const interests = ['Cooking', 'Design', 'Fitness', 'Tech', 'Pets'];

const ideas = [
  { icon: 'ti-chef-hat', title: 'Home meal prep', sector: 'Food and beverage', category: 'Cooking', rotate: -4, lift: 6 },
  { icon: 'ti-paw', title: 'Pet grooming', sector: 'Pet care', category: 'Pets', rotate: 3, lift: -10 },
  { icon: 'ti-yoga', title: 'Fitness coaching', sector: 'Health and wellness', category: 'Fitness', rotate: -2, lift: 10 },
];

export default function Discover() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeTag, setActiveTag] = useState(null); // nothing selected until user taps
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedRef.current) {
            hasPlayedRef.current = true;
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={styles.section}>
      <style>{`
        .discoverTag {
          background: rgba(255,255,255,0.06);
          color: #c9c5db;
          border: 0.5px solid rgba(255,255,255,0.14);
          font-size: 14px;
          padding: 9px 20px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .discoverTag:hover {
          background: rgba(255,255,255,0.12);
          color: #fff;
          transform: translateY(-2px);
        }
        .discoverTag.active {
          background: linear-gradient(135deg,#6c5fd6,#378ADD);
          color: #fff;
          font-weight: 600;
          box-shadow: 0 4px 16px rgba(108,95,214,0.5);
          border-color: transparent;
        }
        .discoverCard {
          background: linear-gradient(160deg,#232066,#12102b);
          border: 1px solid rgba(129,140,248,0.35);
          border-radius: 18px;
          padding: 24px;
          width: 190px;
          text-align: left;
          box-shadow: 0 14px 30px rgba(76,63,180,0.35);
          transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
          cursor: pointer;
        }
        .discoverCard:hover {
          transform: scale(1.07) rotate(0deg) translateY(-8px) !important;
          box-shadow: 0 24px 44px rgba(76,63,180,0.6);
        }
        .discoverCard.dimmed {
          opacity: 0.3;
        }
      `}</style>

      <div style={styles.glow}></div>

      <div style={fadeStyle(visible, 0)}>
        <div style={styles.badge}>
          <i className="ti ti-bulb" style={{ fontSize: '12px' }}></i> 1000+ ideas waiting
        </div>
      </div>

      <h2 style={{ ...styles.title, ...fadeStyle(visible, 130) }}>Discover your idea</h2>
      <p style={{ ...styles.subtitle, ...fadeStyle(visible, 260) }}>
        Pick what excites you, we'll surface ideas built for it
      </p>

      <div style={{ ...styles.tags, ...fadeStyle(visible, 390) }}>
        {interests.map((tag) => (
          <span
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`discoverTag ${tag === activeTag ? 'active' : ''}`}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ ...styles.cardRow, ...fadeStyle(visible, 520) }}>
        {ideas.map((idea) => (
          <div
            key={idea.title}
            className={`discoverCard ${activeTag && idea.category !== activeTag ? 'dimmed' : ''}`}
            style={{
              transform: `rotate(${idea.rotate}deg) translateY(${idea.lift}px)`,
            }}
          >
            <div style={styles.iconChip}>
              <i className={`ti ${idea.icon}`} style={styles.icon}></i>
            </div>
            <div style={styles.cardTitle}>{idea.title}</div>
            <div style={styles.cardSector}>{idea.sector}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function fadeStyle(visible, delayMs) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delayMs}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delayMs}ms`,
  };
}

const styles = {
  section: {
    position: 'relative',
    padding: '90px 32px 70px',
    textAlign: 'center',
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    top: '-10%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(106,95,214,0.22) 0%, rgba(106,95,214,0) 70%)',
    pointerEvents: 'none',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    background: 'rgba(129,140,248,0.14)',
    border: '0.5px solid rgba(129,140,248,0.3)',
    color: 'var(--color-accent-light)',
    fontSize: '13px',
    padding: '7px 16px',
    borderRadius: '999px',
    marginBottom: '20px',
    position: 'relative',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: '36px',
    fontWeight: '500',
    marginBottom: '10px',
    color: '#fff',
    position: 'relative',
  },
  subtitle: {
    color: 'var(--color-text-secondary)',
    fontSize: '16px',
    maxWidth: '400px',
    margin: '0 auto 34px',
    position: 'relative',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    maxWidth: '520px',
    margin: '0 auto 44px',
    position: 'relative',
  },
  cardRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '22px',
    flexWrap: 'wrap',
    maxWidth: '680px',
    margin: '0 auto',
    position: 'relative',
  },
  iconChip: {
    width: '42px',
    height: '42px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg,#6c5fd6,#378ADD)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    boxShadow: '0 6px 14px rgba(108,95,214,0.5)',
  },
  icon: {
    fontSize: '20px',
    color: '#fff',
  },
  cardTitle: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '6px',
    lineHeight: '1.3',
  },
  cardSector: {
    color: '#9089b0',
    fontSize: '13px',
  },
};