import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "./globals.css";
import Navigation from "@/components/Navigation";
import Social from "@/components/Social";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manish Chhetri | Full Stack Developer",
  description:
    " Manish Chhetri is a full-stack developer with knowledge of microservice architecture, cloud services, and a keen interest in machine learnin also.",
  keywords: [
    "Full-stack developer",
    "backend developer",
    "Microservice architecture",
    "Cloud services",
    "Machine learning",
    "Microservice backend",
    "Manish Chhetri",
    "chhetri123",
    "chhetri",
    "manish",
  ],
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        href: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class">
          <div className="relative overflow-hidden min-h-screen">
            <div className="absolute top-10 left-1/3 size-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob -z-10"></div>
            <div className="hidden md:block absolute top-0 right-4 size-[500px] bg-fuchsia-200 mix-blend-multiply rounded-full filter blur-2xl opacity-50 animate-blob animation-delay-2000 -z-10"></div>
            <div className="absolute bottom-20 left-20 size-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000 -z-10"></div>
            <div className=" hidden md:block absolute -bottom-8 right-1/4 size-[500px] bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000 -z-10"></div>
            {children}
            <Analytics />
            <SpeedInsights />
            <Navigation />
            <Social />
            <Toaster position="top-center" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
