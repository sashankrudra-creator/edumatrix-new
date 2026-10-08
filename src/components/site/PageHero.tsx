import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import type { EcosystemKey } from '@/data/content';
import { ProgramMotif } from './ProgramMotif';
import { Eyebrow } from './SectionHeader';

export function PageHero({ label, title, children, eco, icon: Icon, actions, image, dark }: {
  label: string; title: string; children?: ReactNode; eco?: EcosystemKey; icon?: LucideIcon; actions?: ReactNode; image?: string; dark?: boolean;
}) {
  return (
    <section className={`page-hero ${eco ? `eco-${eco}` : ''} ${dark ? 'page-hero-dark' : ''}`}>
      {eco && !image && <div className="page-hero-art" aria-hidden="true"><ProgramMotif kind={eco} /></div>}
      <div className="container page-hero-inner">
        <div>
          <Eyebrow>{label}</Eyebrow>
          <h1>{title}</h1>
          {children && <p>{children}</p>}
          {actions && <div style={{ marginTop: '24px' }}>{actions}</div>}
        </div>
        {image ? (
          <div className="page-hero-image-wrap">
            <img src={image} alt="" className="page-hero-image" />
          </div>
        ) : (
          Icon && <span className="page-hero-icon" aria-hidden="true"><Icon size={44} strokeWidth={1.6} /></span>
        )}
      </div>
    </section>
  );
}
