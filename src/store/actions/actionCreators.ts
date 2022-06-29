import {DROP_DOWN_LIST} from "./actionsTypes";

export const firstActionCreator = (value: string | number) => ({
    type: DROP_DOWN_LIST,
    first: value,
})