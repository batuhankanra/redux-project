import { configureStore } from "@reduxjs/toolkit";

import calc from "./calc";
import todo from "./todo";
import auth from "./auth";
import modal from "./modal";
import theme from "./theme";

const store = configureStore({
    reducer:{
        calc,
        todo,
        auth,
        modal,
        theme
    }
})
export default store