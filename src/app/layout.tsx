import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/custom-cursor";
import LiquidBackground from "@/components/ui/liquid-background";

export const metadata: Metadata = {
  title: "SAKannan.com",
  description: "SAKannan.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LiquidBackground />
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
