export default function Logo({ fontSize = 34, showTagline = false, layout = 'stacked', color = '#fff' }) {
  const scale = fontSize / 34;

  const wordmark = (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        justifyContent: 'center',
        fontFamily: 'var(--font-serif)',
        fontSize: `${fontSize}px`,
        color,
        fontWeight: 500,
        lineHeight: 1,
      }}
    >
      <span>Ind</span>
      <span
        style={{
          position: 'relative',
          display: 'inline-block',
          width: `${20 * scale}px`,
          height: '1em',
          verticalAlign: 'baseline',
        }}
      >
        <svg
          width={20 * scale}
          height={20 * scale}
          viewBox="0 0 20 20"
          style={{ position: 'absolute', left: '50%', bottom: 0, transform: 'translateX(-50%)' }}
        >
          <path d="M 10 20 L 10 3" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M 10 12 Q 4 12 2 8" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M 10 15 Q 16 15 18 11" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
        <svg
          width={20 * scale}
          height={20 * scale}
          viewBox="0 0 20 20"
          style={{ position: 'absolute', left: '50%', bottom: '0.58em', transform: 'translateX(-50%)' }}
        >
          <circle cx="10" cy="4" r="3.4" fill="var(--color-accent-light)" />
          <circle cx="15" cy="7.5" r="3.4" fill="var(--color-accent-light)" />
          <circle cx="13.2" cy="13" r="3.4" fill="var(--color-accent-light)" />
          <circle cx="6.8" cy="13" r="3.4" fill="var(--color-accent-light)" />
          <circle cx="5" cy="7.5" r="3.4" fill="var(--color-accent-light)" />
          <circle cx="10" cy="9" r="3.6" fill="var(--color-accent-light)" />
        </svg>
      </span>
      <span>go</span>
    </div>
  );

  if (!showTagline) {
    return wordmark;
  }

  if (layout === 'beside') {
    return (
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        {wordmark}
        <span
          style={{
            color: 'var(--color-text-secondary)',
            fontSize: `${fontSize * 0.5}px`,
            letterSpacing: '0.5px',
            fontWeight: 300,
          }}
        >
          Brain Box
        </span>
      </div>
    );
  }

  // stacked layout (default)
  return (
    <div style={{ display: 'inline-block', textAlign: 'center' }}>
      {wordmark}
      <div
        style={{
          color: 'var(--color-text-secondary)',
          fontSize: `${fontSize * 0.35}px`,
          letterSpacing: '0.5px',
          marginTop: `${fontSize * 0.24}px`,
        }}
      >
        BRAIN BOX
      </div>
    </div>
  );
}