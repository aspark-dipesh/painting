import type { Metadata } from "next";

import "./globals.css";

import { poppins } from "@/components/ui/font";
import { PopUpBanner } from "@/components/PopUpBanner";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Painter Krishna",
  description: "Decorative Painting Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <PopUpBanner />
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
