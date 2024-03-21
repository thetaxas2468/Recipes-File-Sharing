import { createSlice } from "@reduxjs/toolkit";
import { userReset } from "../actions";



const userSlice = createSlice({
    name: "user",
    initialState: {
        email:""
    },
    reducers: {
        changeEmail(state, action) {
            state.email = action.payload
        },
    },
    extraReducers(builder) {
        builder.addCase(userReset, (state, action) => {
            state.email = "";
        })
    }
})

export const { changeEmail } = userSlice.actions;
export const userReducer = userSlice.reducer;