import { useEffect, useMemo, useRef, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const questions = ['What programs do you offer?', 'Tell me about Robotics.', 'What solutions do you provide for schools?', 'How can I contact Edumatrix?'];

export function ChatbotButton() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');
  const [hint, setHint] = useState(false);
  const launchRef = useRef<HTMLButtonElement>(null);

  const answer = useMemo(() => {
    if (selected.includes('Robotics')) return 'Robotics introduces students to automation, coding and problem solving through hands-on projects and school-ready kits. Explore the Robotics program for more.';
    if (selected.includes('schools')) return 'Edumatrix offers school ERP, teacher development and recruitment, interactive panels, branding support, and science expos. Visit Institutional B2B to explore.';
    if (selected.includes('contact')) return 'You can call 6281336760 or visit www.theedumatrix.com. The contact form is a frontend demo and does not send messages.';
    if (selected) return 'Programs span STEM and innovation, academic mastery, competitive preparation, languages, student support and institutional services. Browse all programs to find a path.';
    return '';
  }, [selected]);

  // A single, quiet nudge after a few seconds; dismissed as soon as the assistant is opened.
  useEffect(() => {
    const t = window.setTimeout(() => setHint(true), 6000);
    return () => window.clearTimeout(t);
  }, []);
  useEffect(() => { if (open) setHint(false); }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); launchRef.current?.focus(); } };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      {hint && !open && <div className="chat-hint" aria-hidden="true">Ask Edumatrix</div>}
      <button ref={launchRef} className={`chat-launch ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)}
        aria-label={open ? 'Close Edumatrix Assistant' : 'Ask Edumatrix'} aria-expanded={open} title="Ask Edumatrix">
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
      {open && (
        <section className="chat-window" aria-label="Edumatrix Assistant" role="dialog" aria-modal="false">
          <div className="chat-head">
            <strong>Edumatrix Assistant</strong>
            <button onClick={() => { setOpen(false); launchRef.current?.focus(); }} aria-label="Close assistant"><X size={18} /></button>
          </div>
          <div className="chat-body">
            <div className="chat-greeting">Hi! How can I help you explore Edumatrix programs and solutions?</div>
            <div className="chat-options">{questions.map(q => <button key={q} onClick={() => setSelected(q)}>{q}</button>)}</div>
            {answer && <div className="chat-response" aria-live="polite">{answer}</div>}
            <p className="small-note">Local scripted assistant · no AI service connected</p>
          </div>
        </section>
      )}
    </>
  );
}
