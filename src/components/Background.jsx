export default function Background({ activeColor, showGlow }) {
  return (
    <div style={styles.wrapper}>
      <div style={{ ...styles.colorLayer, background: activeColor }}></div>
      <div style={{ ...styles.glow, opacity: showGlow ? 1 : 0 }}></div>
      <svg width="100%" height="100%" style={styles.stars}>
        <circle cx="6%" cy="6%" r="1.3" fill="#fff" opacity="0.85" />
        <circle cx="18%" cy="4%" r="1" fill="#fff" opacity="0.6" />
        <circle cx="32%" cy="8%" r="1.2" fill="#fff" opacity="0.75" />
        <circle cx="48%" cy="3%" r="0.9" fill="#fff" opacity="0.5" />
        <circle cx="64%" cy="6%" r="1.3" fill="#fff" opacity="0.8" />
        <circle cx="80%" cy="4%" r="1" fill="#fff" opacity="0.6" />
        <circle cx="92%" cy="9%" r="1.1" fill="#fff" opacity="0.7" />
        <circle cx="10%" cy="20%" r="0.9" fill="#fff" opacity="0.5" />
        <circle cx="88%" cy="18%" r="1.1" fill="#fff" opacity="0.7" />
        <circle cx="4%" cy="40%" r="0.9" fill="#fff" opacity="0.5" />
        <circle cx="95%" cy="42%" r="1" fill="#fff" opacity="0.6" />
        <circle cx="15%" cy="60%" r="0.9" fill="#fff" opacity="0.5" />
        <circle cx="85%" cy="62%" r="1" fill="#fff" opacity="0.6" />
        <circle cx="30%" cy="80%" r="0.9" fill="#fff" opacity="0.5" />
        <circle cx="70%" cy="82%" r="1" fill="#fff" opacity="0.55" />
        <circle cx="50%" cy="92%" r="0.9" fill="#fff" opacity="0.45" />
        <circle cx="25%" cy="95%" r="0.9" fill="#fff" opacity="0.45" />
        <circle cx="60%" cy="98%" r="1" fill="#fff" opacity="0.5" />
        <circle cx="40%" cy="35%" r="0.8" fill="#fff" opacity="0.4" />
        <circle cx="72%" cy="45%" r="0.8" fill="#fff" opacity="0.4" />
        <circle cx="22%" cy="45%" r="0.8" fill="#fff" opacity="0.4" />
      </svg>
    </div>
  );
}

const styles = {
  wrapper: {
    position: 'fixed',
    inset: 0,
    zIndex: -1,
    overflow: 'hidden',
  },
  colorLayer: {
    position: 'absolute',
    inset: 0,
    transition: 'background 0.6s ease',
  },
  glow: {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '900px',
    height: '900px',
    background: 'radial-gradient(circle, rgba(106,95,214,0.35) 0%, rgba(106,95,214,0) 70%)',
    transition: 'opacity 0.6s ease',
    pointerEvents: 'none',
  },
  stars: {
    position: 'absolute',
    inset: 0,
  },
};