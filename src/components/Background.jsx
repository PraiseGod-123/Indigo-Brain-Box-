import StarField from './StarField';

export default function Background({ activeColor, showGlow }) {
  return (
    <div style={styles.wrapper} aria-hidden="true">
      <div style={{ ...styles.colorLayer, background: activeColor }}></div>
      <div style={{ ...styles.glow, opacity: showGlow ? 1 : 0 }}></div>
      <StarField count={20} brightness={1.3} />
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
};