import type { Metadata } from "next";

import "./globals.css";

import { lusitana } from "./ui/font";
import { PopUpBanner } from "@/components/PopUpBanner";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Painters Mart",
  description: "Decorative Painting Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lusitana.className}>
        <PopUpBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
