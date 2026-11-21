import { useState } from 'react';

// Password field with an accessible show/hide button.
export default function PasswordInput({ id, invalid, describedBy, ...props }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="password-wrap">
      <input
        id={id}
        type={visible ? 'text' : 'password'}
        className="field-input"
        aria-invalid={invalid ? 'true' : 'false'}
        aria-describedby={describedBy}
        {...props}
      />
      <button
        type="button"
        className="password-toggle"
        onClick={() => setVisible((v) => !v)}
        aria-label={visible ? 'Hide password' : 'Show password'}
        aria-pressed={visible}
      >
        <i className={`ti ${visible ? 'ti-eye' : 'ti-eye-off'}`} aria-hidden="true"></i>
      </button>
    </div>
  );
}