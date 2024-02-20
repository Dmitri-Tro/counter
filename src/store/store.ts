import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { thunk } from "redux-thunk";
import { loadState, saveState } from "utils/localStorage";

const reducers = combineReducers({
    counterState: counterReducer,
});

export type RootState = ReturnType<typeof reducers>;
export const store = createStore(reducers, loadState(), applyMiddleware(thunk));

store.subscribe(() => {
    saveState(store.getState());
});

// @ts-ignore
window.store = store;
