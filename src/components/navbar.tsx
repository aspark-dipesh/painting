"use client";
import { twMerge } from "tailwind-merge";
import { ICategory } from "@/interface";
import CartContext from "@/store/CartContext";
import { useOnClickOutside } from "usehooks-ts";

import {
  AlignJustify,
  Calendar,
  MapPin,
  Search,
  ShoppingBasket,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useContext, useRef, useState } from "react";
import SearchBox from "./Search";

export const Navbar = ({ categories }: { categories?: ICategory[] }) => {
  const { cart } = useContext(CartContext);
  const ref = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleClickOutside = () => setShowMenu(false);
  useOnClickOutside(ref, handleClickOutside);
  return (
    <header className="">
      <div className="w-full bg-[#f6f2ef] border-b border-[#e5dbcd] ">
        <div className="container mx-auto p-2 flex justify-end">
          <Link href="/contact" className=" capitalize">
            contact
          </Link>
        </div>
      </div>
      <div className="container mx-auto flex flex-row justify-between py-4">
        <div className="flex justify-start items-center gap-3 lg:block w-full md:w-fit relative">
          <div ref={ref}>
            <label className="z-50 relative lg:hidden">
              <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                <input
                  className="hidden peer"
                  type="checkbox"
                  checked={showMenu}
                  // value={showMenu ? "true" : "false"}
                  onChange={(e) => {
                    setShowMenu(e.target.checked);
                  }}
                />
                <div className="w-[50%] h-[2px] bg-rose-500 rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
                <div className="w-[50%] h-[2px] bg-rose-500 rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
                <div className="w-[50%] h-[2px] bg-rose-500 rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
              </div>
            </label>
            <div
              className={twMerge(
                "w-64  bg-[#ffffff] -translate-x-72  transition-all duration-300 absolute  z-50 p-5   rounded-e-2xl shadow-2xl lg:hidden ",
                showMenu ? "translate-x-0" : "-translate-x-72"
              )}
            >
              <div className="w-full flex flex-col gap-2 py-0 px-1 text-white  ">
                {categories?.map((category) => (
                  <div
                    className="group h-full flex flex-1 min-w-fit items-center bg-rose-600 px-2"
                    key={category.id}
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
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
            </div>
          </div>
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
        </div>
        <div className="flex items-center mt-2 justify-between md:justify-end gap-3 text-rose-600">
          <div className="hidden md:block">
            <Suspense>
              <SearchBox />
            </Suspense>
          </div>
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
      <div className=" w-full md:hidden px-10">
        <Suspense>
          <SearchBox />
        </Suspense>
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
