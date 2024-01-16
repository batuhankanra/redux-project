import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    theme:'dark'
}

const theme=createSlice({
    name:'theme',
    initialState,
    reducers:{
        _setTheme:(state,action)=>{
            state.theme=action.payload
        }
    }
})

export const { _setTheme} = theme.actions
export default theme.reducer