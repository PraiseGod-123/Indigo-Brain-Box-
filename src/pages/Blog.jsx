const posts = [
  {
    title: 'Too many interests, no idea where to start?',
    category: 'Getting started',
    icon: 'ti-bulb',
    gradient: 'linear-gradient(155deg,#4a3f9e 0%,#171334 60%,#000 100%)',
    size: 'large',
  },
  {
    title: 'Does your idea have a real market?',
    category: 'Strategy',
    icon: 'ti-chart-line',
    gradient: 'linear-gradient(155deg,#1D9E75 0%,#0a3d2c 60%,#000 100%)',
    size: 'small',
  },
  {
    title: 'Your real first 90 day costs',
    category: 'Finance',
    icon: 'ti-calculator',
    gradient: 'linear-gradient(155deg,#D85A30 0%,#4a1b0c 60%,#000 100%)',
    size: 'small',
  },
  {
    title: 'From idea to launch in 6 weeks',
    category: 'Roadmap',
    icon: 'ti-route',
    gradient: 'linear-gradient(155deg,#993556 0%,#2e0f1c 60%,#000 100%)',
    size: 'medium',
  },
  {
    title: 'Finding your first 100 customers',
    category: 'Marketing',
    icon: 'ti-target',
    gradient: 'linear-gradient(155deg,#0F6E56 0%,#0a2620 60%,#000 100%)',
    size: 'medium',
  },
];

export default function Blog() {
  const large = posts.filter((p) => p.size === 'large');
  const small = posts.filter((p) => p.size === 'small');
  const medium = posts.filter((p) => p.size === 'medium');

  return (
    <>
      <section style={styles.hero}>
        <svg width="100%" height="100%" style={styles.stars}>
          <circle cx="6%" cy="8%" r="1.2" fill="#fff" opacity="0.7" />
          <circle cx="18%" cy="4%" r="1" fill="#fff" opacity="0.55" />
          <circle cx="32%" cy="10%" r="1.1" fill="#fff" opacity="0.6" />
          <circle cx="48%" cy="3%" r="0.9" fill="#fff" opacity="0.5" />
          <circle cx="64%" cy="8%" r="1.2" fill="#fff" opacity="0.65" />
          <circle cx="80%" cy="5%" r="1" fill="#fff" opacity="0.55" />
          <circle cx="92%" cy="12%" r="1.1" fill="#fff" opacity="0.6" />
          <circle cx="10%" cy="22%" r="0.8" fill="#fff" opacity="0.4" />
          <circle cx="88%" cy="20%" r="1" fill="#fff" opacity="0.5" />
          <circle cx="4%" cy="40%" r="0.9" fill="#fff" opacity="0.4" />
          <circle cx="95%" cy="42%" r="1" fill="#fff" opacity="0.5" />
          <circle cx="15%" cy="60%" r="0.9" fill="#fff" opacity="0.4" />
          <circle cx="85%" cy="62%" r="1" fill="#fff" opacity="0.5" />
          <circle cx="30%" cy="80%" r="0.9" fill="#fff" opacity="0.4" />
          <circle cx="70%" cy="82%" r="1" fill="#fff" opacity="0.45" />
          <circle cx="50%" cy="92%" r="0.9" fill="#fff" opacity="0.4" />
        </svg>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>The blog</h1>
          <p style={styles.heroSubtitle}>Ideas worth reading before you start.</p>
        </div>
      </section>

      <section style={styles.gridSection}>
        <div style={styles.grid}>
          {large.map((post) => (
            <PostCard key={post.title} post={post} style={styles.largeCard} />
          ))}

          <div style={styles.smallStack}>
            {small.map((post) => (
              <PostCard key={post.title} post={post} style={styles.smallCard} />
            ))}
          </div>

          {medium.map((post) => (
            <PostCard key={post.title} post={post} style={styles.mediumCard} />
          ))}
        </div>
      </section>
    </>
  );
}

function PostCard({ post, style }) {
  return (
    <a href="#" style={{ ...styles.card, ...style, background: post.gradient }}>
      <i className={`ti ${post.icon}`} style={styles.cardIcon}></i>
      <div style={styles.cardScrim}></div>
      <div style={styles.cardContent}>
        <span style={styles.cardTag}>{post.category}</span>
        <div style={styles.cardTitle}>{post.title}</div>
      </div>
    </a>
  );
}

const styles = {
  hero: {
    position: 'relative',
    background: '#000',
    padding: '70px 44px 40px',
    overflow: 'hidden',
  },
  stars: {
    position: 'absolute',
    inset: 0,
  },
  heroContent: {
    position: 'relative',
  },
  heroTitle: {
    color: '#fff',
    fontSize: '32px',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
    marginBottom: '8px',
  },
  heroSubtitle: {
    color: 'var(--color-text-secondary)',
    fontSize: '14px',
  },

  gridSection: {
    position: 'relative',
    background: '#000',
    padding: '20px 44px 70px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr',
    gap: '18px',
  },
  smallStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },

  card: {
    position: 'relative',
    borderRadius: '20px',
    overflow: 'hidden',
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'block',
  },
  largeCard: {
    height: '420px',
    gridColumn: '1',
    gridRow: '1',
  },
  smallCard: {
    height: '195px',
  },
  mediumCard: {
    height: '230px',
  },
  cardIcon: {
    position: 'absolute',
    top: '50%',
    left: '78%',
    transform: 'translate(-50%, -50%)',
    fontSize: '100px',
    color: 'rgba(255,255,255,0.1)',
  },
  cardScrim: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 70%)',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '24px',
  },
  cardTag: {
    background: 'rgba(255,255,255,0.15)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    color: '#fff',
    fontSize: '10.5px',
    fontWeight: '600',
    padding: '4px 12px',
    borderRadius: '999px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  cardTitle: {
    color: '#fff',
    fontSize: '18px',
    fontWeight: '500',
    fontFamily: 'var(--font-serif)',
    marginTop: '12px',
    lineHeight: '1.3',
  },
};