import { createSlice } from "@reduxjs/toolkit";


const initialState={
    name:false,
    data:false,
    open:false
}

const modal =createSlice({
    name:'modal',
    initialState,
    reducers:{
        _openModal:(state,action)=>{
            state.name=action.payload.name,
            state.data=action?.payload.data || false,
            state.open=true
        },
        _closeModal:(state)=>{
            state.data=false,
            state.name=false,
            state.open=false

        }

    }
})
export const {_openModal,_closeModal} = modal.actions
export default modal.reducer