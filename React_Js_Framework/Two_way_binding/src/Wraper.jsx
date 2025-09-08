import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
export const todocontext = createContext(null)
const Wraper = (props) => {

    const [todo, setTodo] = useState([{ id: 1, title: "Learn React", completed: false }])


    return (
        <todocontext.Provider value={[todo, setTodo]}>
            {props.children}
        </todocontext.Provider>)
}

export default Wraper