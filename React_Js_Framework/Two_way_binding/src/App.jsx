import React, { useState } from 'react'

const App = () => {

  const [todo, setTodo] = useState([{ id: 1, title: "Learn React", completed: false }])

  const [title, settitle] = useState('')
  const [desc, setdesc] = useState('')
  const [urgency, setUrgency] = useState('')
  const [gender, setgender] = useState('male')
  return (
    <div>

      <form action="">
        <input type="text"
          placeholder='title'
          onChange={(e) => {
            settitle(e.target.value)
            console.log(e.target.value)
          }}
          value={title} />
        <input type="text" placeholder='Description'
          onChange={(e) => {
            setdesc(e.target.value)
            console.log(e.target.value);
          }}
          value={desc}
        />
        <input type="Checkbox"
          value='check'
          onChange={(e) => {
            console.log(e.target.checked);

          }}
        />
        <select onChange={(e) => {
          console.log(e.target.value)
          setUrgency(e.target.value)
        }}
          value={urgency}>
          <option value="important">Important</option>
          <option value="veryimportant">Very Important</option>
          <option value="notimportant">Not Important</option>
        </select>


        <input type="radio" value='male'
          onChange={(e) => {
            setgender(e.target.value)
            console.log(e.target.value)
          }}
          checked={gender == 'male' && true}
        />
        <input type="radio" value='female' onChange={(e) => {
          setgender(e.target.value)
          console.log(e.target.value)
        }}
          checked={gender == 'female' && true} />


        <button >Create</button>

      </form>


    </div>
  )
}

export default App