import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
    return (
        <div className='flex gap-4'>
            <NavLink style={({ isActive }) => isActive ? { color: "red" } : { color: "white" }} to="/" >Home</NavLink>
            <NavLink style={({ isActive }) => isActive ? { color: "red" } : { color: "white" }} to="/product">Product</NavLink>
            <NavLink style={({ isActive }) => isActive ? { color: "red" } : { color: "white" }} to="/service">Service</NavLink>
            <NavLink style={({ isActive }) => isActive ? { color: "red" } : { color: "white" }} to="/about">About</NavLink>
        </div>
    )
}

export default Nav