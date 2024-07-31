import type { Metadata } from "next";

import "./globals.css";

import { poppins } from "@/components/ui/font";
import { PopUpBanner } from "@/components/PopUpBanner";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/Footer";
import { IBanner, IBio, ICategory } from "@/interface";

export const metadata: Metadata = {
  title: "Painter Krishna",
  description: "Decorative Painting Shop",
};
async function GetCategoryList(): Promise<ICategory[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
async function GetPopUpBanner(): Promise<IBanner[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/popup-banner/`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
async function GetBio(): Promise<IBio> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bio/`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await GetCategoryList();
  const banners = await GetPopUpBanner();
  const bio = await GetBio();
  return (
    <html lang="en">
      <body className={poppins.className + " text-gray-600"}>
        <PopUpBanner PopupBanners={banners} />
        <Navbar categories={categories} />
        <main className="min-h-[80vh] container mt-2">{children}</main>
        <Footer Bio={bio} />
      </body>
    </html>
  );
}
