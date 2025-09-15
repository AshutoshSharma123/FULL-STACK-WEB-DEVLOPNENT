import { nanoid } from '@reduxjs/toolkit';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Register = () => {

    const { register, reset, handleSubmit } = useForm();

    const registerHandler = (data) => {
        const user = { id: nanoid(), ...data };
        console.log(user);
        reset();
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