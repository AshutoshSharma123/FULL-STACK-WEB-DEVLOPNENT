import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { asynccreateProduct } from '../../store/actions/productAction.jsx'

const CreateProduct = () => {
    const { register, handleSubmit } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const createProductHandler = (product) => {
        product.id = nanoid();
        dispatch(asynccreateProduct(product));

    }


    return (
        <form
            onSubmit={handleSubmit(createProductHandler)}
            className='flex flex-col w-1/2 justify-center items-center  rounded-md p-4' action="">
            <input
                {...register('title', { required: true })}
                type="text" placeholder='Title'
                className='outline-none border-b p-2 text-xl' />

            <input
                {...register('price', { required: true })}
                type="text" placeholder='Price'

                className='outline-none border-b p-2 text-xl' />


            <input
                {...register('image', { required: true })}
                type="url" placeholder='paste image url address'
                className='outline-none border-b p-2 text-xl' />


            <input
                {...register('category', { required: true })}
                type="text" placeholder='Category'
                className='outline-none border-b p-2 text-xl' />





            <textarea
                {...register('description', { required: true })}
                placeholder='Description'
                className='outline-none border-b p-2 text-xl'
            />
            <button type="submit"
                className='bg-blue-600 w-4/7 p-1 mt-4 text-xl font-semibold hover:bg-blue-700 transition-all duration-300'
            >Create Product</button>





        </form>
    );
}

export default CreateProduct