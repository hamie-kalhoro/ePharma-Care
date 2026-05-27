import type { Metadata, Viewport } from "next";
import "./globals.css";
import FloatingAIAssistant from "@/components/FloatingAIAssistant";

export const metadata: Metadata = {
  title: "MediGuide Pro | Premium Healthcare Platform",
  description: "Advanced AI-powered healthcare platform with premium pharmacy services, real-time patient monitoring, and intelligent drug interaction analysis. HIPAA-compliant and secure.",
  keywords: ["healthcare", "pharmacy", "AI", "medical", "telemedicine", "patient portal", "drug interactions"],
  authors: [{ name: "MediGuide Pro" }],
  openGraph: {
    title: "MediGuide Pro | Premium Healthcare Platform",
    description: "Advanced AI-powered healthcare platform with premium pharmacy services",
    type: "website",
    locale: "en_US",
    siteName: "MediGuide Pro",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#059669",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col font-body antialiased selection:bg-emerald-500/30 selection:text-emerald-900">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-emerald-600 focus:text-white focus:rounded-lg focus:font-medium">
          Skip to main content
        </a>

        {children}
        
        <FloatingAIAssistant />

        <script id="main-content" />
      </body>
    </html>
  );
}
