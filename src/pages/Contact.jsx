export default function Contact() {
  return (
    <section style={styles.section}>
      <h1 style={styles.title}>Get in touch</h1>
      <p style={styles.subtitle}>Questions, feedback, or partnership ideas — we'd love to hear from you</p>

      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your name" style={styles.input} />
        <input type="email" placeholder="Your email" style={styles.input} />
        <textarea placeholder="Your message" rows={5} style={{ ...styles.input, resize: 'vertical' }} />
        <button type="submit" style={styles.btn}>Send message</button>
      </form>
    </section>
  );
}

const styles = {
  section: {
    maxWidth: '520px',
    margin: '0 auto',
    padding: '120px 32px 100px',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: '34px',
    fontWeight: '500',
    color: '#fff',
    marginBottom: '10px',
  },
  subtitle: {
    color: 'var(--color-text-secondary)',
    fontSize: '15px',
    marginBottom: '40px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  input: {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.14)',
    borderRadius: '10px',
    padding: '13px 16px',
    color: '#fff',
    fontSize: '14px',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
  },
  btn: {
    background: 'var(--color-accent)',
    color: '#fff',
    border: 'none',
    padding: '13px',
    borderRadius: '10px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    marginTop: '6px',
  },
};