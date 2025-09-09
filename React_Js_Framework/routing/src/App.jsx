import React from 'react'
import MainRoutes from './routes/MainRoutes.jsx'
import Navbar from './components/Navbar.jsx'
const App = () => {
  return (
    <div className='w-full h-screen text-white bg-gray-700 p-5 font-thin'>
      <Navbar />
      <MainRoutes />

    </div>
  )
}

export default App