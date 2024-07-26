import {
  Calendar,
  CircleUserRound,
  MapPin,
  Search,
  ShoppingBasket,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <header className="">
      <div className="w-full bg-[#f6f2ef] border-b border-[#e5dbcd] ">
        <div className="container mx-auto p-2 flex justify-end">
          <Link href="/contact" className=" capitalize">
            contact
          </Link>
        </div>
      </div>
      <div className="container mx-auto flex justify-between py-4">
        <div>
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
        <div className="flex items-center justify-end gap-3 text-rose-600">
          <div className="relative">
            <label htmlFor="Search" className="sr-only">
              Search
            </label>

            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-md border-gray-200 py-1.5 pe-10 shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
                <span className="sr-only">Search</span>

                <Search className="w-5 h-5 text-rose-600 " />
              </button>
            </span>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-6 h-6" />
            <span className="text-xs">Store</span>
          </div>
          <div className="flex flex-col items-center">
            <Calendar className="w-6 h-6" />
            <span className="text-xs">WorkShop</span>
          </div>
          <div className="flex flex-col items-center">
            <CircleUserRound className="w-6 h-6" />
            <span className="text-xs">Sign In/Up</span>
          </div>
          <div className="flex flex-col items-center">
            <ShoppingBasket className="w-6 h-6" />
            <span className="text-xs">Bag</span>
          </div>
        </div>
      </div>
      <div className="mx-auto container   text-base  uppercase hidden  lg:flex">
        <div className="w-full  border-2 border-rose-600 flex text-white rounded-md relative">
          <div className="bg-rose-600 w-full flex items-center py-0 px-1 ">
            <div className="group h-full flex flex-1 min-w-fit items-center">
              <Link
                href="/collection"
                className="border-transparent py-1 transition-all duration-300 border-b-2 hover:border-white"
              >
                Wall Painting
              </Link>
              <div className="absolute top-full left-0 right-0 h-96 z-50 bg-white group-hover:opacity-100 hidden group-hover:block">
                <div className="h-96 w-full border-2 border-rose-600 text-rose-600">
                  1
                </div>
              </div>
            </div>
            <div className="group h-full flex flex-1 min-w-fit items-center">
              <Link
                href="/collection"
                className="border-transparent py-1 transition-all duration-300 border-b-2 hover:border-white"
              >
                Oil painting
              </Link>
              <div className="absolute top-full left-0 right-0 h-96 z-50 bg-white group-hover:opacity-100 hidden group-hover:block">
                <div className="h-96 w-full border-2 border-rose-600 text-rose-600">
                  2
                </div>
              </div>
            </div>

            <div className="group h-full flex flex-1 min-w-fit items-center">
              <Link
                href="/collection"
                className="border-transparent py-1 transition-all duration-300 border-b-2 hover:border-white"
              >
                Acrylic
              </Link>
              <div className="absolute top-full left-0 right-0 h-96 z-50 bg-white group-hover:opacity-100 hidden group-hover:block">
                <div className="h-96 w-full border-2 border-rose-600 text-rose-600">
                  3
                </div>
              </div>
            </div>
            <div className="group h-full flex flex-1 min-w-fit items-center">
              <Link
                href="/collection"
                className="border-transparent py-1 transition-all duration-300 border-b-2 hover:border-white"
              >
                Watercolor
              </Link>
              <div className="absolute top-full left-0 right-0 h-96 z-50 bg-white group-hover:opacity-100 hidden group-hover:block">
                <div className="h-96 w-full border-2 border-rose-600 text-rose-600">
                  4
                </div>
              </div>
            </div>
            <div className="group h-full flex flex-1 min-w-fit items-center">
              <Link
                href="/collection"
                className="border-transparent py-1 transition-all duration-300 border-b-2 hover:border-white"
              >
                Sketch
              </Link>
              <div className="absolute top-full left-0 right-0 h-96 z-50 bg-white group-hover:opacity-100 hidden group-hover:block">
                <div className="h-96 w-full border-2 border-rose-600 text-rose-600">
                  5
                </div>
              </div>
            </div>
            <div className="group h-full flex flex-1 min-w-fit items-center">
              <Link
                href="/collection"
                className="border-transparent py-1 transition-all duration-300 border-b-2 hover:border-white"
              >
                Sculpture
              </Link>
              <div className="absolute top-full left-0 right-0 h-96 z-50 bg-white group-hover:opacity-100 hidden group-hover:block">
                <div className="h-96 w-full border-2 border-rose-600 text-rose-600">
                  6
                </div>
              </div>
            </div>
            <div className="group h-full flex flex-1 min-w-fit items-center">
              <Link
                href="/collection"
                className="border-transparent py-1 transition-all duration-300 border-b-2 hover:border-white"
              >
                Photography
              </Link>
              <div className="absolute top-full left-0 right-0 h-96 z-50 bg-white group-hover:opacity-100 hidden group-hover:block">
                <div className="h-96 w-full border-2 border-rose-600 text-rose-600">
                  7
                </div>
              </div>
            </div>
          </div>
          <div className=" text-rose-600 flex items-center  ">
            <div className="group h-full flex flex-1 min-w-fit items-center p-2  px-4 ">
              <Link
                href="/collection"
                className="border-transparent py-1 transition-all duration-300 border-b-2 hover:border-rose-600"
              >
                Sale
              </Link>
              <div className="absolute top-full left-0 right-0 h-96 z-50 bg-white group-hover:opacity-100 hidden group-hover:block">
                <div className="h-96 w-full border-2 border-rose-600 text-rose-600">
                  8
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
