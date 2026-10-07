import { journey } from '@/data/content';
import { SectionHeader } from './SectionHeader';
import { Reveal, useInView } from './Reveal';

export function LearningJourney() {
  const [ref, seen] = useInView<HTMLOListElement>(0.2);
  return (
    <section className="section journey-section" aria-labelledby="journey-title">
      <div className="container">
        <SectionHeader id="journey-title" centered label="The Edumatrix learning journey"
          title="From first question to future-ready."
          copy="Edumatrix is not a single course. It is a complete path that takes a learner from curiosity to capability." />
        <ol ref={ref} className={`journey ${seen ? 'is-visible' : ''}`}>
          <span className="journey-line" aria-hidden="true"><span className="journey-line-fill" /></span>
          {journey.map(({ title, text, icon: Icon }, i) => (
            <li key={title} className={`journey-step ${i === journey.length - 1 ? 'is-final' : ''}`} style={{ ['--step' as string]: i }}>
              <span className="journey-node"><Icon size={28} strokeWidth={1.7} aria-hidden="true" /></span>
              <span className="journey-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Compact four-step flow used on program pages. */
export function LearningFlow({ steps }: { steps: { title: string; text: string }[] }) {
  const [ref, seen] = useInView<HTMLOListElement>(0.2);
  return (
    <ol ref={ref} className={`flow ${seen ? 'is-visible' : ''}`}>
      {steps.map((s, i) => (
        <li key={s.title} style={{ ['--step' as string]: i }}>
          <span className="flow-num">{i + 1}</span>
          <strong>{s.title}</strong>
          <span>{s.text}</span>
        </li>
      ))}
    </ol>
  );
}
