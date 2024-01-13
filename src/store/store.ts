import {combineReducers, legacy_createStore as createStore } from "redux";
import {counterReducer} from "./reducers/counterReducer";

const reducers = combineReducers({
counterState: counterReducer
});

export type RootState = ReturnType<typeof reducers>

export const store = createStore(reducers);

// @ts-ignore
window.store = store;