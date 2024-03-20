import { configureStore } from "@reduxjs/toolkit";
import { recipeReset, userReset } from "./actions";




const store = configureStore({
    reducer: {
    //     user: userReducer,
    //     recipes: recipesReducer
    // }
});



export {
    store, recipeReset, userReset
}

