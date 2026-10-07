import { Phone } from 'lucide-react';

export function ContactBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="toplinks">
          <a href="tel:6281336760" className="flex items-center gap-1.5"><Phone size={13} color="var(--brand-cyan)" aria-hidden="true" /> <span>6281336760</span></a>
          <span className="email-placeholder">Email: [add verified address]</span>
          <a className="top-website" href="https://www.theedumatrix.com" target="_blank" rel="noreferrer">www.theedumatrix.com</a>
        </div>
        <div className="topmeta">Learning for possibility, built with practice.</div>
      </div>
    </div>
  );
}
