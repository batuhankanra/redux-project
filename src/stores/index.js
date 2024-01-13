import { configureStore } from "@reduxjs/toolkit";

import calc from "./calc";

const store = configureStore({
    reducer:{
        calc
    }
})
export default store