import React, { useState } from 'react'
import Create from './component/Create'
import Read from './component/Read'

const App = () => {

  return (
    <div className='flex flex-col justify-center items-center w-full border-1 border-gray-300 mt-[10%] p-[1rem]'>

      <h1 className='text-3xl font-bold text-blue-500'>To-Do List</h1>
      <Create />

      <br />
      <Read />
    </div>
  )
}

export default App