import type { Metadata } from "next";
import localFont from "next/font/local";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const tiemposHeadline = localFont({
  src: "../public/fonts/test-tiempos-headline-vf-roman.woff2",
  variable: "--font-headline",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Redpoint Dashboard",
  description: "Redpoint app dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${tiemposHeadline.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
