
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'



const Navbar = () => {

    const user = useSelector(state => state.userReducer.user)
    console.log(user);

    return (
        <div className='flex gap-4 mb-4 text-lg justify-center'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/products'}>Products</NavLink>



            {user ?
                <>
                    <NavLink to={'/admin/create-product'}>Create Product</NavLink>
                </>
                :
                <>
                    <NavLink to={'/login'}>Login</NavLink>
                </>}


        </div>
    )
}

export default Navbar