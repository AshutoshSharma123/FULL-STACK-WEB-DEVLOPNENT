import React from 'react'

const navbar = () => {
    return (
        <div className="z-10 flex fixed top-0 w-full justify-between items-start">
            <div className=' w-14 mx-2 mt-4 '>
                <img className='w-full' src="https://cdn.svglogos.dev/logos/unocss.svg" alt="" />
            </div>

            <div className="bg-black w-1/6 h-10"></div>
        </div>

    )
}

export default navbar
