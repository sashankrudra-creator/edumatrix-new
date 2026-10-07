import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { programs } from '@/data/programs';
import { BrandLink } from './Navbar';

const studentLinks = ['robotics', 'artificial-intelligence', 'avionics', '3d-printing', 'astrophysics', 'olympiad-training', 'language-club', 'abacus-vedic-mathematics'];
const schoolLinks = ['school-erp', 'elite-jobs', 'interactive-panels', 'school-branding', 'science-expos-fests'];
const titleOf = (slug: string) => programs.find(p => p.slug === slug)?.title;

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <BrandLink />
            <p className="footer-intro">Academic foundations and practical learning for students, educators and institutions.</p>
            <Link className="footer-cta" href="/contact">Get in touch <ArrowRight size={14} /></Link>
          </div>
          <nav aria-label="Explore Edumatrix">
            <h4>Explore Edumatrix</h4>
            <div className="footer-links">
              {[['About', '/about'], ['All programs', '/programs'], ['STEM & Innovation', '/stem-innovation'], ['Academics & Testing', '/academics-testing'], ['Institutional B2B', '/institutional-b2b'], ['Contact', '/contact']]
                .map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            </div>
          </nav>
          <nav aria-label="Student programs">
            <h4>Student programs</h4>
            <div className="footer-links">
              {studentLinks.map(slug => <Link href={`/program/${slug}`} key={slug}>{titleOf(slug)}</Link>)}
            </div>
          </nav>
          <nav aria-label="Institutional programs">
            <h4>Institutional</h4>
            <div className="footer-links">
              {schoolLinks.map(slug => <Link href={`/program/${slug}`} key={slug}>{titleOf(slug)}</Link>)}
              <a href="tel:6281336760">6281336760</a>
              <a href="https://www.theedumatrix.com" target="_blank" rel="noreferrer">www.theedumatrix.com</a>
            </div>
          </nav>
        </div>
        <div className="footer-mark" aria-hidden="true">EDUMATRIX</div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Edumatrix</span>
          <span>Education for academic, practical and future-oriented growth.</span>
        </div>
      </div>
    </footer>
  );
}
