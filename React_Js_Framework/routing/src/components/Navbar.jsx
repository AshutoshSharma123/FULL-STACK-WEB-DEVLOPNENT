import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className=' flex justify-center items-center gap-5 p-4 text-2xl mb-10 '>


            <NavLink className={(e) => e.isActive ? "text-[#D3FD50]" : ""} to="/">Home</NavLink>
            <NavLink className={(e) => e.isActive ? "text-[#D3FD50]" : ""} to="/about">About</NavLink>
            <NavLink className={(e) => e.isActive ? "text-[#D3FD50]" : ""} to="/recepies">Recipes</NavLink>
            <NavLink className={(e) => e.isActive ? "text-[#D3FD50]" : ""} to="/create">Create Recipe</NavLink>
        </div >
    )
}

export default Navbar