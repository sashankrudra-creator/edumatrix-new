import type { LucideIcon } from 'lucide-react';
import { skills } from '@/data/content';
import { Reveal } from './Reveal';
import { SectionHeader } from './SectionHeader';

export function SkillCard({ title, text, icon: Icon, index = 0 }: { title: string; text: string; icon: LucideIcon; index?: number }) {
  return (
    <Reveal as="li" className={`skill-card tone-${index % 4}`} delay={(index % 5) * 60}>
      <span className="skill-icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
      <h3>{title}</h3>
      <p>{text}</p>
    </Reveal>
  );
}

export function SkillsSection() {
  return (
    <section className="section section-tint" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader id="skills-title" centered label="What students develop"
          title="More than marks: skills that last."
          copy="Every program is designed to grow how students think, create and communicate, alongside what they know." />
        <ul className="skill-grid">
          {skills.map((s, i) => <SkillCard key={s.title} {...s} index={i} />)}
        </ul>
      </div>
    </section>
  );
}
