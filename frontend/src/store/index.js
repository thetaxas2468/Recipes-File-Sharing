import { configureStore } from "@reduxjs/toolkit";
import { recipeReset, userReset } from "./actions";
import { userReducer, changeEmail } from "./slices/userSlice";




const store = configureStore({
    reducer: {
        user: userReducer,
    //     recipes: recipesReducer
    }
});



export {
    store, recipeReset, userReset, userReducer, changeEmail
}

