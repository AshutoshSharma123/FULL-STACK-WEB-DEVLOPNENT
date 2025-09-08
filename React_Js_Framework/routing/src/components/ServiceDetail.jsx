import React from 'react'
import { useNavigate } from 'react-router-dom'
const ServiceDetail = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Service Detail</h1>
            <h2>Choose Us</h2>
            <button className='bg-white text-black hover:text-white hover:bg-black    p-1 rounded' onClick={() => { navigate(-1) }} >Go Back</button>
        </div>
    )
}

export default ServiceDetail