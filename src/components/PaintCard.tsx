import { IProduct } from "@/interface";
import { Brush, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IProps {
  product: IProduct;
}
const PaintCard = ({ product }: IProps) => {
  return (
    <>
      <Link
        href={`/${product.slug}`}
        className="block rounded-lg p-2 shadow-sm shadow-indigo-900"
      >
        <div className="w-full aspect-[4/3] relative overflow-hidden rounded-lg z-0">
          <Image
            fill
            src={product.featured_image}
            className="w-full hover:scale-110 transition-all object-cover"
            alt="image1"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Price</dt>

              <dd className="text-md text-gray-500 font-bold">
                ${product.price}
              </dd>
            </div>

            <div>
              <dt className="sr-only">name</dt>

              <dd className="font-medium uppercase">{product.title}</dd>
            </div>
          </dl>

          {/* <div className="mt-6 flex items-center gap-4 justify-between text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-start sm:gap-2 flex flex-col">
              <Brush size={16} />
              <div className="mt-1.5 sm:mt-0 flex flex-col">
                <p className="text-gray-500">Mediums</p>

                <p className="font-medium">Watercolor</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-start sm:gap-2 flex flex-col">
              <Palette size={16} />

              <div className="mt-1.5 sm:mt-0 flex flex-col">
                <p className="text-gray-500">Styles</p>

                <p className="font-medium">Abstract</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-start sm:gap-2 flex flex-col">
              <svg
                className="size-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0 flex flex-col">
                <p className="text-gray-500">Subject Matter</p>

                <p className="font-medium">portraits</p>
              </div>
            </div>
          </div> */}
        </div>
      </Link>
    </>
  );
};

export default PaintCard;
