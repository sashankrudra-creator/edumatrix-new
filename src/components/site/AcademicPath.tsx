import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { academicPath } from '@/data/content';
import { SectionHeader } from './SectionHeader';
import { Reveal, useInView } from './Reveal';

export function AcademicPath({ showQuote = true, tint = false }: { showQuote?: boolean; tint?: boolean }) {
  const [ref, seen] = useInView<HTMLOListElement>(0.2);
  return (
    <section className={`section ${tint ? 'section-tint' : ''}`} aria-labelledby="path-title">
      <div className="container">
        <SectionHeader id="path-title" label="Academic excellence"
          title="Strong foundations. Clearer next steps."
          copy="Concept-focused learning, structured practice and assessment support students across core subjects and competitive preparation." />
        <ol ref={ref} className={`path ${seen ? 'is-visible' : ''}`}>
          <span className="path-line" aria-hidden="true"><span className="path-line-fill" /></span>
          {academicPath.map(({ title, text, icon: Icon, slug }, i) => (
            <li key={title} className="path-step" style={{ ['--step' as string]: i }}>
              <span className="path-node"><Icon size={22} aria-hidden="true" /></span>
              <div className="path-card">
                <span className="path-num">Step {i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                {slug && <Link href={`/program/${slug}`} className="text-link">Explore <ArrowRight size={14} aria-hidden="true" /></Link>}
              </div>
            </li>
          ))}
        </ol>
        {showQuote && (
          <Reveal className="quote-strip">
            <blockquote>Learning works harder when understanding comes before the answer.</blockquote>
            <small>Concepts · Practice · Reflection</small>
          </Reveal>
        )}
      </div>
    </section>
  );
}
