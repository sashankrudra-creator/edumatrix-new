import { Compass, Eye, GraduationCap } from 'lucide-react';
import { aboutSkillAreas, aboutSteps } from '@/data/content';
import { PageMeta } from '@/components/site/PageMeta';
import { PageHero } from '@/components/site/PageHero';
import { Eyebrow, SectionHeader } from '@/components/site/SectionHeader';
import { Reveal, useInView } from '@/components/site/Reveal';
import { SkillCard } from '@/components/site/SkillCard';
import { CTASection } from '@/components/site/CTASection';
import { Wave } from '@/components/site/Wave';

const beliefs = [
  { title: 'Our focus', icon: Compass, text: 'Bringing academic learning together with practical, future-oriented education.' },
  { title: 'Our vision', icon: Eye, text: 'A broad vision for learning: academic mastery and real-world skills together, with mentorship and practical application.' },
  { title: 'Learning philosophy', icon: GraduationCap, text: 'Learn the core idea, practise with guidance, create or investigate, then reflect and grow.' },
];

export function AboutPage() {
  const [ref, seen] = useInView<HTMLOListElement>(0.2);
  return (
    <>
      <PageMeta title="About Edumatrix" description="Learn how Edumatrix combines academic, professional, technical, linguistic and life skills." />
      <main>
        <PageHero label="Who we are" title="Learning that connects understanding with possibility." icon={GraduationCap} eco="skills">
          Edumatrix is an education and skill-development organization focused on bringing academic learning together with practical, future-oriented education.
        </PageHero>

        <section className="section" aria-labelledby="exp-title">
          <div className="container intro-grid">
            <Reveal><Eyebrow>Our experience</Eyebrow><h2 id="exp-title">Education with more than one dimension.</h2></Reveal>
            <Reveal delay={90}>
              <p className="body-copy">The Edumatrix approach responds to the challenges students and teachers encounter: difficult mathematical and scientific concepts, problem solving, communication and life skills, and the need for stronger resources for understanding, practice and competitive preparation.</p>
              <p className="experience-note">Over 25 years of experience helps inform a broad, student-centred view of learning.</p>
            </Reveal>
          </div>
          <div className="container">
            <ul className="belief-grid">
              {beliefs.map(({ title, text, icon: Icon }, i) => (
                <Reveal as="li" key={title} className="belief-card" delay={i * 80}>
                  <span className="why-icon"><Icon size={22} aria-hidden="true" /></span>
                  <h3>{title}</h3><p>{text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <Wave from="white" to="tint" />
        <section className="section section-tint" aria-labelledby="journey-about">
          <div className="container timeline-layout">
            <SectionHeader id="journey-about" label="Our approach" title="Theory, practice and room to apply."
              copy="Interactive sessions, projects, experiments, mentorship and technology-enabled learning make up an ecosystem—not a single method." />
            <ol ref={ref} className={`timeline ${seen ? 'is-visible' : ''}`}>
              <span className="timeline-line" aria-hidden="true"><span className="timeline-line-fill" /></span>
              {aboutSteps.map(({ title, text, icon: Icon }, i) => (
                <li key={title} style={{ ['--step' as string]: i }}>
                  <span className="timeline-node"><Icon size={20} aria-hidden="true" /></span>
                  <div><span className="path-num">Step {i + 1}</span><h3>{title}</h3><p>{text}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Wave from="tint" to="white" />
        <section className="section" aria-labelledby="skillareas-title">
          <div className="container">
            <SectionHeader id="skillareas-title" centered label="Four skill areas" title="Skills for study, work and life." />
            <ul className="skill-grid four">
              {aboutSkillAreas.map((s, i) => <SkillCard key={s.title} {...s} index={i} />)}
            </ul>
          </div>
        </section>

        <section className="section section-tint" aria-labelledby="serve-title">
          <div className="container">
            <SectionHeader id="serve-title" label="Who we serve" title="Students, educators and institutions." />
            <div className="list-grid">
              <Reveal className="info-panel"><h3>Students & families</h3><p>Academic learning, practical STEM, languages, competitive preparation and student-centric support.</p></Reveal>
              <Reveal className="info-panel" delay={90}><h3>Schools & educators</h3><p>Curriculum-aligned programs, teacher development, classroom technology and institutional services.</p></Reveal>
            </div>
            <div style={{ marginTop: 48 }}>
              <CTASection title="A broad vision for learning." text="Edumatrix brings academic mastery and real-world skills together with mentorship and practical application." label="Explore programs" href="/programs" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
