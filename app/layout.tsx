import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kannan Sekar Annu Radha - Software Engineer & Physics Researcher",
  description:
    "Portfolio for Kannan Sekar Annu Radha, a software engineer and physics researcher building GPU-accelerated AI systems, scientific tooling, and polished products.",
  icons: {
    icon: "/MrFatness.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
