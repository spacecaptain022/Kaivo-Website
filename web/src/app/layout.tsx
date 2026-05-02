import type { Metadata } from "next";
import localFont from "next/font/local";
import { AppBootLoader } from "@/components/app-boot-loader";
import "./globals.css";

const googleSansFlex = localFont({
  src: "../fonts/GoogleSansFlex-Variable.ttf",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaivo — From search to delegation",
  description:
    "Book flights in under 60 seconds. Kaivo finds, compares, and prepares one decision for you.",
  openGraph: {
    title: "Kaivo — Search less. Go more.",
    description:
      "Stop searching. Start delegating. The delegation layer for modern travel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${googleSansFlex.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <AppBootLoader>{children}</AppBootLoader>
      </body>
    </html>
  );
}
