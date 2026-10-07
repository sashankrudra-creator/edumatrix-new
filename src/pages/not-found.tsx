import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { PageMeta } from '@/components/site/PageMeta';

export function NotFound() {
  return (
    <>
      <PageMeta title="Page not found" description="The page you requested could not be found." />
      <main className="not-found">
        <div>
          <span className="eyebrow" style={{ justifyContent: 'center' }}>404 · Not found</span>
          <h1>This page isn’t here.</h1>
          <p>The address may have changed, or the page may not exist.</p>
          <Link href="/" className="button">Return home <ArrowRight size={15} /></Link>
        </div>
      </main>
    </>
  );
}

export default NotFound;
