'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Logo from '../ui/logo';

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();

    if (pathname === href) return; // already on page → do nothing

    setActive(true);

    const content = document.getElementById('page-content');
    if (content) content.classList.add('fade-out');

    setTimeout(() => {
      router.push(href);
    }, 500); // match CSS transition
  };

  return (
    <header className="site-header">
      <div className="nav-container">
        <div className="nav-left">
          <a href="/work" onClick={(e) => handleNav(e, '/work')}>
            Work
          </a>
        </div>

        <div className="nav-logo">
          <a href="/" onClick={(e) => handleNav(e, '/')}>
            <Logo active={active} />
          </a>
        </div>

        <div className="nav-right">
          <a href="/about" onClick={(e) => handleNav(e, '/about')}>
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}