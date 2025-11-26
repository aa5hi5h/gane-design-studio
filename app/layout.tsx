import type { Metadata } from "next";
import { Teko, Rajdhani, Space_Mono } from "next/font/google";
import "./globals.css";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "QUEST | Your Guide to the Gaming Universe",
  description: "A futuristic gaming guide portal featuring immersive animations and AI-powered game discovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          :root {
            --font-display: ${teko.style.fontFamily};
            --font-body: ${rajdhani.style.fontFamily};
            --font-tech: ${spaceMono.style.fontFamily};
          }
          body {
            font-family: var(--font-body), sans-serif;
            background-color: #050505;
            color: #ffffff;
            overflow-x: hidden;
          }
          .font-display {
            font-family: var(--font-display), sans-serif;
          }
          .font-tech {
            font-family: var(--font-tech), monospace;
          }
          /* Custom Scrollbar */
          ::-webkit-scrollbar {
            width: 6px;
          }
          ::-webkit-scrollbar-track {
            background: #0a0a0a;
          }
          ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 3px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #ccff00;
          }
          .glass-effect {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
        `}</style>
      </head>
      <body
        className={`${teko.variable} ${rajdhani.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}