"use client";

import { ReactNode } from "react";

export function Button({ children, asChild = false, variant = "default" }: {
  children: ReactNode;
  asChild?: boolean;
  variant?: "default" | "outline";
}) {
  const className = variant === "outline"
    ? "px-4 py-2 border border-black text-black rounded hover:bg-gray-100"
    : "px-4 py-2 bg-black text-white rounded hover:bg-gray-800";

  if (asChild) {
    return <span className={className}>{children}</span>;
  }

  return <button className={className}>{children}</button>;
}