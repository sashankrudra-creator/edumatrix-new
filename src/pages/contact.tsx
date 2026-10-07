import { useState, type FormEvent } from 'react';
import { ArrowRight, Globe2, Phone } from 'lucide-react';
import { programs } from '@/data/programs';
import { PageMeta } from '@/components/site/PageMeta';
import { PageHero } from '@/components/site/PageHero';
import { SectionHeader } from '@/components/site/SectionHeader';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true); }
  return (
    <>
      <PageMeta title="Contact" description="Contact Edumatrix by phone or website, or use the frontend demo enquiry form." />
      <main>
        <PageHero label="Start a conversation" title="Let’s talk about what learning can do.">
          For program enquiries, student support and school solutions, reach Edumatrix through the verified contact details below.
        </PageHero>
        <section className="section">
          <div className="container contact-grid">
            <div>
              <SectionHeader label="Contact details" title="A clear next step." copy="Choose the contact route that works for you." />
              <div className="contact-method"><span className="contact-icon"><Phone size={18} aria-hidden="true" /></span><div><small>Phone</small><a href="tel:6281336760">6281336760</a></div></div>
              <div className="contact-method"><span className="contact-icon"><Globe2 size={18} aria-hidden="true" /></span><div><small>Website</small><a href="https://www.theedumatrix.com" target="_blank" rel="noreferrer">www.theedumatrix.com</a></div></div>
              <p className="small-note">No address or email contact has been listed because verified details were not provided.</p>
            </div>
            <div>
              <div className="demo-notice">Frontend demo: this form does not send or store your message. Submitting displays an on-page confirmation only.</div>
              {submitted ? (
                <div className="success-note" role="status" style={{ marginTop: 18 }}><strong>Thank you for your interest.</strong><br />This is a frontend-only demo; your message has not been sent. Please call 6281336760 or visit www.theedumatrix.com to contact Edumatrix.</div>
              ) : (
                <form className="contact-form" onSubmit={submit} style={{ marginTop: 20 }}>
                  <div className="form-field"><label htmlFor="name">Name</label><input id="name" name="name" required autoComplete="name" /></div>
                  <div className="form-field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" /></div>
                  <div className="form-field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
                  <div className="form-field"><label htmlFor="organization">Organization / School</label><input id="organization" name="organization" autoComplete="organization" /></div>
                  <div className="form-field full"><label htmlFor="program">Interested program</label>
                    <select id="program" name="program" defaultValue=""><option value="">Select a topic</option>{programs.map(p => <option key={p.slug} value={p.title}>{p.title}</option>)}</select></div>
                  <div className="form-field full"><label htmlFor="message">Message</label><textarea id="message" name="message" required /></div>
                  <div className="form-field full"><button className="button" type="submit">Show demo confirmation <ArrowRight size={15} /></button></div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
