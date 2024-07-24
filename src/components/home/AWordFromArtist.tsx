import Image from "next/image";

export default function WordFromArtist() {
  return (
    <>
      <section className="bg-gray-50 px-4 py-8 sm:px-6 lg:me-0 lg:py-12 lg:pe-0 lg:ps-8 xl:py-16">
        <div className="mx-auto container ">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full">
              <Image
                fill
                alt=""
                src="/media/krishna.jpg"
                className="absolute inset-0 h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-xl font-bold sm:text-2xl">
                Word From The Artist
              </h2>
              <p>Mr. Krishna</p>

              <p className="mt-4 text-gray-600">
                Krishna is a multifaceted artist renowned for his extraordinary
                ability to create stunning paintings using a wide range of
                mediums and techniques. His work spans from realistic landscapes
                to abstract compositions, demonstrating his versatility and
                profound understanding of art. Each piece by Krishna reflects
                his unique vision and meticulous attention to detail, capturing
                the essence of his subjects with vivid colors and dynamic
                brushstrokes. His dedication to his craft and his innovative
                approach make Krishna a true master who can effortlessly bring
                any artistic vision to life.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
