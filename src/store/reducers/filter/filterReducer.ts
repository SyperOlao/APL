import {createSlice} from "@reduxjs/toolkit";

export type State = {
    [state: string]: number | string | undefined;
};

const initialState: State = {
    first1: 'b3',
    first2: 'k2',
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