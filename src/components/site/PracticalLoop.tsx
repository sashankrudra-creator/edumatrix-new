import { practicalLoop } from '@/data/content';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

export function PracticalLoop({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? 'section loop-section compact' : 'section loop-section'} aria-labelledby="loop-title">
      <div className="container">
        <SectionHeader id="loop-title" label="Practical learning" centered
          title="Students don’t just learn. They build, present and improve."
          copy="An experiential cycle turns knowledge into skill. Here is how it looks in robotics." />
        <ol className="loop">
          {practicalLoop.map(({ title, text, icon: Icon }, i) => (
            <Reveal as="li" key={title} className="loop-step" delay={i * 90}>
              <span className="loop-icon"><Icon size={22} aria-hidden="true" /></span>
              <strong>{title}</strong>
              <span>{text}</span>
            </Reveal>
          ))}
        </ol>
        <p className="loop-return">
          <span aria-hidden="true">↺</span> Improvement feeds the next round of learning.
        </p>
      </div>
    </section>
  );
}
