"use client";

import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeadLine from "../HeadLine";
import PaintCard from "../PaintCard";
import { IProduct } from "@/interface";

export function FeaturedItems({ products }: { products: IProduct[] }) {
  const animation = { duration: 20000 };
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "free-snap",
      drag: true,
      defaultAnimation: { duration: 2000 },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 10 },
        },
        "(min-width: 1360px)": {
          slides: { perView: 4, spacing: 10 },
        },
      },
      slides: { perView: 2 },
      renderMode: "performance",
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className=" py-8 lg:py-12 xl:py-16">
      <div className="">
        <HeadLine title="Featured Painting" path="/collection" />
        <div ref={sliderRef} className="keen-slider relative">
          {products.slice(0, 6)?.map((product) => (
            <div className="keen-slider__slide p-2" key={product.id}>
              <PaintCard product={product} />
            </div>
          ))}

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-between">
            <button
              className="bg-white"
              onClick={() => instanceRef.current?.prev()}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              className="bg-white"
              onClick={() => instanceRef.current?.next()}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
