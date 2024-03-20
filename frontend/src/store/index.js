import { configureStore } from "@reduxjs/toolkit";
import { recipeFormReset, UserFormReset } from "./actions";
// import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
// import { formReducer, changeCost, changeName } from "./slices/formSlice";



const store = configureStore({
    reducer: {
        // userForm: userReducer,
        // recipes: recipesReducer
    }
});



export {
    store, changeCost, changeName, addCar, removeCar, changeSearchTerm, reset
}

