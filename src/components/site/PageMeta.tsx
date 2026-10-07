import { useEffect } from 'react';

export function PageMeta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = `${title} | Edumatrix`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', `${title} | Edumatrix`);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', `${title} | Edumatrix`);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
  }, [title, description]);
  return null;
}
