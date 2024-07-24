import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center px-4 py-8 sm:px-6 lg:me-0 lg:py-12 lg:pe-0 lg:ps-8 xl:py-16">
      <div className="">
        <div className="mx-auto max-w-xl text-center ">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>

          <p className="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

          <div className="mt-4 md:mt-8">
            <Link
              href="/collection"
              className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              View Collection
            </Link>
          </div>
        </div>
      </div>
      <div className=" min-h-[400px] sm:self-end sm:rounded-ss-[30px]  md:rounded-ss-[60px] relative overflow-hidden">
        <Image
          alt=""
          src="/media/images/image5.jpg"
          className="object-cover "
          fill
        />
      </div>
    </section>
  );
}
