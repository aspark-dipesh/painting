import Image from "next/image";
import PaintCard from "./components/PaintCard";
import HotDealsCard from "./components/HotDealsCard";
import HeadLine from "./components/HeadLine";
import CategoryCard from "./components/CategoryCard";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
  return (
    <>
      <div className="mt-5 container mx-auto">
        <div>
          <ImageSlider />
        </div>
        <div className="divider"></div>
        {/* <div className="">
          <HeadLine title="Hot Deals" />
          <div className="grid grid-cols-4 mt-2 gap-4">
            <HotDealsCard title="Dashin Deal" />
            <HotDealsCard title="Thihar Deal" />
            <HotDealsCard title="Holi Special" />
          </div>
        </div> */}
        <div className="divider"></div>
        <div className="mt-10">
          <HeadLine title="Home Decor" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">

            <PaintCard src='/media/images/image1.jpg' />
            <PaintCard src='/media/images/image3.jpg' />
            <PaintCard src='/media/images/image20.jpg' />


            <PaintCard src='/media/images/image2.jpg' />
            <PaintCard src='/media/images/image19.jpg' />
            <PaintCard src='/media/images/image4.jpg' />

            <PaintCard src='/media/images/image8.jpg' />
            <PaintCard src='/media/images/image9.jpg' />
            <PaintCard src='/media/images/image10.jpg' />


            <PaintCard src='/media/images/image12.jpg' />
            <PaintCard src='/media/images/image13.jpg' />
            <PaintCard src='/media/images/image15.jpg' />


          </div>
        </div>
        <div className="divider"></div>
        <div className="bg-base-200 p-3 mt-3 rounded">
          <div>
            <h2 className="font-bold text-2xl text-center mt-5">Explore the Collection</h2>
            <p className="max-w-lg text-center mx-auto">
              Decorate your place with our beautiful paintings. We have a wide range of paintings for your home, office, restaurant, and many more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-2 gap-4">
            <CategoryCard title="Hand Paintings" image="/media/images/image28.jpg" />
            <CategoryCard title="Acrylic Painting" image="/media/images/image18.jpg" />
            <CategoryCard title="Wall Panting" image="/media/images/image9.jpg" />
            <CategoryCard title="Oil Paintings" image="/media/images/image40.jpg" />
            <CategoryCard title="Spiritual" image="/media/images/image36.jpg" />
            <CategoryCard title="Hand Painting Signage" image="/media/images/image43.jpg" />
            <CategoryCard title="Portrait" image="/media/images/image38.jpg" />

          </div>
        </div>
        <div>
          <HeadLine title="Wall Paintings" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">

            <PaintCard src='/media/images/image5.jpg' />
            <PaintCard src='/media/images/image6.jpg' />
            <PaintCard src='/media/images/image7.jpg' />

            <PaintCard src='/media/images/image16.jpg' />
            <PaintCard src='/media/images/image4.jpg' />
            <PaintCard src='/media/images/image11.jpg' />

            <PaintCard src='/media/images/image17.jpg' />
            <PaintCard src='/media/images/image18.jpg' />
            <PaintCard src='/media/images/image19.jpg' />

            <PaintCard src='/media/images/image21.jpg' />
            <PaintCard src='/media/images/image22.jpg' />
            <PaintCard src='/media/images/image32.jpg' />


          </div>

        </div>

        <div>
          <HeadLine title="Portrait" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">

            <PaintCard src='/media/images/image25.jpg' />
            <PaintCard src='/media/images/image26.jpg' />
            <PaintCard src='/media/images/image27.jpg' />


            <PaintCard src='/media/images/image30.jpg' />
            <PaintCard src='/media/images/image29.jpg' />
            <PaintCard src='/media/images/image28.jpg' />


            <PaintCard src='/media/images/image31.jpg' />
            <PaintCard src='/media/images/image32.jpg' />
            <PaintCard src='/media/images/image33.jpg' />

            <PaintCard src='/media/images/image34.jpg' />
            <PaintCard src='/media/images/image35.jpg' />
            <PaintCard src='/media/images/image36.jpg' />


          </div>

        </div>

        {/* Painting on sale */}
        <div className="mt-10">
          <HeadLine title="Trending This Month" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2">
            <PaintCard src='/media/images/image37.jpg' />
            <PaintCard src='/media/images/image38.jpg' />
            <PaintCard src='/media/images/image10.jpg' />
            <PaintCard src='/media/images/image41.jpg' />
            <PaintCard src='/media/images/image42.jpg' />
            <PaintCard src='/media/images/image24.jpg' />



            <PaintCard src='/media/images/image40.jpg' />
            <PaintCard src='/media/images/image43.jpg' />
            <PaintCard src='/media/images/image23.jpg' />

            <PaintCard src='/media/images/image15.jpg' />
            <PaintCard src='/media/images/image19.jpg' />
            <PaintCard src='/media/images/image8.jpg' />


          </div>
        </div>
      </div>

    </>
  );
}
