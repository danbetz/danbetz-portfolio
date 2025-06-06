import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { IBM_Plex_Sans, Instrument_Serif } from 'next/font/google';
import PageTransition from '../components/ui/pagetransition';
import Nav from '../components/ui/nav';
import Footer from '../components/ui/footer';

const ibm = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  title: "Dan Betz • Product & Design Leader in Nonprofit Tech",
  description: "Summary of Dan Betz's background and professional experience. He's really great.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const layoutClass = (metadata as unknown)?.layoutClassName ?? "";
  return (
    <html lang="en" id="top" className={`${ibm.variable} ${instrument.variable}`}>
      <head>
        {/* Favicon & meta tags */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`portfolio ${layoutClass}`}>
         <Nav />
         <PageTransition>{children}</PageTransition>
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
