import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="mx-auto container px-4 md:px-0 ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <Image
                src="/media/logo.svg"
                alt=""
                width={50}
                height={50}
                className="object-contain"
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-lg font-semibold transition hover:text-gray-500/75"
                    href="#"
                  >
                    Gallery
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-lg font-semibold transition hover:text-gray-500/75"
                    href="#"
                  >
                    About us
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-lg font-semibold transition hover:text-gray-500/75"
                    href="#"
                  >
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-lg font-semibold transition hover:text-gray-500/75"
                    href="#"
                  >
                    Cart
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="md:flex items-end gap-4 hidden">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Login
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600text-lg font-semibold transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
