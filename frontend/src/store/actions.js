import { createAction } from "@reduxjs/toolkit";

const recipeReset = createAction("recipe/reset");
const userReset = createAction("user/reset");


export {recipeReset, userReset};