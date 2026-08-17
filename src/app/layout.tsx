import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Firebots 3501 · Fremont High Robotics",
    template: "%s · Firebots 3501",
  },
  description:
    "FRC Team 3501 Firebots — student-run robotics at Fremont High in Sunnyvale. Anyone with an appreciation for STEAM can succeed here.",
  openGraph: {
    title: "Firebots 3501",
    description: "Student-run robotics at Fremont High. Five competition teams. One shop.",
    url: site.url,
    siteName: "Firebots",
    type: "website",
    images: [
      {
        url: "/images/home/01-0b69-mv2.jpg",
        alt: "Fremont High Robotics at competition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firebots 3501",
    description: "Student-run robotics at Fremont High in Sunnyvale.",
    images: ["/images/home/01-0b69-mv2.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Scroll reveals ship with an inline opacity:0; without JS they must still show. */}
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: "[data-reveal]{opacity:1!important;transform:none!important}",
            }}
          />
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-200 focus:rounded-full focus:bg-ember-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="min-w-0 flex-1">
          <MotionProvider>{children}</MotionProvider>
        </main>
        <Footer />
        <JsonLd />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
