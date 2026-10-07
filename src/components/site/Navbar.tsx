import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowRight, Menu, X } from 'lucide-react';
import { ContactBar } from './ContactBar';

const navItems = [
  { label: 'Home', href: '/' }, { label: 'STEM & Innovation', href: '/stem-innovation' },
  { label: 'Academics & Testing', href: '/academics-testing' }, { label: 'Institutional B2B', href: '/institutional-b2b' },
  { label: 'About', href: '/about' }, { label: 'Programs', href: '/programs' },
];

export function BrandLink({ label = 'Edumatrix home' }: { label?: string }) {
  return (
    <Link href="/" className="wordmark brand-link" aria-label={label}>
      <img className="brand-logo" src="/edumatrix-logo-sm.png" width="62" height="58" alt="" aria-hidden="true" />
      <span className="brand-name">EDU<span>MATRIX</span></span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const isCurrent = (href: string) =>
    location === href || (href === '/programs' && location.startsWith('/program/'));

  return (
    <>
      <ContactBar />
      <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <BrandLink />
          <button className="menu-toggle" onClick={() => setOpen(!open)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open} aria-controls="primary-navigation">
            {open ? <X size={22} /> : <Menu size={23} />}
          </button>
          <nav id="primary-navigation" className={`nav-links ${open ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map(item => (
              <Link key={item.href} href={item.href} aria-current={isCurrent(item.href) ? 'page' : undefined}>{item.label}</Link>
            ))}
            <Link href="/contact" className="nav-contact-link" aria-current={location === '/contact' ? 'page' : undefined}>Contact</Link>
          </nav>
          <Link href="/contact" className="nav-cta">Talk to our team <ArrowRight size={14} /></Link>
        </div>
      </header>
    </>
  );
}
