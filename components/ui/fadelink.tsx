"use client";

import { useRouter, usePathname } from "next/navigation";
import { MouseEvent } from "react";

type FadeLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function FadeLink({ href, children, className }: FadeLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === href) return;

    e.preventDefault();

    const content = document.getElementById("page-content");
    if (content) content.classList.add("fade-out");

    setTimeout(() => {
      router.push(href);
    }, 500); // match your fade-out duration
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
