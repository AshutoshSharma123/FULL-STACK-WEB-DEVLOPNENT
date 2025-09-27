


import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncgetUser } from '../../store/actions/userActions';
import { asyncupdateUser } from '../../store/actions/userActions';
import { asyncdeleteUser } from '../../store/actions/userActions';

const UserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector((state) => state.userReducer.user);

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    });

    // 🟢 Jab bhi Redux ka user update hoga → form reset hoga
    useEffect(() => {
        dispatch(asyncgetUser());
    }, [dispatch]);


    // ✅ Reset form whenever user is available/updated
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
        dispatch(asyncupdateUser(user.id, formData));
    };


    const deleteHandler = () => {
        dispatch(asyncdeleteUser(user.id)); // agar chahiye
        navigate('/login');
    };

    return user ? (
        <div>
            <form onSubmit={handleSubmit(updateUserHandler)} className="flex flex-col gap-3">
                <input {...register('username', { required: true })} placeholder="Username" className="border-b p-2" />
                <input {...register('email', { required: true })} placeholder="Email" className="border-b p-2" />
                <input {...register('password', { required: true })} placeholder="Password" className="border-b p-2" />

                <button type="submit" className="from-blue-600 to-blue-900 bg-gradient-to-r text-white p-2 mt-2 rounded">
                    Update User
                </button>
                <button
                    type="button"
                    onClick={deleteHandler}
                    className="from-blue-600 to-blue-900 bg-gradient-to-r text-white p-2 mt-2 rounded"
                >
                    Delete User
                </button>
            </form>
        </div>
    ) : (
        <div>Loading...</div>
    );
};

export default UserProfile;
