

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    carts: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadUser: (state, action) => {
            state.user = action.payload;
        }
    }
})


export const { loaduser } = userSlice.actions;
export default userSlice.reducer