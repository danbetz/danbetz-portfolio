'use client';

import Logo from '../ui/logo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="nav-container">
        <div className="nav-logo">
            <Logo />
          &copy; 2025 Dan Betz
        </div>
      </div>
    </footer>
  );
}