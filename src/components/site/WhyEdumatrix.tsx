import { whyPoints } from '@/data/content';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function WhyEdumatrix() {
  return (
    <section className="section" aria-labelledby="why-title">
      <div className="container">
        <div className="why-top">
          <SectionHeader id="why-title" label="Why Edumatrix"
            title="Education that holds theory and practice together."
            copy="An approach grounded in practical learning, student-centred support and technology-enabled education." />
          <Reveal className="why-badge">
            <strong>Over 25 years</strong>
            <span>of experience in education and skill development.</span>
          </Reveal>
        </div>
        <ul className="why-grid">
          {whyPoints.map(({ title, text, icon: Icon }, i) => (
            <Reveal as="li" key={title} className="why-card" delay={(i % 4) * 60}>
              <span className="why-icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
