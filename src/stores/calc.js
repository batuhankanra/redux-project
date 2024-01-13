import { createSlice } from "@reduxjs/toolkit";


const initialState={
    value:0
}

const calc = createSlice({
    name:'calc',
    initialState,
    reducers:{
        _increment:(state)=>{
            state.value +=1
        },
        _decrement:state=>{
            state.value -=1
        },
    }
})
export const {_decrement,_increment} = calc.actions
export default calc.reducer