import Image from "next/image";

export default function PaintingDetails() {
    return (
        <div className="container mx-auto grid grid-cols-5 mt-5 gap-10">
            <div className="relative flex justify-between col-span-3">
                <Image
                    alt="Mountains"
                    width={1000}
                    height={5000}
                    src='/media/images/image2.jpg'
                    sizes="50vw"
                    className="rounded-lg w-full"
                />
            </div>
            <div className="col-span-2 flex flex-col justify-center">
                <div className="flex">
                    <h1 className="font-bold text-3xl">Saint-Jimi</h1>
                </div>
                {/* Materials */}
                <div className="flex gap-10 justify-between border-b-2">
                    <h2 className="text-lg">Materials:</h2>
                    <span>
                        Acrylic on canvas
                    </span>
                </div>
                {/* size */}
                <div className="flex gap-10 justify-between border-b-2">
                    <h2 className="text-lg">Size:</h2>
                    <span>
                        100 x 100 cm
                    </span>
                </div>
                {/* year */}
                <div className="flex gap-10 justify-between border-b-2">
                    <h2 className="text-lg">Year:</h2>
                    <span>
                        2021
                    </span>
                </div>
                {/* price */}
                <div className="flex gap-10 justify-between border-b-2">
                    <h2 className="text-lg">Price:</h2>
                    <span>
                        1000$
                    </span>
                </div>

                {/* description */}
                <div className="flex gap-10 justify-between border-b-2">
                    <h2 className="text-lg">Description:</h2>
                    <span>
                        Lorem ipsum dolor sit amet
                    </span>
                </div>

                {/* Certificate */}
                <div className="flex gap-10 justify-between border-b-2">
                    <h2 className="text-lg">Certificate:</h2>
                    <span>
                        Yes
                    </span>
                </div>
                {/* Signature */}
                <div className="flex gap-10 justify-between border-b-2">
                    <h2 className="text-lg">Signature:</h2>
                    <span>
                        Yes
                    </span>
                </div>

                {/* Condition */}
                <div className="flex gap-10 justify-between border-b-2">
                    <h2 className="text-lg">Condition:</h2>
                    <span>
                        New
                    </span>
                </div>

                {/* about the work */}
                <div className="">
                    <h2 className="text-lg text-center font-bold">About the work:</h2>
                    <p className="text-center">
                        The picture of Jimi Hendrix was first digitally altered and then painted on canvas.
                    </p>
                </div>
                <div className="flex justify-end gap-10">
                    <div className="flex justify-center mt-5">
                        <button className="bg-slate-400 text-white flex gap-2 rounded p-2">
                            {/* cart Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                            Add to Cart
                        </button>
                    </div>
                    {/* buy now */}
                    <div className="flex justify-center mt-5">
                        <button className="bg-slate-400 text-white flex gap-2 rounded p-2">
                            {/* cart Icon */}
                            Buy Now
                        </button>
                    </div>
                </div>
                {/* Add to cart */}

            </div>
        </div>
    )
}