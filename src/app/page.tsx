import WordFromArtist from "@/components/home/AWordFromArtist";
import Banner from "@/components/home/Banner";
import CategorySection from "@/components/home/CategorySection";
import { ContactUs } from "@/components/home/ContactUs";
import CTA from "@/components/home/CTA";
import { FeaturedItems } from "@/components/home/FeaturedItems";
import Testimonial from "@/components/home/Testimonial";
import { IBanner, ICategory, IPagination, IProduct } from "@/interface/index";
async function GetCategoryList(): Promise<ICategory[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories/`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
async function GetProductList(): Promise<IPagination<IProduct>> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
async function GetBanner(): Promise<IBanner[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/banner/`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return await res.json();
}
export default async function Home() {
  const categories = await GetCategoryList();
  const products = await GetProductList();
  const banners = await GetBanner();
  return (
    <>
      {/* Hero section */}
      <Banner banners={banners} />
      {/* featured section */}
      <FeaturedItems products={products.results} />
      {/* cta section 1 */}
      <CTA />
      <CategorySection categories={categories} />
      {/* word from artist */}
      <WordFromArtist />
      {/* testimonial */}
      <Testimonial />
      {/* contact us */}
      <ContactUs />
      {/* <section className="mt-5 container mx-auto">
        <div className="divider"></div>

        <div>
          <HeadLine title="Wall Paintings" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
            <PaintCard src="/media/images/image5.jpg" />
            <PaintCard src="/media/images/image6.jpg" />
            <PaintCard src="/media/images/image7.jpg" />

            <PaintCard src="/media/images/image16.jpg" />
            <PaintCard src="/media/images/image4.jpg" />
            <PaintCard src="/media/images/image11.jpg" />

            <PaintCard src="/media/images/image17.jpg" />
            <PaintCard src="/media/images/image18.jpg" />
            <PaintCard src="/media/images/image19.jpg" />

            <PaintCard src="/media/images/image21.jpg" />
            <PaintCard src="/media/images/image22.jpg" />
            <PaintCard src="/media/images/image32.jpg" />
          </div>
        </div>

        <div>
          <HeadLine title="Portrait" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
            <PaintCard src="/media/images/image25.jpg" />
            <PaintCard src="/media/images/image26.jpg" />
            <PaintCard src="/media/images/image27.jpg" />

            <PaintCard src="/media/images/image30.jpg" />
            <PaintCard src="/media/images/image29.jpg" />
            <PaintCard src="/media/images/image28.jpg" />

            <PaintCard src="/media/images/image31.jpg" />
            <PaintCard src="/media/images/image32.jpg" />
            <PaintCard src="/media/images/image33.jpg" />

            <PaintCard src="/media/images/image34.jpg" />
            <PaintCard src="/media/images/image35.jpg" />
            <PaintCard src="/media/images/image36.jpg" />
          </div>
        </div>
        <div className="mt-10">
          <HeadLine title="Trending This Month" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
            <PaintCard src="/media/images/image37.jpg" />
            <PaintCard src="/media/images/image38.jpg" />
            <PaintCard src="/media/images/image10.jpg" />
            <PaintCard src="/media/images/image41.jpg" />
            <PaintCard src="/media/images/image42.jpg" />
            <PaintCard src="/media/images/image24.jpg" />

            <PaintCard src="/media/images/image40.jpg" />
            <PaintCard src="/media/images/image43.jpg" />
            <PaintCard src="/media/images/image23.jpg" />

            <PaintCard src="/media/images/image15.jpg" />
            <PaintCard src="/media/images/image19.jpg" />
            <PaintCard src="/media/images/image8.jpg" />
          </div>
        </div>
      </section> */}
    </>
  );
}
