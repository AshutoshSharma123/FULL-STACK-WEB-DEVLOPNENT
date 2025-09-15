import axios from "axios";
import { loaduser } from "./userSlice.jsx";

const asyncgetusers = () => async (dispatch, getState) => {
    try {

        console.log(getState());


        const res = await axios.get('/users');


        dispatch(loaduser(res.data));
    }
    catch (err) {
        console.log(err);

    }
}
export { asyncgetusers };