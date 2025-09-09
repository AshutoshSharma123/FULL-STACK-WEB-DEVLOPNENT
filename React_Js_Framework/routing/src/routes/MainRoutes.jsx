import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import About from '../page/about'
import Recepies from '../page/Recepies'
import Create from '../page/Create'
const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/recepies" element={<Recepies />} />
            <Route path="/create" element={<Create />} />
        </Routes>
    )
}

export default MainRoutes