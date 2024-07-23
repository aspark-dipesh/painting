import Link from "next/link";
import React from "react";

const HeadLine = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between py-1">
      <h3 className="text-3xl font-bold sm:text-4xl  my-5">{title}</h3>

      {/* view all */}
      <Link href="#" className="flex items-center gap-2 ">
        <span className="font-bold text-sm md:text-xl">View collection</span>
        <span className="text-sm md:text-2xl">{">"}</span>
      </Link>
    </div>
  );
};

export default HeadLine;
