import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowDownRight, ArrowRight, Atom, BrainCircuit, Calculator, FlaskConical, Bot, Trophy, Sparkles } from 'lucide-react';
import { heroPoints } from '@/data/content';
import { Eyebrow } from './SectionHeader';

const chips = [
  { label: 'Robotics', icon: Atom, cls: 'chip-a' },
  { label: 'AI', icon: BrainCircuit, cls: 'chip-b' },
  { label: 'Mathematics', icon: Calculator, cls: 'chip-c' },
  { label: 'Science', icon: FlaskConical, cls: 'chip-d' },
];

const slides = [
  { src: '/stem-hero.jpg', alt: 'Students in formal uniforms collaborating on a robotics project at a modern school campus' },
  { src: '/hero-ai.jpg', alt: 'High school students interacting with a modern artificial intelligence learning platform on tablets' },
  { src: '/hero-math.jpg', alt: 'Students solving advanced mathematics problems on a smartboard' },
  { src: '/hero-science.jpg', alt: 'High school students in a modern science laboratory doing a chemistry or physics experiment' },
  { src: '/hero-collab.jpg', alt: 'A diverse group of students collaborating around a table on a creative project' }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide(s => (s + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

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
        <div 
          className="hero-image-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <span className="hero-index">PRACTICAL LEARNING / 01</span>
          <div style={{ position: 'relative' }}>
            {chips.map(({ label, icon: Icon, cls }) => (
              <span key={label} className={`hero-chip ${cls}`} aria-hidden="true"><Icon size={14} />{label}</span>
            ))}
            
            <div className="hero-slider hero-image">
              {slides.map((slide, index) => (
                <img 
                  key={slide.src}
                  className={`slide ${index === currentSlide ? 'active' : ''}`}
                  src={slide.src}
                  width="1024"
                  height="1024"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  alt={slide.alt}
                />
              ))}
            </div>
            
            <div className="slider-indicators" aria-label="Image Carousel Indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to image ${index + 1}`}
                  aria-current={index === currentSlide}
                />
              ))}
            </div>
            
            <div className="image-caption">Ideas made tangible through learning.</div>
          </div>
          
          <div className="hero-events-container">
            <Link href="/programs/artificial-intelligence" className="hero-event-card">
              <div className="hero-event-header">
                <span className="hero-event-badge upcoming">UPCOMING</span>
                <Sparkles size={16} className="hero-event-icon" />
              </div>
              <h4 className="hero-event-title">AI & Innovation<br/>Workshop <ArrowRight size={14} /></h4>
              <p className="hero-event-desc">Explore AI and emerging technology</p>
            </Link>

            <Link href="/programs/robotics" className="hero-event-card">
              <div className="hero-event-header">
                <span className="hero-event-badge new">NEW</span>
                <Bot size={16} className="hero-event-icon" />
              </div>
              <h4 className="hero-event-title">Robotics<br/>Workshop <ArrowRight size={14} /></h4>
              <p className="hero-event-desc">Hands-on STEM learning</p>
            </Link>
            
            <Link href="/programs/olympiad-training" className="hero-event-card">
              <div className="hero-event-header">
                <span className="hero-event-badge ongoing">ONGOING</span>
                <Trophy size={16} className="hero-event-icon" />
              </div>
              <h4 className="hero-event-title">Olympiad<br/>Training <ArrowRight size={14} /></h4>
              <p className="hero-event-desc">Challenge your thinking</p>
            </Link>
          </div>
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
