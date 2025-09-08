import React from 'react'
import Products from './components/Products'
import Service from './components/Service'
import About from './components/About'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'


const App = () => {
  return (
    <div className='text-3xl h-screen w-screen flex flex-col   bg-black text-white'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/service" element={<Service />} />
      </Routes>


    </div>
  )
}

export default App