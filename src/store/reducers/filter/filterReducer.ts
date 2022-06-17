import {StateInput} from "../Types";
import {AnyAction} from "redux";

const initialState = {

}


export const filterReducer = (state = initialState, action: AnyAction): StateInput =>{
    switch (action.type) {
        default:
            return state;
    }
}