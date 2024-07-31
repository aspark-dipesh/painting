import type { Metadata } from "next";

import "./globals.css";

import { poppins } from "@/components/ui/font";
import { PopUpBanner } from "@/components/PopUpBanner";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import { ICategory } from "@/interface";

export const metadata: Metadata = {
  title: "Painter Krishna",
  description: "Decorative Painting Shop",
};
async function GetCategoryList(): Promise<ICategory[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = GetCategoryList();
  return (
    <html lang="en">
      <body className={poppins.className}>
        <PopUpBanner />
        <Navbar />
        <main className="min-h-[80vh] container mt-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
