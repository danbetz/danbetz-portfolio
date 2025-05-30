'use client';

import { useState } from 'react';

export default function Logo() {
  const [active, setActive] = useState(false);

  return (
    <a
      href="/"
      className={`logo ${active ? 'toggled' : ''}`}
      aria-label="Home"
      onClick={(e) => {
        e.preventDefault(); // prevent navigation
        setActive((prev) => !prev);
      }}
    >
            <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 659.87 478.18"
        width="60"
        height="60"
        role="img"
        aria-label="Dan Betz logo"
      >
        <g>
          {/* Dark gray group (color #474649) */}
          <circle className="dot dot-1" fill="#474649" cx="420.52" cy="63.51" r="63.51" />
          <circle className="dot dot-2" fill="#474649" cx="420.52" cy="239.09" r="63.51" />
          <circle className="dot dot-3" fill="#474649" cx="420.52" cy="414.67" r="63.51" />
          <circle className="dot dot-4" fill="#474649" cx="596.36" cy="414.67" r="63.51" />
          <circle className="dot dot-5" fill="#474649" cx="596.36" cy="237.38" r="63.51" />
        </g>
        <g>
          {/* Black group (color #242426) */}
          <circle className="dot dot-6" fill="#242426" cx="239.35" cy="63.51" r="63.51" />
          <circle className="dot dot-7" fill="#242426" cx="243.5" cy="239.09" r="63.51" />
          <circle className="dot dot-8" fill="#242426" cx="239.35" cy="414.67" r="63.51" />
          <circle className="dot dot-9" fill="#242426" cx="63.51" cy="414.67" r="63.51" />
          <circle className="dot dot-10" fill="#242426" cx="63.51" cy="237.38" r="63.51" />
        </g>
      </svg>

    </a>
  );
}