"use client";
import { IBanner } from "@/interface";
import { useKeenSlider } from "keen-slider/react";
import Link from "next/link";

export default function Banner({ banners }: { banners: IBanner[] }) {
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
      {banners.map((banner) => (
        <section
          key={banner.id}
          className="keen-slider__slide  relative  bg-cover bg-center bg-no-repeat max-h-[70vh]"
          style={{
            backgroundImage: `url(${banner.image})`,
          }}
        >
          <div className="absolute inset-0  from-gray-900/95 to-gray-900/25 bg-gradient-to-r "></div>

          <div className="relative max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
                {banner.title}
              </h1>

              <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                {banner.sub_title}
              </p>
              {banner.launch_url && (
                <div className="mt-8 flex flex-wrap gap-4 text-center">
                  <Link
                    href={banner.launch_url}
                    className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                  >
                    {banner.button_title}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
