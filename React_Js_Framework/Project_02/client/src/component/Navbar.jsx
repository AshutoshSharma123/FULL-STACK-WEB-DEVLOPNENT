
import { NavLink } from 'react-router-dom'


const Navbar = () => {


    return (
        <div className='flex gap-4 mb-4 text-lg justify-center'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/products'}>Products</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
        </div>
    )
}

export default Navbar