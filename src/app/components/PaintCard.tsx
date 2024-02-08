import Image from 'next/image'
import React from 'react'
interface IProps {
    src: string
    name?: string
    price?: number
}
const PaintCard = ({ src }: IProps) => {
    return (
        <div className='relative w-full card shadow-sm bg-slate-200 p-2 '>
            <div className='w-full aspect-[4/3] relative'>
                <Image
                    fill
                    src={src}
                    className='rounded-lg w-full'
                    alt='image1'
                    objectFit='cover'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className='p-2'>
                <div className='text-2xl font-bold'>Painting Name</div>
                <div className='flex justify-between items-center'>
                    <div className='text-lg font-bold'>Rs. 1000</div>
                    {/* add to cart button with icon */}
                    <button className='bg-slate-400 text-white flex gap-2 rounded p-2'>
                        {/* cart Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
                        Add to Cart
                    </button>

                </div>

            </div>
        </div>
    )
}

export default PaintCard