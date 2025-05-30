'use client';

export default function Logo({ active = false }: { active?: boolean }) {
  return (
    <span className={`logo ${active ? 'toggled' : ''}`} aria-label="db logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 659.87 478.18"
        width="40"
        height="auto"
        role="img"
        aria-label="db logo"
      >
        <g>
          {/* Dark gray group (color #474649) */}
          <circle className="dot dot-1" fill="oklch(0.5478 0.007 106.523)" cx="420.52" cy="63.51" r="63.51" />
          <circle className="dot dot-2" fill="oklch(0.5478 0.007 106.523)" cx="420.52" cy="239.09" r="63.51" />
          <circle className="dot dot-3" fill="oklch(0.5478 0.007 106.523)" cx="420.52" cy="414.67" r="63.51" />
          <circle className="dot dot-4" fill="oklch(0.5478 0.007 106.523)" cx="596.36" cy="414.67" r="63.51" />
          <circle className="dot dot-5" fill="oklch(0.5478 0.007 106.523)" cx="596.36" cy="237.38" r="63.51" />
        </g>
        <g>
          {/* Black group (color #242426) */}
          <circle className="dot dot-6" fill="oklch(0.2921 0.007 106.523)" cx="239.35" cy="63.51" r="63.51" />
          <circle className="dot dot-7" fill="oklch(0.2921 0.007 106.523)" cx="243.5" cy="239.09" r="63.51" />
          <circle className="dot dot-8" fill="oklch(0.2921 0.007 106.523)" cx="239.35" cy="414.67" r="63.51" />
          <circle className="dot dot-9" fill="oklch(0.2921 0.007 106.523)" cx="63.51" cy="414.67" r="63.51" />
          <circle className="dot dot-10" fill="oklch(0.2921 0.007 106.523)" cx="63.51" cy="237.38" r="63.51" />
        </g>
      </svg>
    </span>
  );
}