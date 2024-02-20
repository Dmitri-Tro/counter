import { RootState } from "store/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (!serializedState) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: RootState) => {
    try {
        localStorage.setItem("state", JSON.stringify(state));
    } catch (err) {
        console.error('Error: ', err);
    }
};
