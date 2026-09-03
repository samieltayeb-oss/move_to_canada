import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yassir's Calgary Move Command Center | Riyadh to Alberta",
  description: "Comprehensive relocation intelligence and decision system for Yassir A. E. Abdulrhman and family (2 adults, 3 children under 15) moving from Riyadh, Saudi Arabia to Calgary, Alberta, Canada.",
  keywords: [
    "Calgary relocation",
    "Riyadh to Canada",
    "Yassir Abdulrhman",
    "Move to Canada",
    "Calgary housing",
    "Calgary Islamic schools",
    "Alberta taxes",
    "Saudi driving license Alberta",
    "Calgary Career Accelerator",
    "Costco Calgary food budget",
    "Calgary gas prices"
  ],
  icons: {
    icon: [
      { url: '/images/logo.png', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  authors: [{ name: "Antigravity Executive Intelligence" }]
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
        <AppProvider>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
