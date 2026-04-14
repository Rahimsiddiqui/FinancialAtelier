import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
// import { SpeedInsights } from "@vercel/speed-insights/react";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Financial Atelier",
  description: "Next.js migrated app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ThemeProvider>
          {/* <SpeedInsights /> */}

          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
