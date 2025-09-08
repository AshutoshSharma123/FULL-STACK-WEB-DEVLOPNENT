import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const params = useParams();
    console.log(params);

    const navigate = useNavigate()
    return (
        <div className='p-10'>
            <h1 className='text-4xl font-thin '>{params.name}</h1>
            <h2 className='text-2xl font-thin mb-4'>Product Detail</h2>
            <button className='bg-white text-black hover:text-white hover:bg-black    p-1 rounded' onClick={() => { navigate(-1) }} >Go Back</button>
        </div>
    )
}

export default ProductDetails