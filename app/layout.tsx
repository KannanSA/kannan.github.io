import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kannan S. · Software Engineer & Physics Researcher",
  description:
    "Portfolio for Kannan Sekar Annu Radha, a software engineer and physics researcher building GPU-accelerated AI systems, scientific tooling, and polished products.",
  icons: {
    icon: "/sakannan-mark.svg",
  },
};

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
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600&family=Noto+Sans+Tamil:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
