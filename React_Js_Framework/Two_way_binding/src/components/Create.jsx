import React from 'react'
import { useState } from 'react'

const Create = () => {
    const [fullname, setFullname] = useState('')
    const [age, setAge] = useState('')



    const formSubmit = (e) => {
        e.preventDefault();
        const newUser = { fullname, age } // segregating the data
        // this will be called when the form is submitted and this can be send to backend etc
        console.log(newUser);



    }
    return (
        <div>      <form onSubmit={formSubmit}>
            <input type="text"
                onChange={(e) => setFullname(e.target.value)} // sets the value of fullname from input this happens because reacts gets to know the changes happening through this
                value={fullname} // injects the value of fullname again to the input 
                placeholder='Enter your name' />
            <input type="number"
                onChange={(e) => setAge(e.target.value)} // sets the value of age from input this happens because reacts gets to know the changes happening through this
                value={age}// injects the value of age again to the input
                placeholder='Enter your age' />
            <button >Submit</button>
        </form></div>
    )
}

export default Create