import { createAction } from "@reduxjs/toolkit";

const recipeFormReset = createAction("recipeForm/reset");
const UserFormReset = createAction("userForm/reset");


export {recipeFormReset, UserFormReset};