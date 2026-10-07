import { Link } from 'wouter';
import { ArrowDownRight, ArrowRight, Atom, BrainCircuit, Calculator, FlaskConical } from 'lucide-react';
import { heroPoints } from '@/data/content';
import { Eyebrow } from './SectionHeader';

const chips = [
  { label: 'Robotics', icon: Atom, cls: 'chip-a' },
  { label: 'AI', icon: BrainCircuit, cls: 'chip-b' },
  { label: 'Mathematics', icon: Calculator, cls: 'chip-c' },
  { label: 'Science', icon: FlaskConical, cls: 'chip-d' },
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-text">
          <Eyebrow>Learning for what comes next</Eyebrow>
          <h1 id="hero-title">Empowering Tomorrow’s Leaders Through <em>STEM & Academic Excellence</em></h1>
          <p className="hero-copy">Advanced learning environments integrating Robotics, AI, Astrophysics, and core Academic mastery for 21st-century education.</p>
          <p className="hero-promise">Edumatrix helps students learn, practice, create and become future-ready.</p>
          <div className="hero-actions">
            <Link href="/programs" className="button">Explore Programs <ArrowRight size={16} /></Link>
            <Link href="/institutional-b2b" className="button button-outline">For Institutions <ArrowDownRight size={16} /></Link>
          </div>
        </div>
        <div className="hero-image-wrap">
          <span className="hero-index">PRACTICAL LEARNING / 01</span>
          <picture>
            <source srcSet="/stem-hero.webp" type="image/webp" />
            <img className="hero-image" src="/stem-hero.jpg" width="1024" height="1024" fetchPriority="high"
              alt="Students in formal uniforms collaborating on a robotics project at a modern school campus" />
          </picture>
          {chips.map(({ label, icon: Icon, cls }) => (
            <span key={label} className={`hero-chip ${cls}`} aria-hidden="true"><Icon size={14} />{label}</span>
          ))}
          <div className="image-caption">Ideas made tangible through learning.</div>
        </div>
      </div>
      <div className="container">
        <ul className="hero-points">
          {heroPoints.map(({ label, text, icon: Icon }) => (
            <li key={label}>
              <span className="hero-point-icon"><Icon size={18} aria-hidden="true" /></span>
              <div><strong>{label}</strong><p>{text}</p></div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
