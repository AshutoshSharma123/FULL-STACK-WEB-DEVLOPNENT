import axios from "../../api/axiosconfig.jsx";


export const asyncregisterUser = (user) =>

    async (dispatch, getstate) => {
        try {
            const res = await axios.post('users', user)
            console.log(res);



        } catch (error) {
            console.log("error while register the user", error);

        }
    }
