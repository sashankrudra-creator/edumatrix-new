import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'wouter';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ChatbotButton } from './ChatbotButton';

/** Scrolls to the top on page change, or to a #hash target when one is present. */
function ScrollManager() {
  const [location] = useLocation();
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollManager />
      <Navbar />
      <div id="main-content" tabIndex={-1}>{children}</div>
      <Footer />
      <ChatbotButton />
    </div>
  );
}
