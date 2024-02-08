import React from 'react'

const HeadLine = ({ title }: {
    title: string
}) => {
    return (
        <div className='flex justify-between border-b-[3px] border-[#00000040] py-1'>
            <h3 className="font-bold text-4xl  mt-10">{title}</h3>

            {/* view all */}
            <div className="flex items-center gap-2 mt-10 ">
                <span className="font-bold text-xl">View collection</span>
                <span className='text-2xl'>{">"}</span>
            </div>



        </div>

    )
}

export default HeadLine