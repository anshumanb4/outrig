import type { Metadata } from "next";
import { Inter, Cardo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cardo = Cardo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cardo",
});

export const metadata: Metadata = {
  title: "Outrig | Secure RV, Boat & Vehicle Storage + Expert RV Service",
  description:
    "Nationwide secure storage for RVs, boats, and vehicles with on-site RV service and repair. 20+ locations across the US. Find your nearest Outrig facility today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cardo.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
