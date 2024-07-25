"use client";

import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeadLine from "../HeadLine";
import PaintCard from "../PaintCard";

export function FeaturedItems() {
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
      slides: { perView: 1 },
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
    <div className="px-4 py-8 sm:px-6 lg:me-0 lg:py-12 lg:pe-0 lg:ps-8 xl:py-16">
      <div className="container mx-auto">
        <HeadLine title="Featured Painting" path="/collection" />
        <div ref={sliderRef} className="keen-slider relative">
          <div className="keen-slider__slide p-2">
            <PaintCard src="/media/images/image1.jpg" />
          </div>
          <div className="keen-slider__slide p-2">
            <PaintCard src="/media/images/image3.jpg" />
          </div>
          <div className="keen-slider__slide p-2">
            <PaintCard src="/media/images/image20.jpg" />
          </div>
          <div className="keen-slider__slide p-2">
            <PaintCard src="/media/images/image2.jpg" />
          </div>
          <div className="keen-slider__slide p-2">
            <PaintCard src="/media/images/image19.jpg" />
          </div>
          <div className="keen-slider__slide p-2">
            <PaintCard src="/media/images/image4.jpg" />
          </div>
          <div className="keen-slider__slide p-2">
            <PaintCard src="/media/images/image8.jpg" />
          </div>
          <div className="keen-slider__slide p-2">
            <PaintCard src="/media/images/image9.jpg" />
          </div>

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
