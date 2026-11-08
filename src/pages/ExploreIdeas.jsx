import { useState, useMemo } from 'react';

const sectors = [
  'All',
  'Sustainability',
  'Education',
  'Events',
  'Beauty',
  'Logistics',
  'Finance',
  'Home services',
  'Creative',
  'Automotive',
];

const ideas = [
  { title: 'Zero-waste refill store', sector: 'Sustainability', icon: 'ti-recycle', cost: '$1k–3k', gradient: 'linear-gradient(155deg,#639922 0%,#173404 70%,#000 100%)', tag: '#c0dd97' },
  { title: 'Online exam prep tutoring', sector: 'Education', icon: 'ti-school', cost: '$0–500', gradient: 'linear-gradient(155deg,#EF9F27 0%,#633806 70%,#000 100%)', tag: '#fac775' },
  { title: 'Micro-wedding planning studio', sector: 'Events', icon: 'ti-confetti', cost: '$3k–8k', gradient: 'linear-gradient(155deg,#D4537E 0%,#4b1528 70%,#000 100%)', tag: '#f4c0d1' },
  { title: 'Mobile lash and brow studio', sector: 'Beauty', icon: 'ti-mood-happy', cost: '$500–2k', gradient: 'linear-gradient(155deg,#4a3f9e 0%,#171334 70%,#000 100%)', tag: '#cecbf6' },
  { title: 'Same-day local courier service', sector: 'Logistics', icon: 'ti-truck', cost: '$5k–12k', gradient: 'linear-gradient(155deg,#0F6E56 0%,#04342C 70%,#000 100%)', tag: '#9fe1cb' },
  { title: 'Freelance bookkeeping service', sector: 'Finance', icon: 'ti-building-bank', cost: '$0–1k', gradient: 'linear-gradient(155deg,#185FA5 0%,#042C53 70%,#000 100%)', tag: '#b5d4f4' },
  { title: 'Short-term rental cleaning crew', sector: 'Home services', icon: 'ti-home-2', cost: '$2k–5k', gradient: 'linear-gradient(155deg,#D85A30 0%,#4a1b0c 70%,#000 100%)', tag: '#f5c4b3' },
  { title: 'Drone videography for real estate', sector: 'Creative', icon: 'ti-camera', cost: '$1k–4k', gradient: 'linear-gradient(155deg,#E24B4A 0%,#501313 70%,#000 100%)', tag: '#f7c1c1' },
  { title: 'Mobile car detailing business', sector: 'Automotive', icon: 'ti-car', cost: '$3k–9k', gradient: 'linear-gradient(155deg,#5f5e5a 0%,#2c2c2a 70%,#000 100%)', tag: '#d3d1c7' },
];

export default function ExploreIdeas() {
  const [search, setSearch] = useState('');
  const [activeSector, setActiveSector] = useState('All');

  const filteredIdeas = useMemo(() => {
    return ideas.filter((idea) => {
      const matchesSector = activeSector === 'All' || idea.sector === activeSector;
      const matchesSearch = idea.title.toLowerCase().includes(search.toLowerCase());
      return matchesSector && matchesSearch;
    });
  }, [search, activeSector]);

  return (
    <>
      <section style={styles.hero}>
        <svg width="100%" height="100%" style={styles.stars}>
          <circle cx="8%" cy="10%" r="1.1" fill="#fff" opacity="0.6" />
          <circle cx="92%" cy="15%" r="1" fill="#fff" opacity="0.5" />
          <circle cx="20%" cy="8%" r="0.8" fill="#fff" opacity="0.4" />
          <circle cx="80%" cy="6%" r="0.9" fill="#fff" opacity="0.45" />
        </svg>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Explore business ideas</h1>
          <p style={styles.heroSubtitle}>
            1000+ ideas across every sector you can think of, and some you can't yet.
          </p>
          <div style={styles.searchWrap}>
            <i className="ti ti-search" style={styles.searchIcon}></i>
            <input
              placeholder="Search ideas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>
      </section>

      <section style={styles.filterSection}>
        <div style={styles.filterRow}>
          {sectors.map((sector) => (
            <span
              key={sector}
              onClick={() => setActiveSector(sector)}
              style={sector === activeSector ? styles.pillActive : styles.pill}
            >
              {sector}
            </span>
          ))}
        </div>
      </section>

      <section style={styles.gridSection}>
        {filteredIdeas.length === 0 ? (
          <div style={styles.emptyState}>No ideas match your search yet — try another term or sector.</div>
        ) : (
          <div style={styles.grid}>
            {filteredIdeas.map((idea) => (
              <a key={idea.title} href="#" style={{ ...styles.card, background: idea.gradient }}>
                <i className={`ti ${idea.icon}`} style={styles.cardIcon}></i>
                <div style={styles.cardScrim}></div>
                <div style={styles.costPill}>{idea.cost}</div>
                <div style={styles.cardContent}>
                  <span style={{ ...styles.cardTag, color: idea.tag }}>{idea.sector}</span>
                  <div style={styles.cardTitle}>{idea.title}</div>
                </div>
              </a>
            ))}
          </div>
        )}

        {filteredIdeas.length > 0 && (
          <div style={styles.loadMoreWrap}>
            <button style={styles.loadMoreBtn}>Load more ideas</button>
          </div>
        )}
      </section>
    </>
  );
}

