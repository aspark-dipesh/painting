"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const params = useSearchParams();
  const currentPage = Number(params.get("page")) || 1;
  const NewSearchParams = new URLSearchParams(params);

  const HandlePrev = () => {
    NewSearchParams.set("page", String(currentPage - 1));
    const newParams = NewSearchParams.toString();
    return (
      <Link
        href={`?${newParams}`}
        className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      >
        <span className="sr-only">Next Page</span>
        <ChevronLeft className="h-4 w-4" />
      </Link>
    );
  };

  const HandleNext = () => {
    NewSearchParams.set("page", String(currentPage + 1));
    const newParams = NewSearchParams.toString();
    return (
      <Link
        href={`?${newParams}`}
        className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
      >
        <span className="sr-only">Next Page</span>
        <ChevronRight className="h-4 w-4" />
      </Link>
    );
  };

  return (
    <div className="w-full mt-5 flex justify-center">
      <div className="inline-flex items-center justify-center gap-3">
        {currentPage > 1 && <HandlePrev />}
        <p className=" text-gray-900">
          {currentPage}
          <span className="mx-0.25">/</span>
          {totalPages}
        </p>

        {currentPage < totalPages && <HandleNext />}
      </div>
    </div>
  );
}
