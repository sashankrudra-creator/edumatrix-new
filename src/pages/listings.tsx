import type { ReactNode } from 'react';
import { programs, type Program } from '@/data/programs';
import { ecosystems, type EcosystemKey } from '@/data/content';
import { PageMeta } from '@/components/site/PageMeta';
import { PageHero } from '@/components/site/PageHero';
import { SectionHeader } from '@/components/site/SectionHeader';
import { Reveal } from '@/components/site/Reveal';
import { ProgramGrid } from '@/components/site/ProgramCard';
import { CTASection } from '@/components/site/CTASection';
import { StemEcosystem } from '@/components/site/StemEcosystem';
import { PracticalLoop } from '@/components/site/PracticalLoop';
import { AcademicPath } from '@/components/site/AcademicPath';
import { InstitutionAreas } from '@/components/site/InstitutionAreas';
import { Wave } from '@/components/site/Wave';

function ListingPage({ title, label, description, filter, intro, eco, before, after, gridHeading, showCta = true }: {
  title: string; label: string; description: string; filter: (p: Program) => boolean; intro?: string;
  eco: EcosystemKey; before?: ReactNode; after?: ReactNode; gridHeading?: { label: string; title: string }; showCta?: boolean;
}) {
  const filtered = programs.filter(filter);
  const Icon = ecosystems.find(e => e.key === eco)!.icon;
  return (
    <>
      <PageMeta title={title} description={description} />
      <main>
        <PageHero label={label} title={title} eco={eco} icon={Icon}>{description}</PageHero>
        {before}
        <section className="section" aria-label={`${title} programs`}>
          <div className="container">
            {gridHeading
              ? <SectionHeader label={gridHeading.label} title={gridHeading.title} copy={intro} />
              : intro && <Reveal className="listing-intro"><p className="body-copy">{intro}</p></Reveal>}
            <ProgramGrid items={filtered} />
          </div>
        </section>
        {after}
        {showCta && <><Wave from="white" to="tint" /><section className="section section-tint"><div className="container"><CTASection /></div></section></>}
      </main>
    </>
  );
}

export function StemPage() {
  return (
    <ListingPage eco="stem" title="STEM & Innovation" label="Practical learning for a changing world"
      description="Building future-ready skills through practical learning."
      intro="Students investigate ideas by building, testing and reflecting. Explore robotics, aerospace, AI, immersive technologies, space science and enterprise through projects, experiments and guided sessions."
      gridHeading={{ label: 'All STEM programs', title: 'Pick a path and start building.' }}
      filter={p => p.category === 'STEM & Innovation'}
      before={<StemEcosystem />}
      after={<PracticalLoop compact />} />
  );
}

export function AcademicsPage() {
  return (
    <ListingPage eco="academic" title="Academic Excellence & Assessment" label="Concepts, practice, progress"
      description="Academic foundations and thoughtful assessment for stronger understanding."
      intro="From personalized IIT-JEE and medical preparation to core subjects and assessment, Edumatrix combines concept focus, practice and continued learning support."
      gridHeading={{ label: 'All academic programs', title: 'Subjects, preparation and assessment.' }}
      filter={p => ['Academics & Testing', 'Academic Mastery', 'Academic & Competitive'].includes(p.category)}
      before={<AcademicPath tint />} />
  );
}

export function InstitutionalPage() {
  return (
    <>
      <ListingPage eco="institutional" title="Solutions for Schools & Educational Institutions" label="Institutional B2B"
        description="Programs, technology and operational support shaped around school needs."
        intro="Partnering with schools means listening first. Edumatrix supports curriculum-aligned programs, activity-based workshops, teacher development, administration and practical learning."
        gridHeading={{ label: 'Institutional programs', title: 'Services designed around the school.' }}
        filter={p => p.category === 'Institutional Solutions'} showCta={false}
        before={
          <section className="section section-tint inst-intro" aria-labelledby="inst-areas-title">
            <div className="container">
              <SectionHeader id="inst-areas-title" label="How we support institutions" title="Six areas of practical support for schools."
                copy="From daily administration to classroom technology and science showcases, each area can be adopted on its own or together." />
              <InstitutionAreas />
            </div>
          </section>
        } />
      <section className="section section-tint why-schools">
        <div className="container">
          <SectionHeader label="Why schools partner with Edumatrix" title="Learning value for students. Practical support for schools." />
          <div className="list-grid">
            <Reveal className="info-panel"><h3>For students</h3><ul><li>Strong conceptual understanding</li><li>Confidence and creativity</li><li>Exposure to future careers</li></ul></Reveal>
            <Reveal className="info-panel" delay={90}><h3>For schools</h3><ul><li>Value-added academic programs and differentiation</li><li>Curriculum-aligned practical workshops</li><li>Enhanced parent satisfaction through thoughtful support</li></ul></Reveal>
          </div>
          <div style={{ marginTop: 40 }}>
            <CTASection title="Let’s understand your school’s priorities." text="Start a conversation about programs, technology or institutional services." label="Discuss a school need" />
          </div>
        </div>
      </section>
    </>
  );
}
