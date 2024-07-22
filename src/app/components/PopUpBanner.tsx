"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
export function PopUpBanner() {
  const [sliderRef, instanceRef] = useKeenSlider();
  return (
    <>
      <div className="fixed inset-0 bg-rose-600 z-50">
        <div className="w-full max-w-lg bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide aspect-square">1</div>
            <div className="keen-slider__slide aspect-square">2</div>
            <div className="keen-slider__slide aspect-square">3</div>
          </div>
        </div>
      </div>
    </>
  );
}
