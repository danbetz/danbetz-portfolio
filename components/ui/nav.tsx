'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Logo from '../ui/logo';
import Link from "next/link";


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
          <Link href="/work" onClick={(e) => handleNav(e, '/work')}>
            Work
          </Link>
        </div>

        <div className="nav-logo">
          <Link href="/" onClick={(e) => handleNav(e, '/')}>
            <Logo active={active} />
          </Link>
        </div>

        <div className="nav-right">
          <Link href="/about" onClick={(e) => handleNav(e, '/about')}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}