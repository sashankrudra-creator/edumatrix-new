import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react';

/** Returns a ref and whether the element has entered the viewport (once). */
export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') { setSeen(true); return; }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold, rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen] as const;
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  style?: CSSProperties;
};

/** Fades its children upward the first time they scroll into view. */
export function Reveal({ children, as: Tag = 'div', className = '', delay = 0, style }: RevealProps) {
  const [ref, seen] = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? 'is-visible' : ''} ${className}`.trim()}
      style={{ ...style, ['--reveal-delay' as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
