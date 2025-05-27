// app/layout.tsx
import "../styles/globals.css";
import { ReactNode } from "react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';


export const metadata = {
  title: "Daniel Betz Portfolio",
  description: "Product & Design Leader in Nonprofit Tech",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}