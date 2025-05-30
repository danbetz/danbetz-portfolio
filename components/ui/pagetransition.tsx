'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const el = document.getElementById('page-content');
    if (!el) return;

    // Remove both fade-in and fade-out before triggering fade-in
    el.classList.remove('fade-in', 'fade-out');
    void el.offsetHeight; // Force reflow
    el.classList.add('fade-in');
  }, [pathname]);

  return (
    <main id="page-content" className="page-transition">
      {children}
    </main>
  );
}
