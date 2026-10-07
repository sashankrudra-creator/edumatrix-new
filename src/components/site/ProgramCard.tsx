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
        {program.image ? (
          <img src={program.image} alt="" className="card-image" />
        ) : (
          <ProgramMotif kind={eco.key} variant={index} />
        )}
      </div>
      <div className="card-body">
        <span className="card-category">{program.category}</span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
          <h3 style={{ margin: '6px 0 8px' }}>{program.title}</h3>
          <span style={{ color: 'var(--accent-ink)', flex: 'none', background: 'var(--tint)', padding: '6px', borderRadius: '8px', marginTop: '4px' }}><Icon size={20} strokeWidth={2} /></span>
        </div>
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
