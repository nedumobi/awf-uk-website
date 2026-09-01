import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.awf-uk.org"),
  title: {
    default: "Anambra Welfare Foundation UK",
    template: "%s | Anambra Welfare Foundation UK",
  },
  description:
    "Anambra Welfare Foundation UK supports individuals, families and communities across Greater Manchester through welfare, culture, education and wellbeing programmes rooted in Anambra heritage.",
  openGraph: {
    title: "Anambra Welfare Foundation UK",
    description:
      "Supporting our community. Preserving our heritage. Building stronger connections.",
    url: "https://www.awf-uk.org",
    siteName: "Anambra Welfare Foundation UK",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
