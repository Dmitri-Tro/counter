type CounterReducerAction =
    UpdateCountAC
    | ResetCountAC
    | ChangeTempStartValueAC
    | ChangeTempMaxValueAC
    | SetSettingsAC
    | SettingsIsChangedAC
    | StartValueErrorAC
    | ValueErrorAC

type UpdateCountAC = ReturnType<typeof updateCountAC>
export const updateCountAC = () => {
    return {
        type: 'UPDATE_COUNT',
    } as const
};

type ResetCountAC = ReturnType<typeof resetCountAC>
export const resetCountAC = () => {
    return {
        type: 'RESET_COUNT',
    } as const
};

type ChangeTempStartValueAC = ReturnType<typeof changeTempStartValueAC>
export const changeTempStartValueAC = (value: number) => {
    return {
        type: 'CHANGE_TEMP_START_VALUE',
        payload: {
            value
        }
    } as const
};

type ChangeTempMaxValueAC = ReturnType<typeof changeTempMaxValueAC>
export const changeTempMaxValueAC = (value: number) => {
    return {
        type: 'CHANGE_TEMP_MAX_VALUE',
        payload: {
            value
        }
    } as const
};

type SetSettingsAC = ReturnType<typeof setSettingsAC>
export const setSettingsAC = (startValue: number, maxValue: number) => {
    return {
        type: 'SET_SETTINGS',
        payload: {
            startValue,
            maxValue
        }
    } as const
};

type SettingsIsChangedAC = ReturnType<typeof settingsIsChangedAC>
export const settingsIsChangedAC = (isChanged: boolean) => {
    return {
        type: 'SETTINGS_ARE_CHANGED',
        payload: {
            isChanged
        }
    } as const
};

type StartValueErrorAC = ReturnType<typeof startValueErrorAC>
export const startValueErrorAC = () => {
    return {
        type: 'START_VALUE_ERROR',
    } as const
};

type ValueErrorAC = ReturnType<typeof valueErrorAC>
export const valueErrorAC = () => {
    return {
        type: 'VALUE_ERROR',
    } as const
};

export type State = {
    count: number
    tempStartValue: number,
    tempMaxValue: number,
    startValue: number
    maxValue: number
    settingsAreChanged: boolean,
    startValueError: boolean,
    valueError: boolean,
}

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
        case 'UPDATE_COUNT':
            return {...state, count: state.count + 1}
        case 'RESET_COUNT':
            return {...state, count: state.startValue}
        case 'CHANGE_TEMP_START_VALUE':
            return {...state, tempStartValue: action.payload.value}
        case 'CHANGE_TEMP_MAX_VALUE':
            return {...state, tempMaxValue: action.payload.value}
        case 'SET_SETTINGS':
            return {...state, count: Number(action.payload.startValue), startValue: Number(action.payload.startValue), maxValue: Number(action.payload.maxValue)}
        case 'SETTINGS_ARE_CHANGED':
            return {...state, settingsAreChanged: action.payload.isChanged}
        case 'START_VALUE_ERROR':
            return {...state, startValueError: state.tempStartValue < 0}
        case 'VALUE_ERROR':
            debugger
            return {...state, valueError: state.tempStartValue >= state.tempMaxValue}
        default:
            return state
    }
}