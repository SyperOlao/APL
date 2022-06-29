import {State, StateInput} from "../Types";
import {AnyAction} from "redux";
import {createSlice} from "@reduxjs/toolkit";

const initialState: State = {
    first1: 'b3',
    first2: 'k2',
}


export const filterReducer = (state = initialState, action: AnyAction): StateInput =>{
    switch (action.type) {
        default:
            return state;
    }
}

export const filter = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers:{
        dropDownFirst1: (state, action)=>{
            state.first1 = action.payload;
        },
        dropDownFirst2: (state, action)=>{
            state.first2 = action.payload;
        }
    }
});