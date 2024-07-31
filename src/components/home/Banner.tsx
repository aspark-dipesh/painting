"use client";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";

export default function Banner() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "snap",
      drag: true,
      defaultAnimation: { duration: 1000 },
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
          }, 3000);
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
    <div ref={sliderRef} className="keen-slider relative ">
      <section className="keen-slider__slide  relative bg-[url('/media/banner2.jpg')] bg-cover bg-center bg-no-repeat max-h-[70vh]">
        <div className="absolute inset-0  from-gray-900/95 to-gray-900/25 bg-gradient-to-r "></div>

        <div className="relative max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
              Transform Your Space with
              <strong className="block font-extrabold text-rose-500">
                Exquisite Art
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Discover a Curated Collection of Paintings by Renowned Artist
              Krishna. From Realistic Landscapes to Abstract Masterpieces, Find
              Art That Speaks to You
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                href="/collection"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="keen-slider__slide  relative bg-[url('/media/banner1.jpg')] bg-cover bg-center bg-no-repeat max-h-[70vh]">
        <div className="absolute inset-0  from-gray-900/95 to-gray-900/25 bg-gradient-to-r "></div>

        <div className="relative max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Unleash Your Imagination with
              <strong className="block font-extrabold text-rose-500">
                Art by Krishna
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Experience the Fusion of Creativity and Passion in Every
              Brushstroke. Unique Paintings for Every Style and Space
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
    </div>
  );
}
