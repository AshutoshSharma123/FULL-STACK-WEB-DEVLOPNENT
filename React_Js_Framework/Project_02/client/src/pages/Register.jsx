import { nanoid } from '@reduxjs/toolkit';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { asyncregisterUser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const { register, reset, handleSubmit } = useForm();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    /*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Handles the registration form submission.
     * Creates a new user with the provided data, sets isAdmin to false, dispatches the asyncregisterUser action, and navigates to the login page.
     * @param {Object} data - The form data, containing the username.
     */
    /*******  104ffa89-6ce9-4547-bd45-8a98a1bcb2d1  *******/

    const registerHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false
        console.log(user);
        dispatch(asyncregisterUser(user))
        navigate('/login')

    }


    return (
        <form
            onSubmit={handleSubmit(registerHandler)}
            className='flex flex-col w-1/2 justify-center items-center  rounded-md p-4' action="">
            <input
                {...register('username', { required: true })}
                type="text" placeholder='Username'
                className='outline-none border-b p-2 text-xl' />

            <input
                {...register('email', { required: true })}
                type="text" placeholder='Email'
                className='outline-none border-b p-2 text-xl' />
            <input
                {...register('password', { required: true })}
                type="password" placeholder='Password'
                className='outline-none border-b p-2 text-xl'
            />
            <button type="submit"
                className='bg-blue-600 w-3/7 p-2 mt-4 text-xl font-semibold hover:bg-blue-700 transition-all duration-300'
            >Register</button>



            <p>Already have an account?
                <Link to="/login" className='text-blue-600' >Log In</Link>
            </p>

        </form>
    )
}

export default Register