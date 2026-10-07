import type { EcosystemKey } from '@/data/content';

/** Quiet educational line-art that sits behind a card icon. Uses currentColor (the ecosystem accent). */
export function ProgramMotif({ kind, variant = 0 }: { kind: EcosystemKey; variant?: number }) {
  const flip = variant % 2 === 1;
  return (
    <svg className={`motif ${flip ? 'flip' : ''}`} viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      {kind === 'stem' && (
        <g fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".55">
          <ellipse cx="300" cy="80" rx="150" ry="52" transform="rotate(-18 300 80)" />
          <ellipse cx="300" cy="80" rx="105" ry="34" transform="rotate(-18 300 80)" />
          <circle cx="300" cy="80" r="18" fill="currentColor" opacity=".25" stroke="none" />
          <circle cx="418" cy="48" r="6" fill="currentColor" stroke="none" />
          <circle cx="204" cy="104" r="4" fill="currentColor" stroke="none" />
          <path d="M20 128h60M20 140h36" strokeLinecap="round" />
        </g>
      )}
      {kind === 'academic' && (
        <g fill="none" stroke="currentColor" strokeWidth="1" opacity=".5">
          {[40, 80, 120].map(y => <path key={y} d={`M0 ${y}H400`} opacity=".4" />)}
          {[100, 160, 220, 280, 340].map(x => <path key={x} d={`M${x} 0V160`} opacity=".4" />)}
          <path d="M150 128 L210 98 L262 112 L330 52 L388 36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".9" />
          <circle cx="330" cy="52" r="5" fill="currentColor" stroke="none" />
          <circle cx="262" cy="112" r="4" fill="currentColor" stroke="none" opacity=".7" />
        </g>
      )}
      {kind === 'skills' && (
        <g fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".5">
          <circle cx="300" cy="64" r="58" />
          <circle cx="352" cy="100" r="40" />
          <circle cx="250" cy="116" r="26" fill="currentColor" opacity=".14" stroke="none" />
          <path d="M40 120c24-24 48-24 72 0s48 24 72 0" strokeLinecap="round" />
        </g>
      )}
      {kind === 'institutional' && (
        <g fill="currentColor" opacity=".22">
          <rect x="250" y="70" width="52" height="70" rx="6" />
          <rect x="310" y="40" width="52" height="100" rx="6" />
          <rect x="370" y="88" width="40" height="52" rx="6" />
          <rect x="190" y="104" width="52" height="36" rx="6" />
          <path d="M20 132h70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".7" />
        </g>
      )}
    </svg>
  );
}
