import { ThemeProvider } from "@/context/ThemeContext";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://financialatelier.vercel.app"),
  title: {
    default: "Financial Atelier | Expense Tracker & Budgeting Tool",
    template: "Financial Atelier | %s",
  },
  description:
    "Master your wealth with Financial Atelier. Experience an editorial approach to expense tracking, budgeting, and wealth building with precision-engineered tools.",
  keywords: [
    "Financial Atelier",
    "Expense Tracker",
    "Budgeting Tool",
    "Wealth Management",
    "Personal Finance",
    "Finance App",
  ],
  authors: [{ name: "Financial Atelier Team" }],
  creator: "Financial Atelier",
  publisher: "Financial Atelier",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Financial Atelier | Expense Tracker & Budgeting Tool",
    description:
      "Master your wealth with Financial Atelier. Experience an editorial approach to expense tracking, budgeting, and wealth building.",
    url: "https://financialatelier.vercel.app",
    siteName: "Financial Atelier",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Atelier | Expense Tracker & Budgeting Tool",
    description:
      "Master your wealth with Financial Atelier. Experience an editorial approach to expense tracking, budgeting, and wealth building.",
    creator: "@FinanceAtelier",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
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
          <SpeedInsights />
          <Analytics />

          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
