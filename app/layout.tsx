// app/layout.tsx
import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Daniel Betz Portfolio",
  description: "Product & Design Leader in Nonprofit Tech",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">{children}</body>
    </html>
  );
}