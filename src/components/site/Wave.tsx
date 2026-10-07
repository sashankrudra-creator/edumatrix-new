/** Soft curved separator between two sections. `from` is the section above, `to` the section below. */
type Tone = 'white' | 'tint' | 'navy';
const fill: Record<Tone, string> = { white: '#FFFFFF', tint: '#F7F1F8', navy: '#0B1F36' };

export function Wave({ from, to }: { from: Tone; to: Tone }) {
  return (
    <div className="wave" style={{ background: fill[from] }} aria-hidden="true">
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" focusable="false">
        <path d="M0 56 C 240 4 480 4 720 28 C 960 52 1200 52 1440 4 L1440 56 Z" fill={fill[to]} />
      </svg>
    </div>
  );
}
