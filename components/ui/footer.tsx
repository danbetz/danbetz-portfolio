'use client';

import Logo from '../ui/logo';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="nav-logo">
            <Link href="#top">
                <Logo />
            </Link>
          <p>&copy; 2025 Dan Betz<br />Keep your paws off my pencils.</p>
        </div>
      </div>
    </footer>
  );
}