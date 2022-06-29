import {State, StateInput} from "../Types";
import {AnyAction} from "redux";

const initialState: State = {
    first1: 'b3',
}


export const filterReducer = (state = initialState, action: AnyAction): StateInput =>{
    switch (action.type) {
        default:
            return state;
    }
}