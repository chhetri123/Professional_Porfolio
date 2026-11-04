import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Manish Chhetri | Software Engineer",
  description:
    "Manish Chhetri is a Software Engineer focused on microservices, cloud-native technologies, and reliable AI systems.",
  keywords: [
    "Software Engineer",
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
          <div className="relative min-h-screen overflow-x-clip pb-20 md:pb-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-notebook [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[420px] w-[min(900px,100vw)] -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl dark:bg-blue-500/10"
            />
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
