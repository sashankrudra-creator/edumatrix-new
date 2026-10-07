import { Link } from 'wouter';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

type Props = {
  title?: string; text?: string; label?: string; href?: string;
  secondaryLabel?: string; secondaryHref?: string;
};

export function CTASection({
  title = 'Let’s explore the right learning path.',
  text = 'Tell us what you are looking for. We can help you explore programs and institutional services.',
  label = 'Start a conversation', href = '/contact', secondaryLabel, secondaryHref,
}: Props) {
  return (
    <Reveal className="cta-band">
      <span className="cta-orbit" aria-hidden="true" />
      <div className="cta-copy"><h2>{title}</h2><p>{text}</p></div>
      <div className="cta-actions">
        <Link href={href} className="button">{label}<ArrowRight size={16} /></Link>
        {secondaryLabel && secondaryHref && (
          <Link href={secondaryHref} className="button button-outline">{secondaryLabel}<ArrowDownRight size={16} /></Link>
        )}
      </div>
    </Reveal>
  );
}
