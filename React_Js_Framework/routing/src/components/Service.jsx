import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Service = () => {
    const navigate = useNavigate()
    return (
        <div className="p-10">
            <div>
                <h1>Service</h1>
                <button onClick={() => { navigate('detail') }} className='bg-white text-black hover:text-white hover:bg-black    p-1 rounded' > More Details</button>
            </div>
            <hr />
            <Outlet />
        </div>
    )
}

export default Service