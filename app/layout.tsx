import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kannan Sekar - Software Engineer & Researcher",
  description: "Bridging the gap between Physics, CS, and Math. Building production-grade AI systems and optimizing algorithms for cloud, mobile, and embedded environments.",
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
