
import axios from "../../api/axiosconfig.jsx";
import { loadUser } from "../features/userSlice.jsx";

// Load user from localStorage
export const asyncgetUser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) dispatch(loadUser(user));
        else console.log("no user logged in");
    }
    catch (error) {
        console.log(error);
    }
};

export const asynclogoutUser = () => (dispatch, getState) => {
    localStorage.removeItem("user");
    dispatch(loadUser(null)); // clear Redux state too
    console.log("user logged out");
};

export const asyncregisterUser = (user) => async (dispatch, getstate) => {
    try {
        const res = await axios.post("users", user);
        console.log(res);
    } catch (error) {
        console.log("error while register the user", error);
    }
};

export const asyncloginUser = (user) => async (dispatch, getstate) => {
    try {
        const { data } = await axios.get(
            `/users?email=${user.email}&password=${user.password}`
        );
        if (data[0].user) {
            dispatch(loadUser(data)); // ✅ update Redux
            localStorage.setItem("user", JSON.stringify(data[0])); // ✅ persist
        }
    } catch (error) {
        console.log(error);
    }
};





