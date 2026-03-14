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

export const metadata: Metadata = {
  /**
   * `title` and `description` are visible in search results.
   * Recommended length for title is max 60 characters.
   * Recommended length for description is max 160 characters.
   */
  title: "SkinCast | Daily skin insights that feel personal",
  description:
    "Join the waitlist for SkinCast and get early access to daily skin insights, personalized guidance, and a calmer routine.",

  /**
   * Your website URL.
   */
  metadataBase: new URL("https://app-website-url.com"),

  /**
   * Info inside `openGraph` and `twitter` is used to show rich previews
   * on social media when someone shares a link to your website.
   *
   * AppView comes with a tool to help you generate an Open Graph image,
   * run the dev server and go to `http://localhost:3000/open-graph-builder`.
   */
  openGraph: {
    title: "SkinCast | Daily skin insights that feel personal",
    description:
      "Join the waitlist for SkinCast and get early access to daily skin insights, personalized guidance, and a calmer routine.",
    url: "https://app-website-url.com",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 720,
        alt: "",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SkinCast | Daily skin insights that feel personal",
    description:
      "Join the waitlist for SkinCast and get early access to daily skin insights, personalized guidance, and a calmer routine.",
    images: ["/og-preview.png"],
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
              // Uncomment the line below once you're ready to start using Release Notes
              // { label: "Release Notes", href: "/release-notes" },
            ]}
            action={
              IS_WAITLIST_ENABLED ? (
                <GetNotifiedActionButton href="/#waitlist" label="Join waitlist" />
              ) : (
                <DownloadActionButton />
              )
            }
          />

          {children}

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
