// import React from 'react'

// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { asyncupdateProduct } from '../../store/actions/productAction';
// import { asyncdeleteProduct } from '../../store/actions/productAction'
// const UserProfile = () => {
//     const { id } = useParams();
//     const dispatch = useDispatch();
//     const navigate = useNavigate()

//     const user = useSelector((state) => state);
//     console.log(user);


//     const { register, handleSubmit, reset } = useForm({
//         defaultValues: {
//             username: user.username,
//             email: user.email,
//             password: user.password

//         }
//     });
// }

// const updateUserHandler = (formData) => {
//     dispatch(asyncupdateProduct(id, formData));
// };

// const deleteHandler = () => {

//     navigate("/products")
// }
// return  (
//     <div>
//         <form onSubmit={handleSubmit(updateUserHandler)} className="flex flex-col gap-3">
//             <input {...register('title', { required: true })} placeholder="Title" className="border-b p-2" />
//             <input {...register('price', { required: true })} placeholder="Price" className="border-b p-2" />
//             <input {...register('image', { required: true })} placeholder="Image URL" className="border-b p-2" />
//             <input {...register('category', { required: true })} placeholder="Category" className="border-b p-2" />
//             <textarea {...register('description', { required: true })} placeholder="Description" className="border-b p-2" />
//             <button type="submit" className="from-blue-600 to-blue-900 bg-gradient-to-r text-white p-2 mt-2 rounded">Update Product</button>




//         </form>
//     </div>

// ) 
// }

// export default UserProfile


import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { asyncupdateUser } from "../../store/actions/userActions"; // ✅ your user action

const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ✅ get logged-in user
    const user = useSelector((state) => state.userReducer.user);
    console.log("Current user:", user);

    const { register, handleSubmit, reset } = useForm();

    // ✅ populate form when user is available
    useEffect(() => {
        if (user) {
            reset({
                username: user.username,
                email: user.email,
                password: user.password,
            });
        }
    }, [user, reset]);

    const updateUserHandler = (formData) => {
        const updatedUser = { ...user, ...formData };
        dispatch(asyncupdateUser(updatedUser)); // ✅ call user update action
        navigate("/products"); // redirect after update (optional)
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <form
                onSubmit={handleSubmit(updateUserHandler)}
                className="flex flex-col gap-3"
            >
                <input
                    {...register("username", { required: true })}
                    placeholder="Username"
                    className="border-b p-2"
                />
                <input
                    {...register("email", { required: true })}
                    placeholder="E-mail"
                    className="border-b p-2"
                />
                <input
                    {...register("password", { required: true })}
                    placeholder="Password"
                    className="border-b p-2"
                />

                <button
                    type="submit"
                    className="from-blue-600 to-blue-900 bg-gradient-to-r text-white p-2 mt-2 rounded"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default UserProfile;
