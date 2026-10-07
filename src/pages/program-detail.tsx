import { Link } from 'wouter';
import { ArrowRight, Check } from 'lucide-react';
import { programs } from '@/data/programs';
import { ecosystemOf } from '@/data/content';
import { PageMeta } from '@/components/site/PageMeta';
import { PageHero } from '@/components/site/PageHero';
import { Reveal } from '@/components/site/Reveal';
import { LearningFlow } from '@/components/site/LearningJourney';
import { ProgramGrid } from '@/components/site/ProgramCard';
import { CTASection } from '@/components/site/CTASection';
import { SectionHeader } from '@/components/site/SectionHeader';
import { NotFound } from './not-found';

const flow = [
  { title: 'Learn', text: 'the core idea' },
  { title: 'Practise', text: 'with guidance' },
  { title: 'Create', text: 'or investigate' },
  { title: 'Reflect', text: 'and grow' },
];

export function ProgramDetail({ slug }: { slug: string }) {
  const program = programs.find(p => p.slug === slug);
  if (!program) return <NotFound />;
  const Icon = program.icon;
  const eco = ecosystemOf(program);
  const related = programs.filter(p => p.slug !== program.slug && eco.categories.includes(p.category)).slice(0, 3);
  return (
    <>
      <PageMeta title={program.title} description={program.description} />
      <main>
        <PageHero label={program.category} title={program.title} eco={eco.key} icon={Icon}
          actions={<Link className="button" href="/contact" style={{ marginTop: 14 }}>Ask about this program <ArrowRight size={15} /></Link>}>
          {program.description}
        </PageHero>
        <section className={`section eco-${eco.key}`}>
          <div className="container program-detail-grid">
            <div className="detail-main">
              <Reveal className="detail-block">
                <div className="icon-box"><Icon size={23} /></div>
                <h2>Overview</h2>
                <p>{program.description} Edumatrix combines theory with practice, interactive sessions, applied learning, projects, experiments and mentorship to support meaningful understanding.</p>
              </Reveal>
              <Reveal className="detail-block">
                <h2>What students learn</h2>
                <ul className="band-list one-col">{program.learn.map(x => <li key={x}><Check size={16} />{x}</li>)}</ul>
              </Reveal>
              <Reveal className="detail-block">
                <h2>Practical activities</h2>
                <ul className="band-list one-col">{program.activities.map(x => <li key={x}><Check size={16} />{x}</li>)}</ul>
              </Reveal>
              <Reveal className="detail-block">
                <h2>Benefits</h2>
                <p>Students build understanding through active practice, develop confidence in their approach and connect learning with useful applications. The exact experience can be shaped to learner and institutional needs.</p>
              </Reveal>
              <Reveal className="detail-block">
                <h2>Learning approach</h2>
                <p>Learn the core idea, practise with guidance, create or investigate, then reflect and grow. Assessment and mentorship support progress along the way.</p>
                <LearningFlow steps={flow} />
              </Reveal>
            </div>
            <aside className="detail-aside" aria-label="Program summary">
              <h3>Who it is for</h3>
              <p className="body-copy">{program.audience}</p>
              <h3 style={{ marginTop: 26 }}>Program focus</h3>
              <ul>{program.features.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul>
            </aside>
          </div>
        </section>
        {related.length > 0 && (
          <section className="section section-tint" aria-labelledby="related-title">
            <div className="container">
              <SectionHeader id="related-title" label={eco.title} title="Keep exploring this ecosystem." />
              <ProgramGrid items={related} />
            </div>
          </section>
        )}
        <section className="section"><div className="container"><CTASection title={`Explore ${program.title} with Edumatrix.`} text="Get in touch to discuss program details and the right learning context." label="Contact Edumatrix" /></div></section>
      </main>
    </>
  );
}
