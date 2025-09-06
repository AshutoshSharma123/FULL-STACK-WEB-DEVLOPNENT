import React from 'react'

const Read = (props) => {
    const todo = props.todo
    const setTodo = props.setTodo
    const deleteHandler = (id) => {
        const filteredtodo = todo.filter((item) => item.id !== id) //filtering the todo
        setTodo(filteredtodo)


    }
    const rendertodo = todo.map((item) => {
        return (
            <div className='flex justify-center items-center w-full p-2 gap-[2rem] border border-gray-100  ' key={item.id}>
                <h1 className='text-2xl text-gray-500'>{item.title} <span onClick={() => { deleteHandler(item.id) }} > <button className='bg-red-500 hover:bg-red-600 text-white  py-2 px-4 h-[10%] rounded'>Delete</button></span></h1>
            </div>

        )
    })

    return (
        <div className="flex justify-center items-center w-full">
            <div className='border-2 sm:w-[50%]  border-black p-2 rounded-md text-black flex flex-col justify-center items-center transition-all duration-1000'>
                <div className="text-[1rem] w-full border-1 border-gray-300 rounded-md p-2 text-blue-500 font-bold text-center">WORK</div>
                <p >{rendertodo}</p>
            </div>
        </div>
    )
}

export default Read