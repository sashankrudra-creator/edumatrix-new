import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { programs } from '@/data/programs';
import { ecosystems } from '@/data/content';
import { PageMeta } from '@/components/site/PageMeta';
import { Hero } from '@/components/site/Hero';
import { Wave } from '@/components/site/Wave';
import { Eyebrow, SectionHeader } from '@/components/site/SectionHeader';
import { Reveal } from '@/components/site/Reveal';
import { CategoryCard } from '@/components/site/CategoryCard';
import { ProgramGrid } from '@/components/site/ProgramCard';
import { LearningJourney } from '@/components/site/LearningJourney';
import { StemEcosystem } from '@/components/site/StemEcosystem';
import { PracticalLoop } from '@/components/site/PracticalLoop';
import { AcademicPath } from '@/components/site/AcademicPath';
import { SkillsSection } from '@/components/site/SkillCard';
import { InstitutionAreas } from '@/components/site/InstitutionAreas';
import { WhyEdumatrix } from '@/components/site/WhyEdumatrix';
import { CTASection } from '@/components/site/CTASection';

const approaches = [['01', 'Learn', 'Build strong conceptual foundations.'], ['02', 'Practice', 'Apply concepts through exercises, tests and activities.'], ['03', 'Create', 'Work on projects, experiments and practical applications.'], ['04', 'Grow', 'Develop confidence, creativity and future-ready skills.']];
const howItWorks = [['01', 'Understand', 'Identify student or school requirements.'], ['02', 'Design', 'Create appropriate academic or skill programs.'], ['03', 'Deliver', 'Provide practical, interactive and technology-enabled learning.'], ['04', 'Support', 'Assessment, mentorship and continuous improvement.']];
const featuredSlugs = ['robotics', 'artificial-intelligence', 'avionics', '3d-printing', 'astrophysics', 'olympiad-training'];
const developSlugs = ['english-language-skills', 'language-club', 'abacus-vedic-mathematics', 'psychological-counselling'];

export function HomePage() {
  const featured = programs.filter(p => featuredSlugs.includes(p.slug));
  const develop = programs.filter(p => developSlugs.includes(p.slug));
  return (
    <>
      <PageMeta title="Learning for what comes next" description="Edumatrix brings together academic mastery, practical STEM, languages, student support and school solutions." />
      <main>
        <Hero />
        <Wave from="navy" to="white" />

        <section className="section intro-section" aria-labelledby="intro-title">
          <div className="container">
            <div className="intro-grid">
              <Reveal><Eyebrow>One learning ecosystem</Eyebrow><h2 id="intro-title">Learning Beyond the Classroom</h2></Reveal>
              <Reveal delay={90}>
                <p className="body-copy">Edumatrix brings together academic fundamentals and practical learning. Through technology, activities, projects and mentorship, students can connect what they learn with how they apply it.</p>
                <p className="experience-note">Over 25 years of experience in education and skill development.</p>
              </Reveal>
            </div>
            <div className="pillars">
              {approaches.map(([n, t, d], i) => (
                <Reveal className="pillar" key={n} delay={i * 80}><span className="pillar-num">{n}</span><h3>{t}</h3><p>{d}</p></Reveal>
              ))}
            </div>
          </div>
        </section>

        <Wave from="white" to="tint" />
        <section className="section section-tint ecosystems" aria-labelledby="eco-title">
          <div className="container">
            <SectionHeader id="eco-title" centered label="Learning ecosystems" title="Four ways Edumatrix supports learning."
              copy="Programs are organised into connected ecosystems, so every student and institution can find a clear starting point." />
            <div className="category-grid">{ecosystems.map((e, i) => <CategoryCard key={e.key} eco={e} index={i} />)}</div>
          </div>
        </section>

        <Wave from="tint" to="white" />
        <LearningJourney />

        <Wave from="white" to="tint" />
        <StemEcosystem />
        <section className="section section-tint featured-section" aria-labelledby="featured-title">
          <div className="container">
            <SectionHeader id="featured-title" label="Practical by design" title="Curiosity deserves a place to build."
              copy="From the first question to a working project, students learn through guided exploration, practice and making." />
            <ProgramGrid items={featured} />
            <div className="center-link"><Link href="/stem-innovation" className="button button-outline" style={{ display: 'inline-flex', padding: '10px 18px', fontSize: '14px' }}>Explore STEM & Innovation <ArrowRight size={15} /></Link></div>
          </div>
        </section>

        <Wave from="tint" to="white" />
        <PracticalLoop />

        <Wave from="white" to="tint" />
        <AcademicPath tint />
        <Wave from="tint" to="white" />

        <section className="section" aria-labelledby="develop-title">
          <div className="container">
            <SectionHeader id="develop-title" label="Student development" title="Skills to communicate, explore and grow."
              copy="Academic progress is one part of a student's development. Edumatrix also supports language capability, confidence and student-centred guidance." />
            <ProgramGrid items={develop} />
          </div>
        </section>

        <Wave from="white" to="tint" />
        <SkillsSection />

        <Wave from="tint" to="navy" />
        <section className="section section-dark inst-section" aria-labelledby="inst-title">
          <div className="container">
            <div className="split-band">
              <Reveal>
                <Eyebrow>For schools & institutions</Eyebrow>
                <h2 id="inst-title">Make practical learning part of the school day.</h2>
                <p className="body-copy on-dark">Curriculum-aligned programs, activity-based workshops, teacher development, school administration support and technology-enabled learning—designed around institutional needs.</p>
                <p className="body-copy on-dark small">Including STEM labs and learning programs for the classroom.</p>
                <Link href="/institutional-b2b" className="button" style={{ marginTop: 14 }}>Explore school solutions <ArrowRight size={16} /></Link>
              </Reveal>
              <InstitutionAreas dark />
            </div>
          </div>
        </section>

        <Wave from="navy" to="white" />
        <WhyEdumatrix />

        <Wave from="white" to="tint" />
        <section className="section section-tint" aria-labelledby="works-title">
          <div className="container">
            <SectionHeader id="works-title" label="How Edumatrix works" title="Understand. Design. Deliver. Support."
              copy="A considered learning journey starts with the needs in front of us and stays responsive as students and schools progress." />
            <div className="pillars">
              {howItWorks.map(([n, t, d], i) => (
                <Reveal className="pillar" key={n} delay={i * 80}><span className="pillar-num">{n}</span><h3>{t}</h3><p>{d}</p></Reveal>
              ))}
            </div>
            <div style={{ marginTop: 56 }}>
              <CTASection title="Build the Future of Learning with Edumatrix" text="Explore programs for students and solutions designed for schools and educational institutions." label="Explore Programs" href="/programs" secondaryLabel="For Institutions" secondaryHref="/institutional-b2b" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
