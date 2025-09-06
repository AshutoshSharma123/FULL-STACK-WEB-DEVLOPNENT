import React from 'react'
import { useState } from 'react'
import { nanoid } from 'nanoid'
const Create = (props) => {
    const todo = props.todo
    const setTodo = props.setTodo
    const [title, settitle] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        const newtodo =
        {
            id: nanoid(),
            title: title,
            completed: false
        }
        const copytodos = [...todo]
        copytodos.push(newtodo)
        setTodo(copytodos)

        settitle('')

    }

    return (
        <div className='flex w-full justify-center items-center'>
            <form className='flex sm:w-[50%] flex-col border-2 border-black p-2 rounded-md border-gray-460'
                action="" onSubmit={submitHandler}>
                <input type="text"
                    placeholder='title'
                    onChange={(e) => {
                        settitle(e.target.value)
                        console.log(e.target.value)
                    }}
                    value={title}
                    className='text-black border-2 border-black  rounded-md p-2'
                />
                <br />
                <button className='bg-black text-white p-2 rounded-md hover:bg-gray-300 hover:transition hover:duration-300 hover:text-black' >Create</button>
            </form>
        </div>
    )
}

export default Create