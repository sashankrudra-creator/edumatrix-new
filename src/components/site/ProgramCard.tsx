import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import type { Program } from '@/data/programs';
import { ecosystemOf } from '@/data/content';
import { ProgramMotif } from './ProgramMotif';
import { Reveal } from './Reveal';

export function ProgramCard({ program, index = 0 }: { program: Program; index?: number }) {
  const Icon = program.icon;
  const eco = ecosystemOf(program);
  return (
    <Reveal as="article" className={`program-card eco-${eco.key} variant-${index % 3}`} delay={(index % 3) * 70}>
      <div className="card-visual" aria-hidden="true">
        <ProgramMotif kind={eco.key} variant={index} />
        <span className="card-icon"><Icon size={26} strokeWidth={1.8} /></span>
        <span className="card-badge">{eco.title}</span>
      </div>
      <div className="card-body">
        <span className="card-category">{program.category}</span>
        <h3>{program.title}</h3>
        <p>{program.description}</p>
        <div className="skill-line">
          <span className="skill-line-label">Skills</span>
          <ul aria-label={`Skills in ${program.title}`}>
            {program.features.slice(0, 3).map(x => <li key={x}>{x}</li>)}
          </ul>
        </div>
        <Link href={`/program/${program.slug}`} className="card-link" aria-label={`Explore program: ${program.title}`}>
          Explore Program <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
      <span className="card-accent" aria-hidden="true" />
    </Reveal>
  );
}

export function ProgramGrid({ items }: { items: Program[] }) {
  return <div className={`program-grid ${items.length === 4 ? 'cols-4' : ''}`}>{items.map((p, i) => <ProgramCard key={p.slug} program={p} index={i} />)}</div>;
}
