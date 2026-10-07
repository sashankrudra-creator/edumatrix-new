import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { institutionAreas } from '@/data/content';
import { Reveal } from './Reveal';

export function InstitutionAreas({ dark = false }: { dark?: boolean }) {
  return (
    <ul className={`inst-grid ${dark ? 'is-dark' : ''}`}>
      {institutionAreas.map(({ title, text, icon: Icon, slug }, i) => (
        <Reveal as="li" key={title} className="inst-card" delay={(i % 3) * 70}>
          <span className="inst-icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
          <h3>{title}</h3>
          <p>{text}</p>
          <Link href={`/program/${slug}`} className="text-link" aria-label={`Learn more about ${title}`}>Learn More <ArrowRight size={14} aria-hidden="true" /></Link>
        </Reveal>
      ))}
    </ul>
  );
}
