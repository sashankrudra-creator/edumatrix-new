import { Link } from 'wouter';
import { ArrowRight, Atom, BrainCircuit, Briefcase, Cuboid, Globe2, Lightbulb, Rocket, Sparkles } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { Reveal, useInView } from './Reveal';

const nodes = [
  { slug: 'robotics', label: 'Robotics', icon: Atom },
  { slug: 'artificial-intelligence', label: 'AI', icon: BrainCircuit },
  { slug: 'avionics', label: 'Avionics', icon: Rocket },
  { slug: '3d-printing', label: '3D Printing', icon: Cuboid },
  { slug: 'ar-vr-mr-xr', label: 'AR / VR / XR', icon: Globe2 },
  { slug: 'gamified-learning', label: 'Gamified Learning', icon: Lightbulb },
  { slug: 'astrophysics', label: 'Astrophysics', icon: Sparkles },
  { slug: 'entrepreneurship', label: 'Entrepreneurship', icon: Briefcase },
];

export function StemEcosystem() {
  const [ref, seen] = useInView<HTMLDivElement>(0.25);
  const R = 36; // % radius of the node ring
  const pts = nodes.map((_, i) => {
    const a = (-90 + (360 / nodes.length) * i) * (Math.PI / 180);
    return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
  });
  return (
    <section className="section section-tint stem-eco" aria-labelledby="stem-eco-title">
      <div className="container stem-eco-grid">
        <div>
          <SectionHeader id="stem-eco-title" label="STEM & Innovation"
            title="Technologies that learn from each other."
            copy="Robotics needs code. AI needs data. Flight needs physics. In Edumatrix STEM, students see how these ideas connect, then build with them." />
          <Reveal>
            <p className="body-copy">Each branch is a hands-on program. Pick one to explore, or move across them as curiosity grows.</p>
            <Link href="/stem-innovation" className="button" style={{ marginTop: 18 }}>Discover STEM <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
        <div ref={ref} className={`eco-map ${seen ? 'is-visible' : ''}`}>
          <svg className="eco-lines" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
            <circle cx="50" cy="50" r={R} className="eco-ring" />
            <circle cx="50" cy="50" r="22" className="eco-ring faint" />
            {pts.map((p, i) => <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} className="eco-spoke" style={{ ['--i' as string]: i }} />)}
          </svg>
          <div className="eco-hub"><Atom size={26} aria-hidden="true" /><strong>STEM &amp; Innovation</strong></div>
          <ul className="eco-nodes">
            {nodes.map(({ slug, label, icon: Icon }, i) => (
              <li key={slug} style={{ left: `${pts[i].x}%`, top: `${pts[i].y}%`, ['--i' as string]: i }}>
                <Link href={`/program/${slug}`} className="eco-node"><Icon size={16} aria-hidden="true" /><span>{label}</span></Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
