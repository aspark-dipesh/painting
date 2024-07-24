import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";
import { Princess_Sofia } from "next/font/google";
import { Poppins } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const sofia = Princess_Sofia({
  weight: ["400"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext"],
});
