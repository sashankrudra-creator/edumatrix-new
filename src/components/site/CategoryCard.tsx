import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { programsIn, type Ecosystem } from '@/data/content';
import { ProgramMotif } from './ProgramMotif';
import { Reveal } from './Reveal';

export function CategoryCard({ eco, index = 0 }: { eco: Ecosystem; index?: number }) {
  const Icon = eco.icon;
  const items = programsIn(eco.key);
  const shown = items.slice(0, 5);
  return (
    <Reveal as="article" className={`category-card eco-${eco.key}`} delay={index * 80}>
      <div className="category-visual" aria-hidden="true">
        <ProgramMotif kind={eco.key} variant={index} />
        <span className="card-icon"><Icon size={28} strokeWidth={1.7} /></span>
      </div>
      <div className="category-body">
        <span className="category-label">{eco.label}</span>
        <h3>{eco.title}</h3>
        <p>{eco.tagline}</p>
        <ul className="category-list" aria-label={`${eco.title} programs`}>
          {shown.map(p => <li key={p.slug}>{p.title}</li>)}
          {items.length > shown.length && <li className="more">+{items.length - shown.length} more</li>}
        </ul>
        <Link href={eco.href} className="card-link">{eco.cta} <ArrowRight size={15} aria-hidden="true" /></Link>
      </div>
      <span className="card-accent" aria-hidden="true" />
    </Reveal>
  );
}
