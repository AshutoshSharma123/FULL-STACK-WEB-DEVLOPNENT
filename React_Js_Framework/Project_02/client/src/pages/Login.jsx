import { nanoid } from '@reduxjs/toolkit';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { asyncloginUser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';

const Login = () => {


    const { register, reset, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const loginHandler = (data) => {
        const user = { id: nanoid(), ...data };


        dispatch(asyncloginUser(user))
    }


    return (
        <form
            onSubmit={handleSubmit(loginHandler)}
            className='flex flex-col w-1/2 justify-center items-center  rounded-md p-4' action="">
            {/* <input
                {...register('username', { required: true })}
                type="text" placeholder='Username'
                className='outline-none border-b p-2 text-xl' /> */}

            <input
                {...register('password', { required: true })}
                type="password" placeholder='Password'
                className='outline-none border-b p-2 text-xl'
            />

            <input
                {...register('email')}
                type="email" placeholder='Email'
                className='outline-none border-b p-2 text-xl'
            />
            <button type="submit"
                className='bg-blue-600 w-3/7 p-2 mt-4 text-xl font-semibold hover:bg-blue-700 transition-all duration-300'
            >Login</button>



            <p>Don't have an account?
                <Link to="/register" className='text-blue-600' >Sign Up</Link>
            </p>

        </form>
    )
}

export default Login