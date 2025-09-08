import React from 'react'
import { useNavigate } from 'react-router-dom'

const Products = () => {

    const navigate = useNavigate()
    const navHandler = (name) => {
        navigate(`/product/deatil/${name}`)
    }

    return (

        <div className="p-10">
            <h1 className='text-5xl font-thin text-red-500'>Products</h1>

            <div >
                <h1 className='text-2xl font-thin '>Product 1</h1>
                <button className='bg-white text-black hover:text-white hover:bg-black    p-1 rounded' onClick={() => { navHandler('Product_1') }} >See Details</button>
            </div>
            <div >
                <h1 className='text-2xl font-thin '>Product 2</h1>
                <button className='bg-white text-black hover:text-white hover:bg-black    p-1 rounded' onClick={() => { navHandler('Product_2') }} >See Details</button>
            </div>

            <div >
                <h1 className='text-2xl font-thin '>Product 3</h1>
                <button className='bg-white text-black hover:text-white hover:bg-black    p-1 rounded' onClick={() => { navHandler('Product_3') }} >See Details</button>
            </div>

        </div>

    )
}

export default Products