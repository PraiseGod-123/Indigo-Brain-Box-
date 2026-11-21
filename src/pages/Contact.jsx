import { useState } from 'react';
import StarField from '../components/StarField';
import { sendContactMessage, isValidEmail } from '../lib/api';
import { site } from '../config/site';

const empty = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: null, text: '' });
  const [submitting, setSubmitting] = useState(false);

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Enter your name.';
    if (!isValidEmail(form.email)) next.email = 'Enter a valid email address.';
    if (form.message.trim().length < 10) next.message = 'Tell us a little more (at least 10 characters).';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, text: '' });
    if (!validate()) return;

    setSubmitting(true);
    try {
      await sendContactMessage({ ...form, name: form.name.trim(), email: form.email.trim() });
      setForm(empty);
      setStatus({ type: 'success', text: "Thanks! Your message is on its way. We'll get back to you soon." });
    } catch (err) {
      const fallback = site.contactEmail ? ` In the meantime, email us at ${site.contactEmail}.` : '';
      setStatus({ type: 'error', text: err.message + fallback });
    } finally {
      setSubmitting(false);
    }
  };

  const field = (name, label, props = {}) => (
    <div className="field">
      <label htmlFor={`contact-${name}`} className="field-label">{label}</label>
      {props.as === 'textarea' ? (
        <textarea
          id={`contact-${name}`}
          name={name}
          rows={5}
          className="field-input"
          value={form[name]}
          onChange={update(name)}
          aria-invalid={errors[name] ? 'true' : 'false'}
          aria-describedby={errors[name] ? `contact-${name}-error` : undefined}
        />
      ) : (
        <input
          id={`contact-${name}`}
          name={name}
          className="field-input"
          value={form[name]}
          onChange={update(name)}
          aria-invalid={errors[name] ? 'true' : 'false'}
          aria-describedby={errors[name] ? `contact-${name}-error` : undefined}
          {...props}
        />
      )}
      {errors[name] && <div id={`contact-${name}-error`} className="field-error">{errors[name]}</div>}
    </div>
  );

  return (
    <section style={styles.section}>
      <StarField count={6} />
      <div style={styles.inner}>
        <h1 style={styles.title}>Get in touch</h1>
        <p style={styles.subtitle}>Questions, feedback, or partnership ideas? We'd love to hear from you.</p>

        <form onSubmit={handleSubmit} noValidate style={styles.form}>
          {status.type && (
            <div
              className={`form-alert ${status.type === 'success' ? 'form-alert-success' : 'form-alert-error'}`}
              role={status.type === 'success' ? 'status' : 'alert'}
            >
              {status.text}
            </div>
          )}
          {field('name', 'Your name', { type: 'text', autoComplete: 'name' })}
          {field('email', 'Your email', { type: 'email', autoComplete: 'email', placeholder: 'you@example.com' })}
          {field('message', 'Your message', { as: 'textarea' })}
          <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
            {submitting ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative',
    overflow: 'hidden',
    background: '#000',
  },
  inner: {
    position: 'relative',
    maxWidth: '520px',
    margin: '0 auto',
    padding: '100px 20px 100px',
    textAlign: 'center',
  },
  title: {
    fontFamily: 'var(--font-serif)',
    fontSize: 'clamp(28px, 6vw, 34px)',
    fontWeight: '500',
    color: '#fff',
    marginBottom: '10px',
  },
  subtitle: {
    color: 'var(--color-text-secondary)',
    fontSize: '15px',
    lineHeight: '1.6',
    marginBottom: '36px',
  },
  form: {
    textAlign: 'left',
  },
};