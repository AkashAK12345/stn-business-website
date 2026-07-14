import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ReadingProgress from "@/components/ui/ReadingProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S. T. Natarajan & Sons | Hardware & Industrial Supplies since 1977",
  description: "S. T. Natarajan & Sons has been serving Madurai since 1977, offering premium hardware, fasteners, power tools, and industrial supplies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#fcfcfc] text-charcoal font-sans">
        <ReadingProgress />
        <Navbar />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
