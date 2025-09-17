import axios from "../../api/axiosconfig.jsx";
import loaduser from "../features/userSlice.jsx";

export const asyncgetUser = () => (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user)
            dispatch(loaduser(user))
        else console.log("no user loged in");

    }
    catch (error) {
        console.log(error);

    }
}





export const asynclogoutUser = (dispatch, getState) => {
    localStorage.removeItem('user');
    console.log('user logged out');

}


export const asyncregisterUser = (user) =>

    async (dispatch, getstate) => {
        try {
            const res = await axios.post('users', user)
            console.log(res);



        } catch (error) {
            console.log("error while register the user", error);

        }
    }




export const asyncloginUser = (user) =>
    async (dispatch, getstate) => {

        try {
            const { data } = await axios.get(`/users?email=${user.email}&password=${user.password}`);
            console.log(data[0]);

            localStorage.setItem('user', JSON.stringify(data[0]));
        }
        catch (error) {
            console.log(error);

        }


    }









