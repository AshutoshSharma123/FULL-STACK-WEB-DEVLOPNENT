import React from 'react'
import { Link } from 'react-router-dom'

const home_bottom_text = () => {
    return (


        <div className="mt-[1]">
            <div className="font-[font3] w:[60%] text-center sm:w-[30%] mx-auto sm:mx-[65%] sm:text-right text-[1rem] backdrop-blur-sm rounded-md" >Our realty agency is committed to excellence, offering trusted guidance, innovative solutions, and personalized service to help clients find, design, and secure properties that perfectly match their lifestyle and vision.</div>
            <div className='font-[font3] flex items-center justify-center gap-6 text-[3vw] sm:mt-[-10vh]'>
                <Link className='border-2 border-white leading-[3vw] rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50]    p-2' to={'/Projects'} >Projects</Link>
                <Link className='border-2 border-white leading-[3vw] rounded-full hover:text-[#D3FD50] hover:border-[#D3FD50]   p-2' to='/Agents' >Agents</Link>
            </div>
        </div>


    )
}

export default home_bottom_text
