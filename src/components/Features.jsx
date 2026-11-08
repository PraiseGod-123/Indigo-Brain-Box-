const features = [
  {
    icon: 'ti-bulb',
    color: '#c3bcf5',
    title: '1000+ business ideas',
    description: 'Sorted by sector and interest',
  },
  {
    icon: 'ti-route',
    color: '#9fe1cb',
    title: 'Step by step roadmap',
    description: 'From idea to launch',
  },
  {
    icon: 'ti-calculator',
    color: '#f0997b',
    title: 'Cost estimates',
    description: "Know what you'll need to start",
  },
];

export default function Features() {
  return (
    <section style={styles.section}>
      <div style={styles.grid}>
        {features.map((f, i) => (
          <div key={i} style={styles.card}>
            <i className={`ti ${f.icon}`} style={{ ...styles.icon, color: f.color }}></i>
            <h3 style={styles.title}>{f.title}</h3>
            <p style={styles.description}>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '0 40px 40px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
 card: {
    background: 'rgba(255,255,255,0.055)',
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: '14px',
    padding: '28px 24px',
    textAlign: 'left',
    boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
    transition: 'transform 0.15s ease, border-color 0.15s ease',
  },
  icon: {
    fontSize: '24px',
    marginBottom: '16px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '44px',
    height: '44px',
    borderRadius: '10px',
    background: 'rgba(255,255,255,0.06)',
  },
  title: {
    color: 'var(--color-text-primary)',
    fontSize: '15px',
    fontWeight: '500',
    marginBottom: '6px',
  },
  description: {
    color: 'var(--color-text-muted)',
    fontSize: '13.5px',
    lineHeight: '1.5',
  },
};