import Image from "next/image";
import { ParsedUrlQuery } from "querystring";

export default function PaintingDetails({ params, searchParams }: {
    params: {
        slug: string
    }, searchParams: ParsedUrlQuery
}) {
    return (
        <div className="font-[sans-serif]">
            <div className="p-6 lg:max-w-[80vw] max-w-2xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="w-full lg:sticky top-20 sm:flex gap-2 lg:col-span-3">
                        <div className="sm:space-y-3 w-16 max-sm:flex max-sm:mb-4 max-sm:gap-4">
                            <img src={searchParams.src?.toString()} alt="Product1" className="w-full cursor-pointer outline" />
                            <img src={searchParams.src?.toString()} alt="Product2" className="w-full cursor-pointer" />
                            <img src={searchParams.src?.toString()} alt="Product3" className="w-full cursor-pointer" />
                            <img src={searchParams.src?.toString()} alt="Product4" className="w-full cursor-pointer" />
                        </div>
                        <img src={searchParams.src?.toString()} alt="Product" className="w-[calc(100%-70px)] rounded object-cover max-h-[80vh]" />
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-gray-800">Meanwhile the sun is always shining Painting</h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-gray-800 text-xl font-bold">$12</p>
                            <p className="text-gray-400 text-xl"> <span className="text-sm ml-1">Tax included</span></p>
                        </div>
                        <div className="flex space-x-2 mt-4">
                            <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-gray-800" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                        </div>
                        <div className="mt-8">
                            {/* <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <button type="button" className="w-12 h-12 border-2 hover:border-gray-800 font-bold text-sm rounded-full flex items-center justify-center shrink-0">SM</button>
                                <button type="button" className="w-12 h-12 border-2 hover:border-gray-800 border-gray-800 font-bold text-sm rounded-full flex items-center justify-center shrink-0">MD</button>
                                <button type="button" className="w-12 h-12 border-2 hover:border-gray-800 font-bold text-sm rounded-full flex items-center justify-center shrink-0">LG</button>
                                <button type="button" className="w-12 h-12 border-2 hover:border-gray-800 font-bold text-sm rounded-full flex items-center justify-center shrink-0">XL</button>
                            </div> */}
                        </div>
                        <div className="mt-8">
                            <h3 className="text-lg font-bold text-gray-800">About the item</h3>
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                                <li>Painting, Mixed Media on Canvas</li>
                                <li>Size: 101.6 W x 76.2 H x 1.3 D cm.</li>
                                <li>Ships in a Box</li>
                                <li>Custom</li>
                            </ul>
                        </div>
                        <div className="mt-8 max-w-md">

                            <button type="button" className="w-full mt-4 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded">Add to cart</button>

                            {/* <button type="button" className="w-full mt-8 px-4 py-2 bg-transparent border-2 border-gray-800 text-gray-800 font-bold rounded">Read all reviews</button> */}
                        </div>
                        <div className="mt-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                            <h3 className="text-lg font-bold text-[#333]">Painting information</h3>
                            <ul className="mt-6 space-y-6 text-[#333]">
                                <li className="text-sm uppercase">Size <span className="ml-4 float-right">24 inches x 36 inches</span></li>
                                <li className="text-sm uppercase">Medium <span className="ml-4 float-right">Oil on canvas</span></li>
                                <li className="text-sm uppercase">Style <span className="ml-4 float-right"> Abstract Expressionism</span></li>
                                <li className="text-sm uppercase w-full ">
                                    <div className="flex w-full justify-between">
                                        <span className="w-60">
                                            Color Palette
                                        </span>
                                        <span className="text-end">Vibrant primary colors with contrasting shades</span>

                                    </div>
                                </li>
                                <li className="text-sm uppercase">Subject Matter <span className="ml-4 float-right">Mother Love</span></li>
                                <li className="text-sm uppercase">
                                    <div className="flex w-full justify-between">
                                        <span className="w-1/2">
                                            Brushwork/Texture
                                        </span>
                                        <span className="text-end w-1/2">Thick and impasto brushstrokes creating a textured surface</span>

                                    </div>

                                </li>
                                <li className="text-sm uppercase">
                                    <div className="flex w-full justify-between">
                                        <span className="w-1/2">
                                            Signature
                                        </span>
                                        <span className="text-end w-1/2">Signed on the front and back</span>

                                    </div>
                                </li>
                                <li className="text-sm uppercase">
                                    <div className="flex w-full justify-between">
                                        <span className="w-1/2">
                                            Frame
                                        </span>
                                        <span className="text-end w-1/2">framed</span>

                                    </div>
                                </li>
                                <li className="text-sm uppercase">
                                    <div className="flex w-full justify-between">
                                        <span className="w-1/2">
                                            Surface
                                        </span>
                                        <span className="text-end w-1/2">Canvas</span>

                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}