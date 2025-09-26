
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { asynclogoutUser } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.userReducer.user)
    console.log(user);

    const logoutHandler = () => {
        dispatch(asynclogoutUser())
        navigate('/login')
    }




    return (
        <div className='flex gap-4 mb-4 text-lg justify-center'>
            <NavLink to={'/'}>Home</NavLink>
            {/* <NavLink to={'/products'}>Products</NavLink> */}



            {user ?
                <>
                    <NavLink to={'/admin/create-product'}>Create Product</NavLink>
                    <NavLink to={'/admin/user-profile'}>Profile</NavLink>
                    <button onClick={logoutHandler}>Logout</button>
                </>
                :
                <>
                    <NavLink to={'/login'}>Login</NavLink>
                </>}


        </div>
    )
}

export default Navbar