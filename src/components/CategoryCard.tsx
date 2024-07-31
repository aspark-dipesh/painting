import Image from "next/image";
import React from "react";

const CategoryCard = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="w-full shadow-md p-1  md:p-3 flex flex-col gap-1 rounded-br-3xl">
      <div className="w-full aspect-[4/3] relative ">
        <Image
          src={image}
          alt="Picture of the author"
          fill
          className="rounded-tl-3xl object-cover"
          sizes="max-width(768) 100vw, 50vw"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-bold">{title}</span>
          </div>
          <span className="font-bold text-end text-red-600">
            +220 Paintings
          </span>
        </div>
        <button className="hover:bg-sky-700 text-gray-50 bg-pink-400 py-2 rounded-br-xl">
          View more →
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
