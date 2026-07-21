import type { Metadata } from "next";
import { Anton, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Enora Hauduc",
  description: "Student / Mathematics / AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${serif.variable} ${sans.variable} font-sans`}
      >
        <div className="paper-grain" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
