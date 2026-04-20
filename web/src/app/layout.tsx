import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const googleSansFlex = localFont({
  src: "../fonts/GoogleSansFlex-Variable.ttf",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kaivo — From search to delegation",
  description:
    "Book flights in under 60 seconds. Kaivo compares, prepares, and lines everything up for approval.",
  openGraph: {
    title: "Kaivo — Travel bookings just got better",
    description:
      "Stop doing. Start delegating. The delegation layer for modern travel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${googleSansFlex.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
