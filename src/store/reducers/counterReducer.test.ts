import {
    changeTempMaxValueAC,
    changeTempStartValueAC,
    counterReducer,
    resetCountAC,
    setSettingsAC,
    settingsIsChangedAC,
    startValueErrorAC,
    State,
    updateCountAC,
    valueErrorAC,
} from "./counterReducer";

let startState: State;
beforeEach(() => {
    startState = {
        count: 1,
        tempStartValue: 0,
        tempMaxValue: 5,
        startValue: 0,
        maxValue: 5,
        settingsAreChanged: false,
        startValueError: false,
        valueError: false,
    };
});

test("should update count", () => {
    const endState = counterReducer(startState, updateCountAC());
    expect(endState.count).toBe(2);
    expect(endState.tempStartValue).toBe(0);
    expect(endState.tempMaxValue).toBe(5);
    expect(endState.startValue).toBe(0);
    expect(endState.maxValue).toBe(5);
    expect(endState.settingsAreChanged).toBe(false);
    expect(endState.startValueError).toBe(false);
    expect(endState.valueError).toBe(false);
});
test("should update tempStartValue", () => {
    const endState = counterReducer(startState, changeTempStartValueAC("5"));
    expect(endState.count).toBe(1);
    expect(endState.tempStartValue).toBe(5);
    expect(endState.tempMaxValue).toBe(5);
    expect(endState.startValue).toBe(0);
    expect(endState.maxValue).toBe(5);
    expect(endState.settingsAreChanged).toBe(false);
    expect(endState.startValueError).toBe(false);
    expect(endState.valueError).toBe(false);
});
test("should update tempMaxValue", () => {
    const endState = counterReducer(startState, changeTempMaxValueAC("6"));
    expect(endState.count).toBe(1);
    expect(endState.tempStartValue).toBe(0);
    expect(endState.tempMaxValue).toBe(6);
    expect(endState.startValue).toBe(0);
    expect(endState.maxValue).toBe(5);
    expect(endState.settingsAreChanged).toBe(false);
    expect(endState.startValueError).toBe(false);
    expect(endState.valueError).toBe(false);
});
test("should reset count", () => {
    const endState = counterReducer(startState, resetCountAC());
    expect(endState.count).toBe(0);
    expect(endState.tempStartValue).toBe(0);
    expect(endState.tempMaxValue).toBe(5);
    expect(endState.startValue).toBe(0);
    expect(endState.maxValue).toBe(5);
    expect(endState.settingsAreChanged).toBe(false);
    expect(endState.startValueError).toBe(false);
    expect(endState.valueError).toBe(false);
});
test("should set settings", () => {
    const endState = counterReducer(startState, setSettingsAC(2, 6));
    expect(endState.count).toBe(2);
    expect(endState.tempStartValue).toBe(0);
    expect(endState.tempMaxValue).toBe(5);
    expect(endState.startValue).toBe(2);
    expect(endState.maxValue).toBe(6);
    expect(endState.settingsAreChanged).toBe(false);
    expect(endState.startValueError).toBe(false);
    expect(endState.valueError).toBe(false);
});
test("should throw settings are changed", () => {
    const endState = counterReducer(startState, settingsIsChangedAC(true));
    expect(endState.count).toBe(1);
    expect(endState.tempStartValue).toBe(0);
    expect(endState.tempMaxValue).toBe(5);
    expect(endState.startValue).toBe(0);
    expect(endState.maxValue).toBe(5);
    expect(endState.settingsAreChanged).toBe(true);
    expect(endState.startValueError).toBe(false);
    expect(endState.valueError).toBe(false);
});
test("should throw start value error", () => {
    startState = { ...startState, tempStartValue: -1 };
    const endState = counterReducer(startState, startValueErrorAC());
    expect(endState.count).toBe(1);
    expect(endState.tempStartValue).toBe(-1);
    expect(endState.tempMaxValue).toBe(5);
    expect(endState.startValue).toBe(0);
    expect(endState.maxValue).toBe(5);
    expect(endState.settingsAreChanged).toBe(false);
    expect(endState.startValueError).toBe(true);
    expect(endState.valueError).toBe(false);
});
test("should throw value error", () => {
    startState = { ...startState, tempStartValue: 5 };
    const endState = counterReducer(startState, valueErrorAC());
    expect(endState.count).toBe(1);
    expect(endState.tempStartValue).toBe(5);
    expect(endState.tempMaxValue).toBe(5);
    expect(endState.startValue).toBe(0);
    expect(endState.maxValue).toBe(5);
    expect(endState.settingsAreChanged).toBe(false);
    expect(endState.startValueError).toBe(false);
    expect(endState.valueError).toBe(true);
});
