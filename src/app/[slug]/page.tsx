import ProductDetail from "@/components/ProductDetail";
import { IProduct } from "@/interface";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
const GetProductBySlug = async ({
  slug,
}: {
  slug: string;
}): Promise<IProduct> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
};
export default async function PaintingDetails({
  params,
  searchParams,
}: {
  params: {
    slug: string;
  };
  searchParams: ParsedUrlQuery;
}) {
  const product = await GetProductBySlug({ slug: params.slug });
  return (
    <div className="font-[sans-serif]">
      <ProductDetail product={product} />
    </div>
  );
}
