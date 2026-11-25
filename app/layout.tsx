import type { Metadata, Viewport } from "next";
import "./globals.css";
import { description, personalInfo, siteUrl } from "./site";

const title = "Kannan Sekar · Software Engineer & Physics Researcher";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  url: `${siteUrl}/`,
  jobTitle: "Software Engineer and Physics Researcher",
  affiliation: {
    "@type": "Organization",
    name: "King's College London",
  },
  sameAs: [personalInfo.linkedin, personalInfo.github, personalInfo.industrials],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s · Kannan Sekar",
  },
  description,
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    type: "profile",
    firstName: "Kannan",
    lastName: "Sekar",
    title,
    description,
    url: `${siteUrl}/`,
    siteName: "Kannan Sekar",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kannan Sekar, software engineer and physics researcher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/mark.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

const directionContract = `<!--
THESIS: Kannan's record, set in the live x.ai product-site grammar: a centered claim, pill actions, and large work panels. It refuses the old equal glyph-tile portfolio.
OWN-WORLD: Field #0a0a0a, panels #1a1a1a at 16px radius, white and #202020 pills, Geist 450–500, sunset #ff6308 on one chip, warm stone for meta.
STORY: A visitor learns what Kannan ships, then emails, downloads the CV, or opens a project.
FIRST VIEWPORT: Fixed wordmark and text nav, centered “Software for [clinics|clusters|watches|lenses].”, the real bio, Get in touch as the white pill. Work panels begin at the bottom edge.
FORM: Pinned to https://x.ai/ as of 24 Nov 2026. Homepage staging: centered hero, then asymmetric panels, then a spec list. Seed: brief-pinned-xai.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400..600&family=Geist+Mono:wght@400;500&family=IBM+Plex+Mono:wght@400;500&family=Noto+Sans+Tamil:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <div hidden dangerouslySetInnerHTML={{ __html: directionContract }} />
        {children}
      </body>
    </html>
  );
}
