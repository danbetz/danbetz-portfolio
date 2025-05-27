import { cn } from "@/lib/utils"; // If you're using a utility to combine class names
import React from "react";

export function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-6 pt-0 ${className || ""}`}>{children}</div>;
}