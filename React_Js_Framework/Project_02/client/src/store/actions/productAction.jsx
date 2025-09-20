

import { loadproduct } from "../features/productSlice.jsx";
import axios from "../../api/axiosconfig.jsx";



export const asyncloadProduct = () => async (dispatch, getState) => {
    try {
        await axios.get('products');
        dispatch(loadproduct());
    }
    catch (error) {
        console.log(error);
    }
}


export const asynccreateProduct = (product) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post('products', product);
        dispatch(asyncloadProduct());
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
};

