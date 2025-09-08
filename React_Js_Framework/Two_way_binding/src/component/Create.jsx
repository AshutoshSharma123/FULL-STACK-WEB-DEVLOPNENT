import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { todocontext } from '../Wraper'
const Create = () => {
    const [todo, setTodo] = useContext(todocontext)

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const submitHandler = (data) => {
        console.log(data);
        data.isCompleted = false
        data.id = nanoid()

        const copytodo = [...todo]
        copytodo.push(data)
        setTodo(copytodo)

        toast.success('todo created successfully !')        
        reset()
    }


    console.log(errors);


    return (
        <div className='flex w-full justify-center items-center'>
            <form className='flex sm:w-[50%] flex-col border-2 border-black p-2 rounded-md border-gray-460'
                action="" onSubmit={handleSubmit(submitHandler)}>
                <input type="text"
                    {...register('title', { required: 'title is required !' })}

                    placeholder='title'
                    className='text-black border-2 border-black  rounded-md p-2'
                />
                {errors.title && <p className='text-red-500'>{errors.title.message}</p>}
                <br />

                <button className='bg-black text-white p-2 rounded-md hover:bg-gray-300 hover:transition hover:duration-300 hover:text-black' >Create</button>
            </form>
        </div>
    )
}

export default Create