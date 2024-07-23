import Image from "next/image";
import PaintCard from "../components/PaintCard";
import HotDealsCard from "../components/HotDealsCard";
import HeadLine from "../components/HeadLine";
import CategoryCard from "../components/CategoryCard";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat max-h-[70vh]">
        <div className="absolute inset-0  from-gray-900/95 to-gray-900/25 bg-gradient-to-r "></div>

        <div className="relative max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-500">
                {" "}
                Forever Home.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <HeadLine title="Home Decor" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2">
          <PaintCard src="/media/images/image1.jpg" />
          <PaintCard src="/media/images/image3.jpg" />
          <PaintCard src="/media/images/image20.jpg" />

          <PaintCard src="/media/images/image2.jpg" />
          <PaintCard src="/media/images/image19.jpg" />
          <PaintCard src="/media/images/image4.jpg" />

          <PaintCard src="/media/images/image8.jpg" />
          <PaintCard src="/media/images/image9.jpg" />
          {/* <PaintCard src="/media/images/image10.jpg" />

            <PaintCard src="/media/images/image12.jpg" />
            <PaintCard src="/media/images/image13.jpg" />
            <PaintCard src="/media/images/image15.jpg" /> */}
        </div>
      </section>
      {/* cta section 1 */}
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="#"
                className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                View Collection
              </a>
            </div>
          </div>
        </div>
        <div className="sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px] relative overflow-hidden">
          <Image
            alt=""
            src="/media/images/image5.jpg"
            className="object-cover "
            fill
          />
        </div>
      </section>
      <div className="mt-5 container mx-auto">
        <div className="divider"></div>
        <div className="bg-base-200 p-3 mt-3 rounded">
          <div>
            <h2 className="font-bold text-2xl text-center mt-5">
              Explore the Collection
            </h2>
            <p className="max-w-lg text-center mx-auto">
              Decorate your place with our beautiful paintings. We have a wide
              range of paintings for your home, office, restaurant, and many
              more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-2 gap-4">
            <CategoryCard
              title="Hand Paintings"
              image="/media/images/image28.jpg"
            />
            <CategoryCard
              title="Acrylic Painting"
              image="/media/images/image18.jpg"
            />
            <CategoryCard
              title="Wall Panting"
              image="/media/images/image9.jpg"
            />
            <CategoryCard
              title="Oil Paintings"
              image="/media/images/image40.jpg"
            />
            <CategoryCard title="Spiritual" image="/media/images/image36.jpg" />
            <CategoryCard
              title="Hand Painting Signage"
              image="/media/images/image43.jpg"
            />
            <CategoryCard title="Portrait" image="/media/images/image38.jpg" />
          </div>
        </div>
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

        {/* Painting on sale */}
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
      </div>
    </>
  );
}
