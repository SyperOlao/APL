import {combineReducers, createStore, applyMiddleware} from '@reduxjs/toolkit';
import {filter} from "./reducers/filter/filterReducer";
import thunk from "redux-thunk"

const reducer = combineReducers({
    filter: filter.reducer,
})

export const store = createStore(reducer, applyMiddleware(thunk));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch