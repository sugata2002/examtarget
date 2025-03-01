import React from 'react'
import add from "../../assets/Advertisement/Advertisement.png"
function Advertisement() {
    return (
        <div className="flex items-center justify-between bg-gray-200  p-8   rounded-2xl w-full">
            <div className='flex items-center justify-between w-full'>
                <span className="text-lg font-semibold md:block sm:hidden">Advertisement Section</span>
                <img className=' md:w-[40%] sm:w-full' src={add} />


            </div>

        </div>
    )
}

export default Advertisement
