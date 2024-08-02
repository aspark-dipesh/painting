"use client";
import { ICategory } from "@/interface";
import CartContext from "@/store/CartContext";
import {
  AlignJustify,
  Calendar,
  MapPin,
  Search,
  ShoppingBasket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useContext } from "react";
import SearchBox from "./Search";

export const Navbar = ({ categories }: { categories?: ICategory[] }) => {
  const { cart } = useContext(CartContext);
  return (
    <header className="">
      <div className="w-full bg-[#f6f2ef] border-b border-[#e5dbcd] ">
        <div className="container mx-auto p-2 flex justify-end">
          <Link href="/contact" className=" capitalize">
            contact
          </Link>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between py-4">
        <div className="flex justify-between gap-3 md:block w-full md:w-fit">
          <Link className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>
            <Image
              src="/media/logo2.png"
              alt=""
              width={150}
              height={100}
              className="object-contain !relative"
            />
          </Link>
          <div>
            <label htmlFor="menu">
              <AlignJustify className="md:hidden" />
            </label>
            <input type="checkbox" id="menu" className="sr-only peer" />
          </div>
        </div>
        <div className="flex items-center mt-2 justify-between md:justify-end gap-3 text-rose-600">
          <Suspense>
            <SearchBox />
          </Suspense>
          <div className="flex flex-col items-center ">
            <MapPin className="w-6 h-6" />
            <span className="text-xs">Store</span>
          </div>
          <div className="flex flex-col items-center">
            <Calendar className="w-6 h-6" />
            <span className="text-xs ">WorkShop</span>
          </div>
          {/* <div className="flex flex-col items-center ">
            <CircleUserRound className="w-6 h-6" />
            <span className="text-xs ">Sign In/Up</span>
          </div> */}
          <Link href="/cart" className="flex flex-col items-center relative">
            {cart?.length > 0 && (
              <div className="absolute h-5 w-5 -top-4 -right-3 bg-rose-600 rounded-full text-white flex items-center justify-center">
                <span className="text-xs font-bold">{cart?.length}</span>
              </div>
            )}

            <ShoppingBasket className="w-6 h-6" />
            <span className="text-xs ">Bag</span>
          </Link>
        </div>
      </div>
      <div className="mx-auto container   text-base  uppercase hidden  lg:flex">
        <div className="w-full  border-2 border-rose-600 flex text-white rounded-md relative">
          <div className="bg-rose-600 w-full flex items-center py-0 px-1 ">
            {categories?.map((category) => (
              <div
                className="group h-full flex flex-1 min-w-fit items-center"
                key={category.id}
              >
                <Link
                  href={`/collection/${category.slug}`}
                  className="border-transparent py-1 transition-all duration-300 border-b-2 hover:border-white"
                >
                  {category.title}
                </Link>
                {/* <div className="absolute top-full left-0 right-0 h-96 z-50 bg-white group-hover:opacity-100 hidden group-hover:block">
                  <div className="h-96 w-full border-2 border-rose-600 text-rose-600">
                    1
                  </div>
                </div> */}
              </div>
            ))}
          </div>
          <div className=" text-rose-600 flex items-center  ">
            <div className="group h-full flex flex-1 min-w-fit items-center p-2  px-4 ">
              <Link
                href="/collection/sale"
                className="border-transparent py-1 transition-all duration-300 border-b-2 hover:border-rose-600"
              >
                Sale
              </Link>
              {/* <div className="absolute top-full left-0 right-0 h-96 z-50 bg-white group-hover:opacity-100 hidden group-hover:block">
                <div className="h-96 w-full border-2 border-rose-600 text-rose-600">
                  8
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
