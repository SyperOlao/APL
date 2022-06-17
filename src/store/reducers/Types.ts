import { AnyAction } from "redux";
export type State = {
    reducerA: number;
};
export type StateInput = Partial<State>;

export declare const stateReducer: (
    state: State | undefined,
    action: AnyAction
) => StateInput;


