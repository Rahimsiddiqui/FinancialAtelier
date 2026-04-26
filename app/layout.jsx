import { Providers } from "@/components/Providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Manrope } from "next/font/google";
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
  robots: {
    index: true,
    follow: true,
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad"
          strategy="afterInteractive"
        />

        <meta charSet="UTF-8" />
        <meta name="google-site-verification" content="DiZ7jvNnZfQuSf-65XGAw5wxlMRq92-dG2Gi0ET1Pj0" />
      </head>
      <body>
        <Providers>
          <SpeedInsights />
          <Analytics />

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
