"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside, useSessionStorage, useTimeout } from "usehooks-ts";
const images = [
  "/media/pop/pop1.png",
  "/media/pop/pop2.png",
  "/media/pop/pop3.png",
];
export function PopUpBanner() {
  const [value, setValue, removeValue] = useSessionStorage("pop-viewed", false);

  const [showPopup, setShowPopup] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!value) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  const handleDismiss = () => {
    setShowPopup(false);
    setValue(true);
  };

  useOnClickOutside(ref, handleDismiss);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free",
    defaultAnimation: {
      duration: 1000,
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
  });

  // const hide = () => {
  //   setShowPopup(false);
  // };
  // useTimeout(hide, 5000);
  if (!showPopup) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50">
        <div
          className="w-full max-w-lg bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          ref={ref}
        >
          <button
            onClick={handleDismiss}
            className="absolute right-4 top-4 bg-white rounded-full p-2 z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div ref={sliderRef} className="keen-slider relative">
            {images.map((image, index) => (
              <div key={index} className="keen-slider__slide aspect-[3/4]">
                <Image src={image} alt="" fill className="object-contain" />
              </div>
            ))}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-between">
              {/* next */}
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
    </>
  );
}