const styles = {
  hero: {
    position: 'relative',
    background: '#000',
    padding: '70px 44px 30px',
    overflow: 'hidden',
    textAlign: 'center',
  },
  stars: { position: 'absolute', inset: 0 },
  heroContent: { position: 'relative' },
  heroTitle: {
    color: '#fff',
    fontSize: '32px',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
    marginBottom: '12px',
  },
  heroSubtitle: {
    color: 'var(--color-text-secondary)',
    fontSize: '14px',
    maxWidth: '440px',
    margin: '0 auto 26px',
  },
  searchWrap: {
    maxWidth: '440px',
    margin: '0 auto',
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '15px',
    color: '#8b86a0',
  },
  searchInput: {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: '12px',
    padding: '12px 16px 12px 42px',
    color: '#fff',
    fontSize: '13px',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    boxSizing: 'border-box',
  },

  filterSection: {
    position: 'relative',
    background: '#000',
    padding: '16px 44px 20px',
  },
  filterRow: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  pill: {
    background: 'rgba(255,255,255,0.06)',
    color: '#c9c5db',
    border: '0.5px solid rgba(255,255,255,0.14)',
    fontSize: '12px',
    padding: '7px 16px',
    borderRadius: '999px',
    cursor: 'pointer',
  },
  pillActive: {
    background: '#fff',
    color: '#171334',
    fontSize: '12px',
    fontWeight: '600',
    padding: '7px 16px',
    borderRadius: '999px',
    cursor: 'pointer',
    border: 'none',
  },

  gridSection: {
    position: 'relative',
    background: '#000',
    padding: '20px 44px 70px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  },
  emptyState: {
    textAlign: 'center',
    color: 'var(--color-text-muted)',
    fontSize: '14px',
    padding: '60px 20px',
  },
  card: {
    position: 'relative',
    height: '190px',
    borderRadius: '18px',
    overflow: 'hidden',
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'block',
  },
  cardIcon: {
    position: 'absolute',
    top: '55%',
    left: '78%',
    transform: 'translate(-50%, -50%)',
    fontSize: '80px',
    color: 'rgba(255,255,255,0.12)',
  },
  cardScrim: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 65%)',
  },
  costPill: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    color: '#fff',
    fontSize: '10.5px',
    fontWeight: '600',
    padding: '4px 10px',
    borderRadius: '999px',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '20px',
  },
  cardTag: {
    fontSize: '10px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  cardTitle: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
    marginTop: '6px',
    lineHeight: '1.3',
  },
  loadMoreWrap: {
    textAlign: 'center',
    marginTop: '30px',
  },
  loadMoreBtn: {
    background: 'rgba(255,255,255,0.06)',
    color: '#e2e0ef',
    border: '0.5px solid rgba(255,255,255,0.16)',
    padding: '11px 26px',
    borderRadius: '9px',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
  },
};