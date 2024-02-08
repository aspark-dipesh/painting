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
          <div className="grid grid-cols-4 gap-4 mt-2">

            <PaintCard src='/media/images/image1.jpg' />
            <PaintCard src='/media/images/image3.jpg' />
            <PaintCard src='/media/images/image20.jpeg' />


            <PaintCard src='/media/images/image2.jpg' />
            <PaintCard src='/media/images/image19.jpeg' />
            <PaintCard src='/media/images/image4.jpg' />

            <PaintCard src='/media/images/image8.jpeg' />
            <PaintCard src='/media/images/image9.jpeg' />
            <PaintCard src='/media/images/image10.jpeg' />


            <PaintCard src='/media/images/image12.jpeg' />
            <PaintCard src='/media/images/image13.jpeg' />
            <PaintCard src='/media/images/image15.jpeg' />


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
          <div className="grid grid-cols-4 mt-2 gap-4">
            <CategoryCard title="Hand Paintings" image="/media/images/image28.jpeg" />
            <CategoryCard title="Acrylic Painting" image="/media/images/image18.jpeg" />
            <CategoryCard title="Wall Panting" image="/media/images/image9.jpeg" />
            <CategoryCard title="Oil Paintings" image="/media/images/image40.jpeg" />
            <CategoryCard title="Spiritual" image="/media/images/image36.jpeg" />
            <CategoryCard title="Hand Painting Signage" image="/media/images/image43.jpeg" />
            <CategoryCard title="Portrait" image="/media/images/image38.jpeg" />

          </div>
        </div>
        <div>
          <HeadLine title="Wall Paintings" />
          <div className="grid grid-cols-4 gap-4 mt-2">

            <PaintCard src='/media/images/image5.jpg' />
            <PaintCard src='/media/images/image6.jpg' />
            <PaintCard src='/media/images/image7.jpg' />

            <PaintCard src='/media/images/image16.jpeg' />
            <PaintCard src='/media/images/image4.jpg' />
            <PaintCard src='/media/images/image11.jpeg' />

            <PaintCard src='/media/images/image17.jpeg' />
            <PaintCard src='/media/images/image18.jpeg' />
            <PaintCard src='/media/images/image19.jpeg' />

            <PaintCard src='/media/images/image21.jpeg' />
            <PaintCard src='/media/images/image22.jpeg' />
            <PaintCard src='/media/images/image32.jpeg' />


          </div>

        </div>

        <div>
          <HeadLine title="Portrait" />
          <div className="grid grid-cols-4 gap-4 mt-2">

            <PaintCard src='/media/images/image25.jpeg' />
            <PaintCard src='/media/images/image26.jpeg' />
            <PaintCard src='/media/images/image27.jpeg' />


            <PaintCard src='/media/images/image30.jpeg' />
            <PaintCard src='/media/images/image29.jpeg' />
            <PaintCard src='/media/images/image28.jpeg' />


            <PaintCard src='/media/images/image31.jpeg' />
            <PaintCard src='/media/images/image32.jpeg' />
            <PaintCard src='/media/images/image33.jpeg' />

            <PaintCard src='/media/images/image34.jpeg' />
            <PaintCard src='/media/images/image35.jpeg' />
            <PaintCard src='/media/images/image36.jpeg' />


          </div>

        </div>

        {/* Painting on sale */}
        <div className="mt-10">
          <HeadLine title="Trending This Month" />
          <div className="grid grid-cols-4 gap-4 mt-2">
            <PaintCard src='/media/images/image37.jpeg' />
            <PaintCard src='/media/images/image38.jpeg' />
            <PaintCard src='/media/images/image10.jpeg' />
            <PaintCard src='/media/images/image41.jpeg' />
            <PaintCard src='/media/images/image42.jpeg' />
            <PaintCard src='/media/images/image24.jpeg' />



            <PaintCard src='/media/images/image40.jpeg' />
            <PaintCard src='/media/images/image43.jpeg' />
            <PaintCard src='/media/images/image23.jpeg' />

            <PaintCard src='/media/images/image15.jpeg' />
            <PaintCard src='/media/images/image19.jpeg' />
            <PaintCard src='/media/images/image8.jpeg' />


          </div>
        </div>
      </div>

    </>
  );
}
