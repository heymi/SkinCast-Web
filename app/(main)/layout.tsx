import { APP_ID, IS_WAITLIST_ENABLED, THEME } from "@/constants";
import type { Metadata, Viewport } from "next";

import { AppIcon } from "@/components/app_icon/app_icon";
import { CompactFooter } from "@/components/compact_footer/compact_footer";
import { DownloadActionButton } from "@/components/download_action_button/download_action_button";
import { GetNotifiedActionButton } from "@/components/get_notified_action_button/get_notified_action_button";
import { MaterialSymbolsLink } from "@/components/material_symbols_link/material_symbols_link";
import { Navbar } from "@/components/navbar/navbar";
import { ThemeStyle } from "@/components/theme_style/theme_style";
import "@/global.css";
import { ThemeProvider } from "@/providers/theme_provider";

const SITE_URL = "https://skincast.aedc.cc";

export const metadata: Metadata = {
  title: "SkinCast | Daily skin insights that feel personal",
  description:
    "AI-powered daily skin forecast based on weather, UV, and humidity. Get personalized skincare guidance tailored to your concerns and today's climate.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "skincare app",
    "skin weather forecast",
    "daily skin care",
    "AI skincare",
    "UV skin protection",
    "personalized skin care",
    "skin humidity",
    "weather skin impact",
    "skincare routine",
    "skin health app",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SkinCast | Daily skin insights that feel personal",
    description:
      "AI-powered daily skin forecast based on weather, UV, and humidity. Get personalized skincare guidance tailored to your concerns.",
    siteName: "SkinCast",
    locale: "en_US",
    images: [
      {
        url: "/og-preview-2026-04-23.png",
        width: 1280,
        height: 720,
        alt: "SkinCast app preview showing daily skin insights and personalized care guidance",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkinCast | Daily skin insights that feel personal",
    description:
      "AI-powered daily skin forecast based on weather, UV, and humidity. Personalized skincare guidance for your concerns.",
    images: [
      {
        url: "/og-preview-2026-04-23.png",
        alt: "SkinCast app preview showing daily skin insights and personalized care guidance",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme={THEME}>
      <head>
        {/* This makes Safari on iOS show the App Store download banner */}
        {!IS_WAITLIST_ENABLED && (
          <meta name="apple-itunes-app" content={`app-id=${APP_ID}`} />
        )}

        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />
        <link rel="manifest" href="/manifest.json" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "SkinCast",
                  url: "https://skincast.aedc.cc",
                  description:
                    "AI-powered daily skin forecast based on weather, UV, and humidity.",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "SkinCast",
                  operatingSystem: "iOS",
                  applicationCategory: "HealthApplication",
                  description:
                    "SkinCast uses AI to read today's climate conditions and translate their skin impact into personalized care guidance.",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  featureList: [
                    "AI-powered daily skin climate analysis",
                    "Personalized skin concern tracking",
                    "Daily skin stress score",
                    "Weather-based skincare action plans",
                    "Home screen widgets",
                    "Privacy-first design with no account required",
                  ],
                },
                {
                  "@type": "Organization",
                  name: "AEDC",
                  url: "https://aedc.cc",
                  brand: {
                    "@type": "Brand",
                    name: "SkinCast",
                    logo: "https://skincast.aedc.cc/app_icon.png",
                  },
                },
              ],
            }),
          }}
        />

        <ThemeStyle />
        <MaterialSymbolsLink />
      </head>
      <body>
        <ThemeProvider>
          <Navbar
            icon={<AppIcon src="/app_icon.png" mask={true} />}
            appName="SkinCast"
            links={[
              {
                label: "AEDC",
                href: "https://aedc.cc",
                external: true,
                newTab: true,
              },
              { label: "Features", href: "#features" },
              ...(IS_WAITLIST_ENABLED
                ? [{ label: "Waitlist", href: "#waitlist" }]
                : []),
              { label: "Release Notes", href: "/release-notes" },
            ]}
            action={
              IS_WAITLIST_ENABLED ? (
                <GetNotifiedActionButton href="/#waitlist" label="Join waitlist" />
              ) : (
                <DownloadActionButton />
              )
            }
          />

          <main>{children}</main>

          {/*
            There is also a <MultiColumnFooter> component available
            in case you need more space for links.
          */}
          <CompactFooter
            appIcon={
              <AppIcon src="/app_icon.png" mask={true} filter="grayscale" />
            }
            links={[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ]}
            footnoteLeading={`© ${new Date().getFullYear()} SkinCast. All rights reserved.`}
            footnoteTrailing={
              <>
                Built with{" "}
                <a target="_blank" href="https://appview.dev">
                  AppView
                </a>
              </>
            }
          />
        </ThemeProvider>

        {/* <PlausibleAnalytics domain="your-app-domain.com" /> */}
        {/* <VercelAnalytics /> */}
      </body>
    </html>
  );
}
