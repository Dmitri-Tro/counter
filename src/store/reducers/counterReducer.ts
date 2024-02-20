const initialState: State = {
    count: 0,
    tempStartValue: 0,
    tempMaxValue: 5,
    startValue: 0,
    maxValue: 5,
    settingsAreChanged: false,
    startValueError: false,
    valueError: false,
};
export const counterReducer = (state: State = initialState, action: CounterReducerAction): State => {
    switch (action.type) {
        case "UPDATE_COUNT":
            return { ...state, count: state.count + 1 };
        case "RESET_COUNT":
            return { ...state, count: state.startValue };
        case "CHANGE_TEMP_START_VALUE":
            return { ...state, tempStartValue: Number(action.payload.value) };
        case "CHANGE_TEMP_MAX_VALUE":
            return { ...state, tempMaxValue: Number(action.payload.value) };
        case "SET_SETTINGS":
            return {
                ...state,
                count: Number(action.payload.startValue),
                startValue: Number(action.payload.startValue),
                maxValue: Number(action.payload.maxValue),
            };
        case "SETTINGS_ARE_CHANGED":
            return { ...state, settingsAreChanged: action.payload.isChanged };
        case "START_VALUE_ERROR":
            return { ...state, startValueError: state.tempStartValue < 0 };
        case "VALUE_ERROR":
            return { ...state, valueError: state.tempStartValue >= state.tempMaxValue };
        default:
            return state;
    }
};

// Actions
export const updateCountAC = () => {
    return {
        type: "UPDATE_COUNT",
    } as const;
};
export const resetCountAC = () => {
    return {
        type: "RESET_COUNT",
    } as const;
};
export const changeTempStartValueAC = (value: string) => {
    return {
        type: "CHANGE_TEMP_START_VALUE",
        payload: {
            value,
        },
    } as const;
};
export const changeTempMaxValueAC = (value: string) => {
    return {
        type: "CHANGE_TEMP_MAX_VALUE",
        payload: {
            value,
        },
    } as const;
};
export const setSettingsAC = (startValue: number, maxValue: number) => {
    return {
        type: "SET_SETTINGS",
        payload: {
            startValue,
            maxValue,
        },
    } as const;
};
export const settingsIsChangedAC = (isChanged: boolean) => {
    return {
        type: "SETTINGS_ARE_CHANGED",
        payload: {
            isChanged,
        },
    } as const;
};
export const startValueErrorAC = () => {
    return {
        type: "START_VALUE_ERROR",
    } as const;
};
export const valueErrorAC = () => {
    return {
        type: "VALUE_ERROR",
    } as const;
};

// Types
export type State = {
    count: number
    tempStartValue: number
    tempMaxValue: number
    startValue: number
    maxValue: number
    settingsAreChanged: boolean
    startValueError: boolean
    valueError: boolean
};

type CounterReducerAction =
    | ReturnType<typeof updateCountAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof changeTempStartValueAC>
    | ReturnType<typeof changeTempMaxValueAC>
    | ReturnType<typeof setSettingsAC>
    | ReturnType<typeof settingsIsChangedAC>
    | ReturnType<typeof startValueErrorAC>
    | ReturnType<typeof valueErrorAC>;