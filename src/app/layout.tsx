import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  fallback: ["Manrope Fallback", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "ScrollHub — Web & Media Directory",
  description:
    "A searchable directory of 164 streaming, media, download, gaming, and privacy links.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <div aria-hidden="true" className="pointer-events-none fixed inset-0">
          <div
            className="absolute inset-y-0 left-[calc(50%-32rem-11px)] w-[10px] border-x border-black/5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(0,0,0,0.07) 0 1px, transparent 1px 6px)",
            }}
          />
          <div
            className="absolute inset-y-0 right-[calc(50%-32rem-11px)] w-[10px] border-x border-black/5"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, rgba(0,0,0,0.07) 0 1px, transparent 1px 6px)",
            }}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
