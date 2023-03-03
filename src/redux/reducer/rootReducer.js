import { combineReducers } from "redux";
import { reducerCounter } from "./reducerCounter";
import { reducerAuth } from "./reducerAuth";

export const rootReducer = combineReducers({
    COUNTER: reducerCounter,
    AUTH: reducerAuth
})