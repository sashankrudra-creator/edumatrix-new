import { ecosystems, programsIn } from '@/data/content';
import { PageMeta } from '@/components/site/PageMeta';
import { PageHero } from '@/components/site/PageHero';
import { SectionHeader } from '@/components/site/SectionHeader';
import { Reveal } from '@/components/site/Reveal';
import { CategoryCard } from '@/components/site/CategoryCard';
import { ProgramGrid } from '@/components/site/ProgramCard';
import { CTASection } from '@/components/site/CTASection';

export function ProgramsPage() {
  return (
    <>
      <PageMeta title="Programs" description="Explore Edumatrix programs across STEM, academics, languages, student development and institutional solutions." />
      <main>
        <PageHero label="Learning ecosystem" title="Programs for understanding, doing and growing." image="/images/hero-programs.jpg">
          Explore Edumatrix programs across academic mastery, practical STEM, language development, student support and school services.
        </PageHero>

        <section className="section section-tint" aria-labelledby="overview-title">
          <div className="container">
            <SectionHeader id="overview-title" label="Start here" title="Choose a learning ecosystem."
              copy="Each ecosystem groups programs that build on one another. Jump to one below, or open its overview." />
            <div className="category-grid">{ecosystems.map((e, i) => <CategoryCard key={e.key} eco={e} index={i} />)}</div>
          </div>
        </section>

        {ecosystems.map((e, i) => {
          const Icon = e.icon;
          const items = programsIn(e.key);
          return (
            <section className={`section ecosystem-section eco-${e.key} ${i % 2 === 1 ? 'section-tint' : ''}`} id={e.key === 'skills' ? 'skills' : e.key} key={e.key} aria-labelledby={`${e.key}-heading`}>
              <div className="container">
                <Reveal className="ecosystem-head">
                  <span className="ecosystem-icon"><Icon size={26} strokeWidth={1.7} aria-hidden="true" /></span>
                  <div>
                    <span className="category-label">{e.label}</span>
                    <h2 id={`${e.key}-heading`}>{e.title}</h2>
                    <p>{e.tagline}</p>
                  </div>
                </Reveal>
                <ProgramGrid items={items} />
              </div>
            </section>
          );
        })}

        <section className="section section-tint"><div className="container"><CTASection /></div></section>
      </main>
    </>
  );
}
