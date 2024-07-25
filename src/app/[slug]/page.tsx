import ProductDetail from "@/components/ProductDetail";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

export default function PaintingDetails({
  params,
  searchParams,
}: {
  params: {
    slug: string;
  };
  searchParams: ParsedUrlQuery;
}) {
  return (
    <div className="font-[sans-serif]">
      <ProductDetail src={searchParams.src?.toString()!} />
    </div>
  );
}
