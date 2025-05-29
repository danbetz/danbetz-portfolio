// app/layout.tsx
import "../styles/globals.css";
import { ReactNode } from "react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Noto_Serif } from 'next/font/google';

const noto = Noto_Serif({
  subsets: ['latin'],
  weight: ['400','300','200'],
  style: ['normal','italic'],
  display: 'swap',
});

export const metadata = {
  title: "Dan Betz Portfolio",
  description: "Product & Design Leader in Nonprofit Tech",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${noto.className} bg-white text-black font-sans`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}