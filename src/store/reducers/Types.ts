import {AnyAction} from "redux";

export type State = {
    [state: string]: number | string | undefined;
};
export type StateInput = Partial<State>;

export declare const stateReducer: (
    state: State | undefined,
    action: AnyAction
) => StateInput;


