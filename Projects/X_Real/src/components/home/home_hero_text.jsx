import React from 'react'
import Video from './video'

const home_hero_text = () => {
    return (
        <div className='text-white flex justify-center items-center flex-col '>
            <div className='text-[2.3rem] sm:text-[14vw] font-[font2] tracking-loose leading-[0.9]'>CRAFTING YOUR</div>
            <div className="text-[2.3rem] sm:text-[14vw] font-[font2] tracking-tighter leading-[0.8] flex items-center gap-2 mt-[-1rem]">VISION

                <div className="h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden "><Video /></div>


                <i className='text-[ 3rem] sm:text-[13vw] text-gray-900 tracking-tighter leading-[0.9] '>into</i>  </div>
            <div className='text-[2.3rem] sm:text-[16vw] font-[font1] tracking-tighter leading-[0.9]'>REALITY</div>
        </div>
    )
}

export default home_hero_text
