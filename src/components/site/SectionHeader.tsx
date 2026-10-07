import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow">{children}</div>;
}

export function SectionHeader({ label, title, copy, centered = false, id }: {
  label: string; title: string; copy?: string; centered?: boolean; id?: string;
}) {
  return (
    <Reveal className={`section-heading ${centered ? 'center' : ''}`}>
      <Eyebrow>{label}</Eyebrow>
      <h2 id={id}>{title}</h2>
      {copy && <p>{copy}</p>}
    </Reveal>
  );
}
