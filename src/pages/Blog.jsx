import StarField from '../components/StarField';

// Articles aren't written yet, so cards show "Coming soon" instead of linking nowhere.
// When a post is ready, give it a `slug` and turn the card into a <Link to={`/blog/${slug}`}>.
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
      <section className="page-hero" style={{ textAlign: 'left' }}>
        <StarField count={16} brightness={1.15} />
        <h1 className="page-hero-title">The blog</h1>
        <p className="page-hero-subtitle" style={{ margin: 0 }}>Ideas worth reading before you start.</p>
      </section>

      <section className="page-section" style={{ paddingBottom: '70px' }}>
        <div className="blog-grid">
          {large.map((post) => (
            <PostCard key={post.title} post={post} className="blog-large" height={420} />
          ))}

          <div style={styles.smallStack}>
            {small.map((post) => (
              <PostCard key={post.title} post={post} height={195} />
            ))}
          </div>

          {medium.map((post) => (
            <PostCard key={post.title} post={post} height={230} />
          ))}
        </div>
      </section>
    </>
  );
}

function PostCard({ post, height, className = '' }) {
  return (
    <article className={`media-card ${className}`} style={{ height: `${height}px`, background: post.gradient }}>
      <i className={`ti ${post.icon}`} style={styles.cardIcon} aria-hidden="true"></i>
      <div style={styles.cardScrim}></div>
      <div style={styles.soonPill}>Coming soon</div>
      <div style={styles.cardContent}>
        <span style={styles.cardTag}>{post.category}</span>
        <h2 style={styles.cardTitle}>{post.title}</h2>
      </div>
    </article>
  );
}

const styles = {
  smallStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
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
  soonPill: {
    position: 'absolute',
    top: '18px',
    right: '18px',
    background: 'rgba(0,0,0,0.35)',
    border: '1px solid rgba(255,255,255,0.2)',
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